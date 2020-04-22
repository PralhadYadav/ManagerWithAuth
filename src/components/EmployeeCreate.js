import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Picker, Text } from "react-native";
import { employeeUpdate, employeeCreate } from "../actions";
import { CardSection, Input, Button } from "./common";

class EmployeeCreate extends Component {
  onSubmit() {
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="name"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "name", value: text })
            }
          />
        </CardSection>
        <CardSection style={{ flexDirection: "column" }}>
          <Input
            label="Phone"
            placeholder="0000000000"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "phone", value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Text style={{ fontSize: 18, paddingLeft: 20 }}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdate({ prop: "shift", value: day })
            }
          >
            <Picker.Item value="Monday" label="Monday" />
            <Picker.Item value="Tuesday" label="Tuesday" />
            <Picker.Item value="Wednesday" label="Wednesday" />
            <Picker.Item value="Thursday" label="Thursday" />
            <Picker.Item value="Friday" label="Firday" />
            <Picker.Item value="Saturday" label="Saturday" />
            <Picker.Item value="Sunday" label="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onSubmit.bind(this)}>Create</Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeCreate
);
