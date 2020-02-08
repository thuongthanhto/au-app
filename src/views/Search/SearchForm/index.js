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

    await props.getProductsRequest(params, res => {
      if (res) {
        props.navigation.navigate('Search', {params});
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Search</Text>

        <View style={{marginTop: 15, marginBottom: 15}}>
          <TextInput
            value={state.searchTerm}
            placeholder="Enter a product name or Kj number"
            style={styles.input}
            onChangeText={text => setState({searchTerm: text})}
          />
        </View>

        <Text style={styles.heading}>Meal options</Text>

        {props.listCategory.length > 0 && (
          <View style={{marginBottom: 15}}>
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
          </View>
        )}

        <Text style={styles.heading}>Brands</Text>

        {props.listTypeOfFood.length > 0 && (
          <View style={{marginBottom: 15}}>
            <CheckBox
              onClick={() => {
                setState({
                  isChecked: !state.isChecked,
                });
              }}
              isChecked={state.isChecked}
              rightText="All brands"
            />
          </View>
        )}

        <View style={{flex: 2}}>
          <ScrollView>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
            <View style={{marginBottom: 15}}>
              <CheckBox
                onClick={() => {
                  setState({
                    isChecked: !state.isChecked,
                  });
                }}
                isChecked={state.isChecked}
                rightText="All brands"
              />
            </View>
          </ScrollView>
        </View>
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
