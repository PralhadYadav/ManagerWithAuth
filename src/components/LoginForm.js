/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { CardSection, Input, Button, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { connect } from "react-redux";
import { View, Text } from "react-native";

class LoginForm extends Component {
  state = { email: "", password: "", loading: false };

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.login.bind(this)}>Login</Button>;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={{ color: "red", alignSelf: "center" }}>
            {this.props.error.toString()}
          </Text>
        </View>
      );
    }
  }

  emailChange(text) {
    this.props.emailChanged(text);
  }

  passwordChange(text) {
    this.props.passwordChanged(text);
  }

  login() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Email"
            placeholder={this.props.email}
            value={this.props.email}
            onChangeText={this.emailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder={this.props.password}
            value={this.props.password}
            onChangeText={this.passwordChange.bind(this)}
          />
        </CardSection>
        <CardSection>{this.renderError()}</CardSection>
        <CardSection>{this.renderButton()}</CardSection>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  console.log(email, password);
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
