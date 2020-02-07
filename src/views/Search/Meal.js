import {connect} from 'react-redux';
import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity as Touch, Image } from 'react-native';

import Pie from './Pie';
import styles from './styles';
import {colors} from '../../modules/colors';
import { Images } from '../../assets/images';
import Responsive from '../../modules/utils/responsive';
import { getAllCategoriesRequest, getTypeOfFoodAvailableRequest } from '../../actions/Search';

const dataDummy = [
  {
    "Id": 20705,
    "Published": true,
    "QSR_id": 165,
    "QSR_name": "Coffee Club",
    "Name": "Add Cold Milk to Tea (20ml)",
    "Serves": 1,
    "Unit": " ml",
    "Size": 20,
    "Energy": 56,
    "Includes": " NULL",
    "Categories": [
        {
            "Id": 108,
            "Name": "Beverages",
            "Description": null,
            "Includes": "",
            "Excludes": ""
        }
    ],
    "SpecialTypes": [],
    "TimeCategories": [],
    "ChildProducts": null,
    "ChildIds": []
  },
  {
      "Id": 31890,
      "Published": true,
      "QSR_id": 215,
      "QSR_name": "The Coffee Club",
      "Name": "Add Cold Milk to Tea (20ml)",
      "Serves": 1,
      "Unit": " ml",
      "Size": 20,
      "Energy": 56,
      "Includes": " NULL",
      "Categories": [
          {
              "Id": 108,
              "Name": "Beverages",
              "Description": null,
              "Includes": "",
              "Excludes": ""
          }
      ],
      "SpecialTypes": [],
      "TimeCategories": [],
      "ChildProducts": null,
      "ChildIds": []
  },
  {
      "Id": 27990,
      "Published": true,
      "QSR_id": 204,
      "QSR_name": "Gong Cha Tea",
      "Name": "Alisan Tea",
      "Serves": 1,
      "Unit": " ml",
      "Size": 0,
      "Energy": 256,
      "Includes": " NULL",
      "Categories": [
          {
              "Id": 108,
              "Name": "Beverages",
              "Description": null,
              "Includes": "",
              "Excludes": ""
          }
      ],
      "SpecialTypes": [],
      "TimeCategories": [],
      "ChildProducts": null,
      "ChildIds": []
  }
];

const dataChart = [
  {
    percentage: 10,
    color: '#00AAEA',
  },
  {
    percentage: 90,
    color: colors.GRAY,
  }
];

const SearchScreen = (props) => {
  console.log('props: ', props);
  const [isDetail, setIsDetail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await props.getAllCategoriesRequest('GetCategories');
      await props.getTypeOfFoodAvailableRequest('GetQSRs');
    };
    fetchData();
  }, []);

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
    <Touch style={styles.itemMealContainer} onPress={() => setIsDetail('')}>
      <View style={styles.flexRowContainer}>
        <Text style={styles.itemMealTitle}>{item.Name}</Text>
      </View>
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
        <View style={[{ width: '25%' }]}>
          <Text style={styles.itemMealTitle}>{item.Energy} kJ</Text>
          <Text style={styles.activityText}>Activity equivalents:</Text>
          {/* <View style={{ flexDirection: 'row' }}>
            <Image source={Images.light} style={styles.imagesContent} />
            <Text style={styles.valueContent}>{item.light} min</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={Images.medium} style={styles.imagesContent} />
            <Text style={styles.valueContent}>{item.medium} min</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={Images.vigorous} style={styles.imagesContent} />
            <Text style={styles.valueContent}>{item.vigorous} min</Text>
          </View> */}
        </View>
        {/* <View style={[styles.chartContainer, { width: '50%' }]}>
          <Pie
            radius={60}
            sections={dataChart}
          />
          <Text style={styles.valueContent}>% of my daily 8700 kj</Text>
        </View>
        <View style={[{ width: '25%' }]}>
          <Text style={[styles.itemMealTitle, { textAlign: 'right' }]}>{item.percen}</Text>
        </View> */}
      </View>
    </Touch>
  );

  const renderItem = ({ item }) => isDetail !== item.Id ? <ItemMeal item={item} /> : <ItemMealDetail item={item} />;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.body}>
        <Text style={styles.title}>Total kJs in your meal</Text>
        <FlatList
          data={dataDummy}
          renderItem={renderItem}
          keyExtractor={item => item.Id}
          extraData={isDetail}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  listCategory: state.SearchReducer.listCategory,
  listTypeOfFood: state.SearchReducer.listTypeOfFood
});

const mapDispatchToProps = {
  getAllCategoriesRequest,
  getTypeOfFoodAvailableRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
