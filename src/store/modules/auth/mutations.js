/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  UPDATE_USER_SESSION(state, user) {
    localStorage.setItem("userInfo", JSON.stringify(user));
    localStorage.setItem("userRole", "admin");
    state.userRole = "admin";
  },
  UPDATE_USER_ROLE(state, val) {
    state.userRole = val;
    localStorage.setItem("userRole", val);
  }
};
