import {connect, useSelector} from 'react-redux';
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
import {
  getActivityDuration,
  getRMR,
  toClosest,
} from '../../modules/utils/helpers';
import {getProfileSelector} from '../../selectors/homeSelector';

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
  const profile = useSelector(state => getProfileSelector(state));
  let weight;
  let rmr = getRMR(profile.sex, profile.height, profile.weight, profile.age);
  if (profile.weight) {
    weight = profile.weight;
  } else {
    weight = profile.weight || 55;
    rmr = 1319.6;
  }
  const totalEnery = props.listMealAdded.reduce(function(sum, item) {
    return sum + item.consume;
  }, 0);
  const firgual = toClosest(profile.BMR.goal.value, 100);
  const totalPercent = ((totalEnery / firgual) * 100).toFixed(1);
  const light = Math.round(
    getActivityDuration('Light', rmr, weight, totalEnery) * 60,
  );
  const medium = Math.round(
    getActivityDuration('Medium', rmr, weight, totalEnery) * 60,
  );

  const vigorous = Math.round(
    getActivityDuration('Vigorous', rmr, weight, totalEnery) * 60,
  );

  console.log(firgual);
  console.log(totalPercent);

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

  const renderSummary = () => {
    return (
      <View style={[styles.flexRowContainer, {paddingTop: Responsive.h(5)}]}>
        <View style={[{width: '50%'}]}>
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
        </View>
        <View style={[styles.chartContainer, {width: '50%'}]}>
          <Text style={styles.itemMealTitle}>{totalEnery || 0} kJ</Text>
          <Text style={styles.itemMealTitle}>{totalPercent}%</Text>
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
