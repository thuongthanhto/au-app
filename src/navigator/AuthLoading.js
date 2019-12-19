import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {colors} from '../modules/colors';
import {NavigationRoutes} from './Routes';
import Responsive from '../modules/utils/responsive';
import {StorageKey, Storage} from '../modules/utils/storage';
import CircleLoading from '../components/Presentations/CircleLoading';
import homeActions from '../actions/homeActions';
import {
  getAppOpensSelector,
  getTouchAgreedSelector,
} from '../selectors/homeSelector';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.SCHEDULE_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    width: Responsive.h(70),
    height: Responsive.h(70),
    borderRadius: Responsive.h(5),
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
    const {navigation, touchAgreed} = this.props;

    if (!touchAgreed) {
      navigation.navigate(NavigationRoutes.LegalStuff);
    } else {
      navigation.navigate(NavigationRoutes.Welcome);
    }

    // const authToken = await Storage.get(StorageKey.AuthToken);
    // if (authToken !== null) {
    //   navigation.navigate(NavigationRoutes.Home);
    // }
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
      <View style={styles.container}>
        <CircleLoading isVisible />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    appOpens: getAppOpensSelector(state),
    touchAgreed: getTouchAgreedSelector(state),
  };
};

const mapDispatchToProps = {
  saveAppOpens: params => homeActions.saveAppOpens(params),
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
