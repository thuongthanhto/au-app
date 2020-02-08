import {connect} from 'react-redux';
import update from 'immutability-helper';
import React, {useState, useEffect} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity as Touch, Image, TextInput } from 'react-native';

import styles from './styles';
import { Images } from '../../assets/images';
import stylesBasicInfo from '../BasicInfo/styles';
import Responsive from '../../modules/utils/responsive';
import pickerSelectStyles from '../BasicInfo/pickerSelectStyles';
import { getAllCategoriesRequest, getTypeOfFoodAvailableRequest, getProductsRequest } from '../../actions/Search';

function formatProductType(prodType) {
  const list = [];
  prodType.forEach(element => {
    const temp = {
      value: element.Id,
      label: element.Name,
    };
    list.push(temp);
  });

  return list;
}

const SearchScreen = (props) => {
  const params = props.navigation.getParam('params');
  const [isDetail, setIsDetail] = useState('');
  const [resultSearch, setResultSearch] = useState(props.listProducts.Results);
  const [prodTypeFilter, setProdTypeFilter] = useState(0);
  const [alphabeticalFilter, setAlphabeticalFilter] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      await props.getAllCategoriesRequest('GetCategories');
      await props.getTypeOfFoodAvailableRequest('GetQSRs');
    };
    fetchData();
  }, []);

  const handleChange = (value, meal) => {
    const indexMealUpdate = resultSearch.findIndex(item => item.Id === meal.Id);
    setResultSearch(
      update(resultSearch, {
        [indexMealUpdate]: {
          quantity: { $set: value },
          consume: { $set: value * meal.Energy }
        }
    }));
  };

  const handleFilterByProdType = async (value) => {
    setProdTypeFilter(parseInt(value, 10));
    const newParams = { ...params };
    newParams.categories = value ? [value] : [];
    await props.getProductsRequest(newParams);
  };

  const handleFilterByAlphabetical = async (value) => {
    setAlphabeticalFilter(value);
    const newParams = { ...params };
    newParams.order = value;
    await props.getProductsRequest(newParams);
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
        <Text style={[styles.itemMealTitle, { width: '25%', textAlign: 'right' }]}>90%</Text>
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
          <Text style={styles.itemMealSubTitle}>1</Text>
        </View>
        <Text style={styles.itemMealSubTitleSize}>=</Text>
        <View style={[styles.flexRowContainer, {width: '40%', alignItems: 'center'}]}>
          <Text style={styles.itemMealSubTitle}>{item.consume} kJ</Text>
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
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.filterContainer}>
        <RNPickerSelect
          value={alphabeticalFilter}
          items={[
            {value: 'asc', label: 'Sort by Product Alphabetical A-Z'},
            {value: 'desc', label: 'Sort by Product Alphabetical Z-A'}
          ]}
          onValueChange={handleFilterByAlphabetical}
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
          onValueChange={handleFilterByProdType}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          Icon={() => <View style={stylesBasicInfo.iconSelect} />}
          disabled={!!params.categories.length}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={resultSearch}
          renderItem={renderItem}
          keyExtractor={item => `${item.Id}`}
          extraData={isDetail}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  listCategory: state.SearchReducer.listCategory,
  listTypeOfFood: state.SearchReducer.listTypeOfFood,
  listProducts: state.SearchReducer.listProducts
});

const mapDispatchToProps = {
  getAllCategoriesRequest,
  getTypeOfFoodAvailableRequest,
  getProductsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
