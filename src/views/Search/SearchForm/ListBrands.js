import React from 'react';
import {View, ScrollView} from 'react-native';
import CheckBox from 'react-native-check-box';

const ListBrand = ({brandsObject, handleCheckBrand}) => {
  const brands = Object.keys(brandsObject).map(key => ({
    id: key,
    ...brandsObject[key],
  }));

  brands.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        {brands.map(item => (
          <View style={{marginBottom: 15}} key={item.id}>
            <CheckBox
              onClick={() => handleCheckBrand(item.id)}
              isChecked={item.checked}
              rightText={item.name}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListBrand;
