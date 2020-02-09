import {connect} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity as Touch,
  Image,
} from 'react-native';

import Pie from './Pie';
import styles from './styles';
import {colors} from '../../modules/colors';
import {Images} from '../../assets/images';
import Responsive from '../../modules/utils/responsive';
import {
  getAllCategoriesRequest,
  getTypeOfFoodAvailableRequest,
} from '../../actions/Search';

const dataChart = [
  {
    percentage: 10,
    color: '#00AAEA',
  },
  {
    percentage: 90,
    color: colors.GRAY,
  },
];

const SearchScreen = props => {
  const ItemMeal = ({item}) => (
    <View style={styles.itemMealContainer}>
      <View style={styles.flexRowContainer}>
        <Text style={[styles.itemMealTitle, {width: '75%'}]} numberOfLines={1}>
          {item.Name}
        </Text>
        <Text
          style={[styles.itemMealTitle, {width: '25%', textAlign: 'right'}]}>
          {item.consume} kJ
        </Text>
      </View>
      <Text style={styles.itemMealSubTitle}>{item.QSR_name}</Text>
    </View>
  );
  const totalEnery = props.listMealAdded.reduce(function(sum, item) {
    return sum + item.consume;
  }, 0);

  const renderSummary = () => {
    return (
      <View style={[styles.flexRowContainer, {paddingTop: Responsive.h(5)}]}>
        <View style={[{width: '50%'}]}>
          <Text style={styles.itemMealTitle}>Meal Summary:</Text>
          <Text style={styles.activityText}>Excercise equivalents:</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.light} style={styles.imagesContent} />
            <Text style={styles.valueContent}>10 min</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.medium} style={styles.imagesContent} />
            <Text style={styles.valueContent}>10 min</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.vigorous} style={styles.imagesContent} />
            <Text style={styles.valueContent}>10 min</Text>
          </View>
        </View>
        <View style={[styles.chartContainer, {width: '50%'}]}>
          <Text style={styles.itemMealTitle}>{totalEnery || 0} kJ</Text>
          <Text style={styles.itemMealTitle}>6.3%</Text>
          <Pie radius={60} sections={dataChart} />
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => <ItemMeal item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.body}>
        <Text style={styles.title}>Total kJs in your meal</Text>
        <FlatList
          data={props.listMealAdded}
          renderItem={renderItem}
          keyExtractor={item => item.Id}
          extraData=""
        />
        <View style={styles.summaryWrap}>{renderSummary()}</View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  listCategory: state.SearchReducer.listCategory,
  listTypeOfFood: state.SearchReducer.listTypeOfFood,
  listMealAdded: state.SearchReducer.listMealAdded,
});

const mapDispatchToProps = {
  getAllCategoriesRequest,
  getTypeOfFoodAvailableRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
