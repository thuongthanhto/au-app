import {connect} from 'react-redux';
import update from 'immutability-helper';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity as Touch, Image, TextInput, Platform, RefreshControl, ActivityIndicator } from 'react-native';

import styles from './styles';
import { Images } from '../../assets/images';
import stylesBasicInfo from '../BasicInfo/styles';
import Responsive from '../../modules/utils/responsive';
import pickerSelectStyles from '../BasicInfo/pickerSelectStyles';
import CircleLoading from '../../components/Presentations/CircleLoading';
import { getProductsRequest } from '../../actions/Search';
import { toClosest } from '../../modules/utils/helpers';
import { colors } from '../../modules/colors';

const SearchScreen = (props) => {
  const prevParam = props.navigation.getParam('params');
  const [params, setParams] = useState(prevParam);
  const [isDetail, setIsDetail] = useState('');
  const [resultSearch, setResultSearch] = useState(props.listProducts.Results);
  const [prodTypeFilter, setProdTypeFilter] = useState(0);
  const [alphabeticalFilter, setAlphabeticalFilter] = useState('asc');
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);

  React.useEffect(() => {
    setResultSearch(props.listProducts.Results);
  }, [props.listProducts]);

  const formatProductType = (prodType) => prodType.map(item => ({
    value: item.Id,
    label: item.Name,
  }));

  const handleChange = (value, meal) => {
    const indexMealUpdate = resultSearch.findIndex(item => item.Id === meal.Id);
    setResultSearch(
      update(resultSearch, {
        [indexMealUpdate]: {
          quantity: { $set: value },
          consume: { $set: value * meal.Energy },
          percent: { $set: ((value * meal.Energy) / toClosest(props.figure, 100) * 100).toFixed(1) }
        }
    }));
  };

  const handleGetProducts = async (newParams) => {
    setLoading(true);
    await props.getProductsRequest(newParams, res => {
      res && setLoading(false);
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
    const newParams = { ...params };
    newParams.pageSize = params.pageSize + 10;
    setParams(newParams);
    await props.getProductsRequest(newParams, res => {
      res && setIsLoadMore(false);
    });
  };

  const handleFilter = async (value, type) => {
    const newParams = { ...params };
    type === 'prodType' ? setProdTypeFilter(value) : setAlphabeticalFilter(value);
    type === 'prodType' ? newParams.categories = (value ? [value] : []) : newParams.order = value;
    setParams(newParams);
    Platform.OS === 'android' && await handleGetProducts(newParams);
  };

  const onDonePressIos = async () => {
    Platform.OS === 'ios' && await handleGetProducts(params);
  };

  const ItemMeal = ({ item }) => (
    <Touch style={styles.itemMealContainer} onPress={() => setIsDetail(item.Id)}>
      <View style={styles.flexRowContainer}>
        <Text style={[styles.itemMealTitle, { width: '75%'}]} numberOfLines={1}>{item.Name}</Text>
        <Text style={[styles.itemMealTitle, { width: '25%', textAlign: 'right' }]}>{item.Energy} kJ</Text>
      </View>
      <Text style={styles.itemMealSubTitle}>{item.QSR_name}</Text>
    </Touch>
  );

  const ItemMealDetail = ({ item }) => (
    <View style={styles.itemMealContainer}>
      <Touch style={styles.flexRowContainer} onPress={() => setIsDetail('')}>
        <Text style={styles.itemMealTitle}>{item.Name}</Text>
      </Touch>
      <Text style={styles.itemMealSubTitle}>
        {item.QSR_name},
        <Text style={styles.itemMealSubTitleSize}> {item.Size}{item.Unit}</Text>
      </Text>
      <Text style={styles.itemMealSubTitleSize}>
        There are
        <Text style={styles.itemMealSubTitle}> {item.Serves} </Text>
        serving(s) in this product.
      </Text>
      <Text style={styles.itemMealSubTitleSize}>
        Eating
        <Text style={styles.itemMealSubTitle}> {item.Serves} </Text>of<Text style={styles.itemMealSubTitle}> {item.Serves} </Text>
        serving =
        <Text style={styles.itemMealSubTitle}> {item.Energy} </Text>
        kJ in your portion size
      </Text>
      <View style={[styles.flexRowContainer, {paddingTop: Responsive.h(5)}]}>
        <Text style={[styles.itemMealTitle, { width: '75%'}]} numberOfLines={1}>{item.Energy} kJ</Text>
        <Text style={[styles.itemMealTitle, { width: '25%', textAlign: 'right' }]}>{item.percent}%</Text>
      </View>
      <Text style={styles.itemMealSubTitleSize}>Add to Meal</Text>
      <View style={[styles.addToMealContainer]}>
        <View style={[styles.flexRowContainer, {width: '40%', alignItems: 'center'}]}>
          <TextInput
            value={item.quantity.toString()}
            style={styles.input}
            onChangeText={(value) => handleChange(value, item)}
            keyboardType="numeric"
            maxLength={4}
          />
          <Text style={styles.itemMealSubTitleSize}>of</Text>
          <Text style={[styles.itemMealSubTitle, {fontSize: Responsive.h(18)}]}>1</Text>
        </View>
        <Text style={styles.itemMealSubTitleSize}>=</Text>
        <View style={[styles.flexRowContainer, {width: '40%', alignItems: 'center'}]}>
          <Text style={[styles.itemMealSubTitle, {fontSize: Responsive.h(18)}]}>{item.consume} kJ</Text>
          <Image source={Images.check_meal} resizeMode="contain" style={{width: Responsive.h(18), height: Responsive.h(24)}} />
          <Touch onPress={() => alert('cc')}>
            <Image source={Images.add_meal} resizeMode="contain" style={{width: Responsive.h(40), height: Responsive.h(40)}} />
          </Touch>
        </View>
      </View>
      <View style={[styles.flexRowContainer, {width: '50%'}]}>
        <Text style={styles.itemMealSubTitleSize}>Quantity</Text>
        <Text style={styles.itemMealSubTitleSize}>Servings(s)</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: Responsive.h(20)}}>
        <Image source={Images.three_dots} resizeMode="contain" style={{width: Responsive.h(50), height: Responsive.h(10)}} />
      </View>
    </View>
  );

  const renderItem = ({ item }) => isDetail !== item.Id ? <ItemMeal item={item} /> : <ItemMealDetail item={item} />;

  const renderFooter = () => isLoadMore ? <ActivityIndicator style={{ color: colors.BLACK }} /> : null;
  
  return (
    <SafeAreaView style={styles.container}>
      <CircleLoading isVisible={loading}/>
      <View style={styles.topWrap} />
      <View style={styles.filterContainer}>
        <RNPickerSelect
          value={alphabeticalFilter}
          items={[
            {value: 'asc', label: 'Sort by Product Alphabetical A-Z'},
            {value: 'desc', label: 'Sort by Product Alphabetical Z-A'}
          ]}
          onValueChange={(value) => handleFilter(value, 'alphabet')}
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
          onValueChange={(value) => handleFilter(value, 'prodType')}
          onDonePress={onDonePressIos}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          Icon={() => <View style={stylesBasicInfo.iconSelect} />}
          disabled={!!prevParam.categories.length}
        />
      </View>
      <View style={styles.body}>
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
          onEndReachedThreshold={0}
          onEndReached={handleLoadMore}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  listCategory: state.SearchReducer.listCategory,
  listTypeOfFood: state.SearchReducer.listTypeOfFood,
  listProducts: state.SearchReducer.listProducts,
  figure: state.SearchReducer.figure
});

const mapDispatchToProps = {
  getProductsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
