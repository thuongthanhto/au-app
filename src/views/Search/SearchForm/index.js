import React, {useReducer, useEffect} from 'react';
import {View, SafeAreaView, Text, Image, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'react-native-check-box';
import {connect} from 'react-redux';
import styles from './styles';
import {customReducer} from '../../../modules/utils/helpers';
import {
  getTypeOfFoodAvailableRequest,
  getAllCategoriesRequest,
  getProductsRequest,
} from '../../../actions/Search';
import pickerSelectStyles from '../../BasicInfo/pickerSelectStyles';
import stylesBasicInfo from '../../BasicInfo/styles';
import Responsive from '../../../modules/utils/responsive';
import {Images} from '../../../assets/images';
import Button from '../../../components/Button';

function generateCategories(categories) {
  const list = [];
  categories.forEach(element => {
    const temp = {
      value: element.Id,
      label: element.Name,
    };
    list.push(temp);
  });

  return list;
}

const SearchFormScreen = props => {
  const initState = {
    searchTerm: '',
    categories: '',
    isChecked: true,
  };
  const [state, setState] = useReducer(customReducer, initState);

  useEffect(() => {
    const fetchData = async () => {
      await props.getAllCategoriesRequest('GetCategories');
      await props.getTypeOfFoodAvailableRequest('GetQSRs');
    };
    fetchData();
  }, []);

  console.log(props);

  const handleChangeCategories = value => {
    setState({categories: value});
  };

  const handleSubmit = async () => {
    const params = {
      categories: [],
      ids: [],
      order: 'asc',
      orderBy: 'Name',
      pageIndex: 0,
      pageSize: 10,
      qsrs: [],
      searchTerm: 'tea',
      specialTypes: [],
      timeCategories: [],
      serves: [],
    };

    const result = await props.getProductsRequest(params);
    console.log(result);
  };

  console.log(state);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text>Find a fast or snack food product</Text>
        <TextInput
          value={state.searchTerm}
          placeholder="Enter a product name or Kj number"
          style={styles.input}
          onChangeText={text => setState({searchTerm: text})}
        />

        {props.listCategory.length > 0 && (
          <RNPickerSelect
            value={state.categories}
            items={generateCategories(props.listCategory)}
            placeholder={{
              label: 'Food types',
              value: '',
            }}
            onValueChange={text => handleChangeCategories(text)}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            Icon={() => {
              return <View style={stylesBasicInfo.iconSelect} />;
            }}
          />
        )}
        {props.listTypeOfFood.length > 0 && (
          <CheckBox
            onClick={() => {
              setState({
                isChecked: !state.isChecked,
              });
            }}
            isChecked={state.isChecked}
            rightText="All brands"
          />
        )}
        <Button
          width="100%"
          height={Responsive.h(45)}
          text="Search"
          rightIcon={
            <Image source={Images.arrow_right} style={styles.largerArrowIcon} />
          }
          onPress={() => handleSubmit()}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  listCategory: state.SearchReducer.listCategory,
  listTypeOfFood: state.SearchReducer.listTypeOfFood,
});

const mapDispatchToProps = {
  getAllCategoriesRequest,
  getTypeOfFoodAvailableRequest,
  getProductsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormScreen);
