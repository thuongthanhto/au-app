import React from 'react';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RootContainer from './Root';
import { store } from './src/store/dev';

Icon.loadFont();

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
