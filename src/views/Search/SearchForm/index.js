import React, {useReducer, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity as Touch,
  Image,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'react-native-check-box';
import {useDispatch, connect} from 'react-redux';
import styles from './styles';
import {customReducer} from '../../../modules/utils/helpers';
import {
  getTypeOfFoodAvailableRequest,
  getAllCategoriesRequest,
} from '../../../actions/Search';
import pickerSelectStyles from '../../BasicInfo/pickerSelectStyles';
import stylesBasicInfo from '../../BasicInfo/styles';

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
    isChecked: false,
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text>Find a fast or snack food product</Text>
        <TextInput
          value={state.searchTerm}
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
            style={{flex: 1, padding: 10}}
            onClick={() => {
              setState({
                isChecked: !state.isChecked,
              });
            }}
            isChecked={state.isChecked}
            leftText="CheckBox"
          />
        )}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormScreen);
