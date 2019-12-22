import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Modal,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

export const Tooltip = ({isVisible, onCloseModal, title, content}) => (
  <Modal
    visible={isVisible}
    animationType="fade"
    transparent
    onRequestClose={onCloseModal}>
    <SafeAreaView style={styles.modalContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={onCloseModal}>
        <Icon
          name="closecircle"
          size={Responsive.h(20)}
          color={colors.SKIP_BUTTON}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.body}>
          {title}
          {content}
        </View>
      </ScrollView>
    </SafeAreaView>
  </Modal>
);
