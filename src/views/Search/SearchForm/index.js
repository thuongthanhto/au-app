import React, {useReducer, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'react-native-check-box';
import {connect, useDispatch} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
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
import ListBrand from './ListBrands';

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

function generateBrands(brands) {
  const finalObject = {};

  brands.forEach(element => {
    finalObject[element.Id] = {
      name: element.Name,
      checked: false,
    };
  });

  return finalObject;
}

const SearchFormScreen = props => {
  const dispatch = useDispatch();
  const initState = {
    searchTerm: '',
    category: '',
    categories: [],
    isChecked: true,
    qsrs: [],
    brands: generateBrands(props.listTypeOfFood),
    loading: false,
  };
  const [state, setState] = useReducer(customReducer, initState);

  useEffect(() => {
    const fetchData = async () => {
      await props.getAllCategoriesRequest('GetCategories');
      await props.getTypeOfFoodAvailableRequest('GetQSRs');
    };
    fetchData();
  }, []);

  useEffect(() => {
    setState({brands: generateBrands(props.listTypeOfFood)});
  }, [props.listTypeOfFood]);

  const handleChangeCategories = value => {
    setState({category: value});
  };

  const handleCheckBrand = key => {
    const temp = state.brands;
    const listQsrs = [];
    let finalQsrs = [];

    temp[key].checked = !state.brands[key].checked;
    Object.keys(temp).forEach(item => {
      if (temp[item].checked) {
        listQsrs.push(item);
      }
    });

    finalQsrs = props.listTypeOfFood.length > listQsrs.length ? listQsrs : [];
    setState({brands: temp, qsrs: finalQsrs});
  };

  const handleSubmit = async () => {
    setState({loading: true});
    const params = {
      categories: state.category ? [state.category] : [],
      ids: [],
      order: 'asc',
      orderBy: 'Name',
      pageIndex: 0,
      pageSize: 10,
      qsrs: state.qsrs,
      searchTerm: state.searchTerm,
      specialTypes: [],
      timeCategories: [],
      serves: [],
    };

    await props.getProductsRequest(params, res => {
      if (res) {
        props.navigation.navigate('Search', {params});
        setState({loading: false});
      }
    });
  };

  const handleAllBrands = () => {
    setState({
      isChecked: !state.isChecked,
      brands: generateBrands(props.listTypeOfFood),
      qsrs: [],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={state.loading} />
      <View style={styles.body}>
        <Text style={styles.title}>Search</Text>

        <View style={{marginTop: 15, marginBottom: 15}}>
          <TextInput
            value={state.searchTerm}
            placeholder="Enter a product name or kJ number"
            style={styles.input}
            onChangeText={text => setState({searchTerm: text})}
          />
        </View>

        <Text style={styles.heading}>Meal options</Text>

        {props.listCategory.length > 0 && (
          <View style={{marginBottom: 15}}>
            <RNPickerSelect
              value={state.category}
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
          </View>
        )}

        <Text style={styles.heading}>Brands</Text>

        {props.listTypeOfFood.length > 0 && (
          <View style={{marginBottom: 15}}>
            <CheckBox
              onClick={handleAllBrands}
              isChecked={state.isChecked}
              rightText="All brands"
            />
          </View>
        )}

        {props.listTypeOfFood.length > 0 && !state.isChecked && (
          <ListBrand
            brandsObject={state.brands}
            handleCheckBrand={handleCheckBrand}
          />
        )}

        <View style={{marginTop: 10}}>
          <Button
            width="100%"
            height={Responsive.h(45)}
            text="Search"
            rightIcon={
              <Image
                source={Images.arrow_right}
                style={styles.largerArrowIcon}
              />
            }
            onPress={() => handleSubmit()}
          />
        </View>
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
