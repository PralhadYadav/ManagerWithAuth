import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.createEmployee()}
            key="employee"
            component={EmployeeList}
            title="Employee"
          />
          <Scene
            key="createEmployee"
            title="Create Employee"
            component={EmployeeCreate}
          ></Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
