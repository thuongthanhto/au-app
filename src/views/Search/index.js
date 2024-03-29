import {connect, useDispatch, useSelector} from 'react-redux';
import update from 'immutability-helper';
import React, {useState, useEffect, useRef} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Swiper from 'react-native-swiper';
import Toast from 'react-native-root-toast';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity as Touch,
  Image,
  Platform,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import NumericInput from 'react-native-numeric-input';
import Pie from './Pie';
import styles from './styles';
import {Images} from '../../assets/images';
import stylesBasicInfo from '../BasicInfo/styles';
import Responsive from '../../modules/utils/responsive';
import pickerSelectStyles from '../BasicInfo/pickerSelectStyles';
import {getProductsRequest} from '../../actions/Search';
import {
  toClosest,
  getRMR,
  getActivityDuration,
} from '../../modules/utils/helpers';
import {colors} from '../../modules/colors';
import {getProfileSelector} from '../../selectors/homeSelector';

const SearchScreen = props => {
  const dispatch = useDispatch();
  const prevParam = props.navigation.getParam('params');
  const [params, setParams] = useState(prevParam);
  const [isDetail, setIsDetail] = useState('');
  const [resultSearch, setResultSearch] = useState(props.listProducts.Results);
  const [prodTypeFilter, setProdTypeFilter] = useState(0);
  const [alphabeticalFilter, setAlphabeticalFilter] = useState('asc');
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const stylesTemp = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      width: '100%',
    },
    slide2: {
      flex: 1,
      width: '100%',
    },
  });

  React.useEffect(() => {
    props.navigation.setParams({quantity: props.quantityMeals});
  }, []);

  React.useEffect(() => {
    setResultSearch(props.listProducts.Results);
  }, [props.listProducts]);

  const formatProductType = prodType =>
    prodType.map(item => ({
      value: item.Id,
      label: item.Name,
    }));

  const handleChange = async (value, meal) => {
    const indexMealUpdate = resultSearch.findIndex(item => item.Id === meal.Id);
    const newData = await update(resultSearch, {
      [indexMealUpdate]: {
        quantity: {$set: value},
        consume: {$set: value * meal.Energy},
        percent: {
          $set: (
            ((value * meal.Energy) / toClosest(props.figure, 100)) *
            100
          ).toFixed(1),
        },
      },
    });
    setResultSearch(newData);
  };

  React.useEffect(() => {}, [JSON.stringify(resultSearch)]);

  const handleGetProducts = async newParams => {
    setLoading(true);
    await props.getProductsRequest(newParams, res => {
      res && setLoading(false);
    });
  };

  const handleGetProductsAndroid = async newParams => {
    await props.getProductsRequest(newParams, res => {
      return res;
    });
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setAlphabeticalFilter('asc');
    setProdTypeFilter(0);
    await props.getProductsRequest(prevParam, res => {
      res && setIsRefreshing(false);
    });
  };

  const handleLoadMore = async () => {
    setIsLoadMore(true);
    const newParams = {...params};
    newParams.pageSize = params.pageSize + 10;
    setParams(newParams);
    await props.getProductsRequest(newParams, res => {
      res && setIsLoadMore(false);
    });
  };

  const handleFilter = async (value, type) => {
    const newParams = {...params};
    type === 'prodType'
      ? setProdTypeFilter(value)
      : setAlphabeticalFilter(value);
    type === 'prodType'
      ? (newParams.categories = value ? [value] : [])
      : (newParams.order = value);
    setParams(newParams);
    Platform.OS === 'android' && (await handleGetProductsAndroid(newParams));
  };

  const onDonePressIos = async () => {
    Platform.OS === 'ios' && (await handleGetProducts(params));
  };

  const addToMeal = item => {
    dispatch({type: 'ADD_TO_MEAL', payload: item});
    const toast = Toast.show('Added to meal', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      },
    });
  };

  useEffect(() => {
    props.navigation.setParams({quantity: props.quantityMeals});
  }, [props.quantityMeals]);

  const ItemMeal = ({item}) => (
    <Touch
      style={styles.itemMealContainer}
      onPress={() => setIsDetail(item.Id)}>
      <View style={styles.flexRowContainer}>
        <Text style={[styles.itemMealTitle, {width: '75%'}]} numberOfLines={1}>
          {item.Name}
        </Text>
        <Text
          style={[styles.itemMealTitle, {width: '25%', textAlign: 'right'}]}>
          {parseInt(item.Energy, 10)} kJ
        </Text>
      </View>
      <Text style={styles.itemMealSubTitle}>{item.QSR_name}</Text>
    </Touch>
  );

  const renderSummary = item => {
    const profile = useSelector(state => getProfileSelector(state));
    let weight;
    let rmr = getRMR(profile.sex, profile.height, profile.weight, profile.age);
    if (profile.weight) {
      weight = profile.weight;
    } else {
      weight = profile.weight || 55;
      rmr = 1319.6;
    }
    const firgual = toClosest(profile.BMR.goal.value, 100);
    const totalPercent = ((item.consume / firgual) * 100).toFixed(1);
    const totalEnery = item.consume * item.quantity;

    const light = Math.round(
      getActivityDuration('Light', rmr, weight, totalEnery) * 60,
    );
    const medium = Math.round(
      getActivityDuration('Medium', rmr, weight, totalEnery) * 60,
    );

    const vigorous = Math.round(
      getActivityDuration('Vigorous', rmr, weight, totalEnery) * 60,
    );

    let percent = totalPercent;
    if (totalPercent > 100) {
      percent = 99.9;
    }

    const dataChart = [
      {
        percentage: parseFloat(percent),
        color: '#00AAEA',
      },
      {
        percentage: parseFloat(100 - percent),
        color: colors.GRAY,
      },
    ];

    return (
      <View style={[styles.flexRowContainer, {paddingTop: Responsive.h(5)}]}>
        {/* <View style={[{paddingHorizontal: Responsive.h(5)}]}>
          <Text style={styles.itemMealTitle}>Meal Summary:</Text>
          <Text style={styles.activityText}>Excercise equivalents:</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.light} style={styles.imagesContent} />
            <Text style={styles.valueContent}>{light} mins</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.medium} style={styles.imagesContent} />
            <Text style={styles.valueContent}>{medium} mins</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.vigorous} style={styles.imagesContent} />
            <Text style={styles.valueContent}>{vigorous} mins</Text>
          </View>
        </View> */}
        <View style={[styles.chartContainer, {width: '100%'}]}>
          <Pie radius={60} sections={dataChart} />
        </View>
      </View>
    );
  };

  const ItemMealDetail = ({item}) => (
    <View style={styles.itemMealContainer}>
      <Touch style={styles.flexRowContainer} onPress={() => setIsDetail('')}>
        <Text style={styles.itemMealTitle}>{item.Name}</Text>
      </Touch>
      <Text style={styles.itemMealSubTitle}>
        {item.QSR_name},
        <Text style={styles.itemMealSubTitleSize}>
          {item.Size === 0 ? ' N/A' : ` ${item.Size} ${item.Unit}`}
        </Text>
      </Text>
      <Text style={styles.itemMealSubTitleSize}>
        There are
        <Text style={styles.itemMealSubTitle}> {item.Serves} </Text>
        serving(s) in this product.
      </Text>
      <Text style={styles.itemMealSubTitleSize}>
        Eating
        <Text style={styles.itemMealSubTitle}> {item.quantity} </Text>of
        <Text style={styles.itemMealSubTitle}> {item.Serves} </Text>
        serving =
        <Text style={styles.itemMealSubTitle}>
          {' '}
          {parseInt(item.Energy, 10)}{' '}
        </Text>
        kJ in your portion size
      </Text>
      <View style={[styles.flexRowContainer, {paddingTop: Responsive.h(5)}]}>
        <Text
          style={[styles.itemMealTitle, {width: '100%', textAlign: 'center'}]}>
          {item.percent}% daily kJ
        </Text>
      </View>

      <Swiper
        style={stylesTemp.wrapper}
        height={200}
        loop={false}
        removeClippedSubviews={false}>
        <View style={stylesTemp.slide1}>
          <View style={[styles.addToMealContainer]}>
            <View
              style={[
                styles.flexRowContainer,
                {width: '50%', alignItems: 'center'},
              ]}>
              <NumericInput
                type="plus-minus"
                minValue={1}
                initValue={item.quantity}
                onChange={value => handleChange(value, item)}
              />
              <Text style={styles.itemMealSubTitleSize}>of</Text>
              <Text
                style={[
                  styles.itemMealSubTitle,
                  {fontSize: Responsive.h(18), paddingRight: Responsive.h(5)},
                ]}>
                {item.Serves}
              </Text>
            </View>

            <View
              style={[
                styles.flexRowContainer,
                {width: '45%', alignItems: 'center'},
              ]}>
              <Text style={styles.itemMealSubTitleSize}>=</Text>
              <Text
                style={[styles.itemMealSubTitle, {fontSize: Responsive.h(18)}]}>
                {parseInt(item.consume, 10)} kJ
              </Text>
              <Image
                source={Images.check_meal}
                resizeMode="contain"
                style={{width: Responsive.h(18), height: Responsive.h(24)}}
              />
              <Touch onPress={() => addToMeal(item)}>
                <Image
                  source={Images.add_meal}
                  resizeMode="contain"
                  style={{width: Responsive.h(40), height: Responsive.h(40)}}
                />
              </Touch>
            </View>
          </View>
          <View style={[styles.flexRowContainer, {width: '100%'}]}>
            <Text style={styles.itemMealSubTitleSize}>Quantity</Text>
            <Text style={styles.itemMealSubTitleSize}>Servings(s)</Text>
            <Text style={styles.itemMealSubTitleSize}>Add to Meal</Text>
          </View>
        </View>
        <View style={stylesTemp.slide2}>{renderSummary(item)}</View>
      </Swiper>
    </View>
  );

  const renderItem = ({item}) =>
    isDetail !== item.Id ? (
      <ItemMeal item={item} />
    ) : (
      <ItemMealDetail item={item} />
    );

  const renderFooter = () =>
    isLoadMore ? <ActivityIndicator style={{color: colors.BLACK}} /> : null;

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={loading} />
      <View style={styles.topWrap} />
      <View style={styles.filterContainer}>
        <RNPickerSelect
          value={alphabeticalFilter}
          items={[
            {value: 'asc', label: 'Sort by Product Alphabetical A-Z'},
            {value: 'desc', label: 'Sort by Product Alphabetical Z-A'},
          ]}
          onValueChange={value => handleFilter(value, 'alphabet')}
          onDonePress={onDonePressIos}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          Icon={() => <View style={stylesBasicInfo.iconSelect} />}
        />
        <View style={{height: Responsive.h(10)}} />
        <RNPickerSelect
          value={prodTypeFilter}
          items={formatProductType(props.listCategory)}
          placeholder={{
            label: 'Refine by Chain or Product Type',
            value: '',
          }}
          onValueChange={value => handleFilter(value, 'prodType')}
          onDonePress={onDonePressIos}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          Icon={() => <View style={stylesBasicInfo.iconSelect} />}
          disabled={!!prevParam.categories.length}
        />
      </View>
      <View style={styles.body}>
        <View style={{flex: 1}}>
          {resultSearch.length > 0 && (
            <FlatList
              data={resultSearch}
              renderItem={renderItem}
              keyExtractor={item => `${item.Id}`}
              extraData={isDetail}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={handleRefresh}
                />
              }
              ListFooterComponent={renderFooter}
              onEndReachedThreshold={0.4}
              onEndReached={handleLoadMore}
            />
          )}
          {resultSearch.length === 0 && (
            <Text style={styles.noResultText}>
              No results found. Check your spelling or try filtering by product
              type.
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  listCategory: state.SearchReducer.listCategory,
  listTypeOfFood: state.SearchReducer.listTypeOfFood,
  listProducts: state.SearchReducer.listProducts,
  figure: state.SearchReducer.figure,
  listMealAdded: state.SearchReducer.listMealAdded,
  quantityMeals: state.SearchReducer.quantityMeals,
  ...state,
});

const mapDispatchToProps = {
  getProductsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
