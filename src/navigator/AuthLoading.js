import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {colors} from '../modules/colors';
import {NavigationRoutes} from './Routes';
import Responsive from '../modules/utils/responsive';
import homeActions from '../actions/homeActions';
import {
  getAppOpensSelector,
  getTouchAgreedSelector,
  getProfileSelector,
} from '../selectors/homeSelector';
import {isEmpty} from '../modules/utils/helpers';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.SCHEDULE_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    width: Responsive.h(70),
    height: Responsive.v(70),
    borderRadius: Responsive.v(5),
    backgroundColor: colors.BLUE,
  },
});

class AuthLoading extends React.PureComponent {
  constructor(props) {
    super(props);
    this.checkAuthencation();
    this.handleAppOpens();
  }

  checkAuthencation = async () => {
    const {navigation, touchAgreed, profile} = this.props;

    if (isEmpty(profile)) {
      if (!touchAgreed) {
        navigation.navigate(NavigationRoutes.LegalStuff);
      } else {
        navigation.navigate(NavigationRoutes.Welcome);
      }
    } else {
      navigation.navigate(NavigationRoutes.Home);
    }
  };

  handleAppOpens = () => {
    const {appOpens, saveAppOpens} = this.props;

    if (appOpens === null) {
      saveAppOpens(1);
    } else {
      saveAppOpens(appOpens + 1);
    }
  };

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

const mapStateToProps = state => {
  return {
    appOpens: getAppOpensSelector(state),
    touchAgreed: getTouchAgreedSelector(state),
    profile: getProfileSelector(state),
  };
};

const mapDispatchToProps = {
  saveAppOpens: params => homeActions.saveAppOpens(params),
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
