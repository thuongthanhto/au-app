import React, {useState} from 'react';
// import Pie from 'react-native-pie';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity as Touch, Image } from 'react-native';

import Pie from './Pie';
import styles from './styles';
import {colors} from '../../modules/colors';
import { Images } from '../../assets/images';
import Responsive from '../../modules/utils/responsive';

const dataDummy = [
  {
    id: 'meal1',
    title: '1 Chicken ( Flame, grilled, boil )',
    subTitle: 'Red Rooster',
    kj: 2000,
    percen: '3%',
    light: 9,
    medium: 15,
    vigorous: 25
  },
  {
    id: 'meal2',
    title: '1 Chicken',
    subTitle: 'Red Rooster',
    kj: 2000,
    percen: '3%',
    light: 9,
    medium: 15,
    vigorous: 25
  },
  {
    id: 'meal3',
    title: '1 Chicken',
    subTitle: 'Red Rooster',
    kj: 2000,
    percen: '3%',
    light: 9,
    medium: 15,
    vigorous: 25
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

const SearchScreen = () => {
  const [isDetail, setIsDetail] = useState('');

  const ItemMeal = ({ item }) => (
    <Touch style={styles.itemMealContainer} onPress={() => setIsDetail(item.id)}>
      <View style={styles.flexRowContainer}>
        <Text style={[styles.itemMealTitle, { width: '75%'}]} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.itemMealTitle, { width: '25%', textAlign: 'right' }]}>{item.kj} kJ</Text>
      </View>
      <Text style={styles.itemMealSubTitle}>{item.subTitle}</Text>
    </Touch>
  );

  const ItemMealDetail = ({ item }) => (
    <Touch style={styles.itemMealContainer} onPress={() => setIsDetail('')}>
      <Text style={styles.itemMealTitle}>{item.title}</Text>
      <Text style={styles.itemMealSubTitle}>{item.subTitle}</Text>
      <View style={[styles.flexRowContainer, {paddingTop: Responsive.h(5)}]}>
        <View style={[{ width: '25%' }]}>
          <Text style={styles.itemMealTitle}>{item.kj} kJ</Text>
          <Text style={styles.activityText}>Activity equivalents:</Text>
          <View style={{ flexDirection: 'row' }}>
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
          </View>
        </View>
        <View style={[styles.chartContainer, { width: '50%' }]}>
          <Pie
            radius={60}
            sections={dataChart}
          />
          <Text style={styles.valueContent}>% of my daily 8700 kj</Text>
        </View>
        <View style={[{ width: '25%' }]}>
          <Text style={[styles.itemMealTitle, { textAlign: 'right' }]}>{item.percen}</Text>
        </View>
      </View>
    </Touch>
  );

  const renderItem = ({ item }) => isDetail !== item.id ? <ItemMeal item={item} /> : <ItemMealDetail item={item} />;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.body}>
        <Text style={styles.title}>Total kJs in your meal</Text>
        <FlatList
          data={dataDummy}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={isDetail}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

