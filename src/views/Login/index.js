import React from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../../modules/colors';
import styles from './styles';
import { loginRequest } from '../../actions/User';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
    };
  }

  handleLogin = () => {
    const { emailAddress, password } = this.state;
    const params = {
      emailAddress,
      password
    };
    this.props.loginRequest(params);
  }

  render() {
    const { navigation } = this.props;
    const { emailAddress, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoScope}>
            <View style={styles.logoContainer}>
              <Text>LOGO</Text>
            </View>
          </View>
          <Text style={styles.heading}>Login To Your Account</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            placeholderTextColor={colors.WHITE}
            style={styles.input}
            placeholder="Email Address"
            onChangeText={(e) => this.setState({ emailAddress: e })}
          />
          <TextInput
            returnKeyType="go"
            placeholderTextColor={colors.WHITE}
            style={styles.input}
            onChangeText={(e) => this.setState({ password: e })}
            placeholder="Password"
            secureTextEntry={true}
            onSubmitEditing={this.handleLogin}
          />

          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.actionSignIn}
          >
            <Text style={styles.actionSignInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  loginRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);