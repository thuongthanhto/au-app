import React, {useState, memo} from 'react';
import {View, Image, Text, TouchableOpacity as Touch} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {styles, pickerSelectStyles} from './styles';
import {checkActivityVisibility} from '../../modules/utils/helpers';
import {
  generateSexConfigs,
  generateAges,
  generateHeights,
  generateWeights,
  generateEalLevels,
  generateOalLevels,
} from './configs';
import {Images} from '../../assets/images';
import {Tooltip} from '../Tooltip';

const renderTooltipNonOccupationalContent = () => (
  <View>
    <Text style={styles.tooltipPragraph}>
      How physically active are you outside of work or the rest of the waking
      day:
    </Text>
    <Text style={styles.h3}>Light</Text>
    <Text style={styles.tooltipPragraph}>
      eg light home duties, light gardening, walking for pleasure, small screen
      activities, homework.
    </Text>
    <Text style={styles.h3}>Moderate</Text>
    <Text style={styles.tooltipPragraph}>
      eg strenuous gardening several days per week, or moderate activity such as
      brisk walking on most days.
    </Text>
    <Text style={styles.h3}>Very active</Text>
    <Text style={styles.tooltipPragraph}>
      eg jogging, strenuous cycling or gym classes on most days.
    </Text>
  </View>
);

const renderTooltipOccupationalContent = () => (
  <View>
    <Text style={styles.tooltipPragraph}>
      How physically active is your occupation or main part of the waking day:
    </Text>
    <Text style={styles.h3}>Light work</Text>
    <Text style={styles.tooltipPragraph}>
      eg. office worker, precision mechanic, mostly seated, retired
    </Text>
    <Text style={styles.h3}>Moderate work</Text>
    <Text style={styles.tooltipPragraph}>
      eg assembly line, housework, sales visits, student, regular walking
    </Text>
    <Text style={styles.h3}>Heavy work</Text>
    <Text style={styles.tooltipPragraph}>
      eg mechanic, construction, farming, frequent lifting
    </Text>
  </View>
);

const UserInfoForm = ({state, handleChange, dirty}) => {
  const [tooltipVisible, setTooltipVisible] = useState('');

  return (
    <View style={styles.form}>
      <View style={styles.formItem}>
        <RNPickerSelect
          value={state.sex}
          items={generateSexConfigs()}
          placeholder={{
            label: 'Sex',
            value: null,
          }}
          onValueChange={text => handleChange('sex', text)}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          Icon={() => {
            return <View style={styles.iconSelect} />;
          }}
        />
        {dirty && !state.sex && (
          <Text style={styles.errorText}>Select your sex</Text>
        )}
      </View>
      <View style={styles.formItem}>
        <RNPickerSelect
          value={state.age}
          items={generateAges()}
          placeholder={{
            label: 'Age',
            value: null,
          }}
          onValueChange={text => handleChange('age', text)}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          Icon={() => {
            return <View style={styles.iconSelect} />;
          }}
        />
        {dirty && !state.age && (
          <Text style={styles.errorText}>Select your age</Text>
        )}
      </View>
      <View style={styles.formItem}>
        <RNPickerSelect
          value={state.height}
          items={generateHeights()}
          placeholder={{
            label: 'Height',
            value: null,
          }}
          onValueChange={text => handleChange('height', text)}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          Icon={() => {
            return <View style={styles.iconSelect} />;
          }}
        />
        {dirty && !state.height && (
          <Text style={styles.errorText}>Select your height</Text>
        )}
      </View>
      <View style={styles.formItem}>
        <RNPickerSelect
          value={state.weight}
          items={generateWeights()}
          placeholder={{
            label: 'Weight',
            value: null,
          }}
          onValueChange={text => handleChange('weight', text)}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          Icon={() => {
            return <View style={styles.iconSelect} />;
          }}
        />
        {dirty && !state.weight && (
          <Text style={styles.errorText}>Select your weight</Text>
        )}
      </View>
      {checkActivityVisibility(state.age) && (
        <>
          <View style={styles.formItem}>
            <View style={styles.inputInfo}>
              <RNPickerSelect
                value={state.oal_level}
                items={generateOalLevels()}
                placeholder={{
                  label: 'Occupational activity',
                  value: null,
                }}
                onValueChange={text => handleChange('oal_level', text)}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                Icon={() => {
                  return <View style={styles.iconSelect} />;
                }}
              />
              <Touch
                style={{position: 'absolute', left: '102%'}}
                onPress={() => setTooltipVisible('occupational')}>
                <Image source={Images.info} />
              </Touch>
            </View>

            {dirty && !state.oal_level && (
              <Text style={styles.errorText}>Please choose one</Text>
            )}
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputInfo}>
              <RNPickerSelect
                value={state.eal_level}
                items={generateEalLevels()}
                placeholder={{
                  label: 'Non-occupational activity level',
                  value: null,
                }}
                onValueChange={text => handleChange('eal_level', text)}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                Icon={() => {
                  return <View style={styles.iconSelect} />;
                }}
              />

              <Touch
                style={{position: 'absolute', left: '102%'}}
                onPress={() => setTooltipVisible('non-occupational')}>
                <Image source={Images.info} />
              </Touch>
            </View>

            {dirty && !state.eal_level && (
              <Text style={styles.errorText}>Please choose one</Text>
            )}
          </View>
        </>
      )}
      <Tooltip
        isVisible={tooltipVisible === 'occupational'}
        title="Occupational physical activity"
        content={renderTooltipOccupationalContent()}
        onCloseModal={() => setTooltipVisible('')}
      />
      <Tooltip
        isVisible={tooltipVisible === 'non-occupational'}
        content={renderTooltipNonOccupationalContent()}
        title="Non-occupational physical activity"
        onCloseModal={() => setTooltipVisible('')}
      />
    </View>
  );
};

export default memo(UserInfoForm);
