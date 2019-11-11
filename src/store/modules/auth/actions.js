/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import firebase from "firebase/app";
import "firebase/auth";
import router from "@/router";
import acl from "@/acl/acl";

export default {
  login({ commit, state, dispatch }, payload) {
    // let router = payload.router;
    let acl = payload.acl;
    // If user is already logged in notify and exit
    // if (state.isUserLoggedIn()) {
    //     // Close animation if passed as payload
    //     if(payload.closeAnimation) payload.closeAnimation()

    //     return false
    // }

    // console.log({payload})
    let userSession = {
      name: "grEy jAy",
      email: "jay@grey.sh",
      roles: "admin"
    };
    commit("UPDATE_USER_SESSION", userSession);
    payload.notify({
      title: "Login Successful",
      text: "You are now logged in!",
      iconPack: "feather",
      icon: "icon-check-circle",
      color: "successs"
    });
    acl.change(userSession.roles);
    // console.log(acl)
    commit("UPDATE_USER_ROLE", userSession.roles);
    router.replace("app");
  },
  logout({ commit }, acl) {
    console.log("Loging out");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userInfo");
    acl.change("guest");
    commit("UPDATE_USER_ROLE", "guest");
    router.replace("/");
  },
  updateAuthenticatedUser({ commit }, payload) {
    commit("UPDATE_USER_SESSION", payload);
  }
};
