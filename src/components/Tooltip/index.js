import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

export const Tooltip = ({
  isVisible,
  onCloseModal,
  title,
  content,
  isBoldTitle,
}) => (
  <Modal isVisible={isVisible}>
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
          {!isBoldTitle && (
            <Text style={styles.titleTooltipUserinfo}>{title}</Text>
          )}
          {isBoldTitle && <Text style={styles.titleTooltipBold}>{title}</Text>}

          {content}
        </View>
      </ScrollView>
    </SafeAreaView>
  </Modal>
);
