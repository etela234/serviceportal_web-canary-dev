<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col h-full w-full bg-white">
      <div class="vx-row no-gutter justify-center items-center h-full">
        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
          <div class style="padding: 120px;">
            <div class="vx-card__title mb-8" style="text-align: center">
              <h4 class="mb-4">Log into NIBSS</h4>
              <p>
                Don't have an account? &nbsp;
                <router-link class="mb-3" to="/signup" style="color: #9A7B2D;">Register</router-link>
              </p>
            </div>
            <vs-input
              icon="icon icon-user"
              icon-pack="feather"
              label-placeholder="Email"
              v-model="email"
              class="w-full no-icon-border"
            />

            <vs-input
              type="password"
              icon="icon icon-lock"
              icon-pack="feather"
              label-placeholder="Password"
              v-model="password"
              class="w-full mt-6 no-icon-border"
            />

            <div class="flex flex-wrap justify-between my-5">
              <router-link to="/reset-password" style="color: #9A7B2D">Forgot Password?</router-link>
            </div>
            <vs-button
              class="w-full"
              style="margin-top: 30px;"
              :color="colorx"
              @click="loginToApp"
            >Login</vs-button>

            <div class="flex flex-wrap justify-center" style="margin-top: 15px;">
              <vs-checkbox v-model="checkbox_remember_me">Keep me signed in</vs-checkbox>
            </div>
          </div>
        </div>

        <div
          class="vx-col flex hidden lg:flex lg:w-1/2 h-full justify-center items-center"
          style="background: #ECFFE5; flex-flow: column;"
        >
          <vs-row class="p-10">
            <vs-col vs-offset="4" vs-type="flex" vs-justify="flex-end" vs-align="center">
              <h1 class="mb-4">Self Service</h1>
            </vs-col>
            <vs-col vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="center">
              <p
                style="text-align: right;"
              >Now you can easily track, measure and access all your products, documents and reports in one domain.</p>
            </vs-col>
          </vs-row>
          <vs-row>
            <img
              src="@/assets/images/pages/reset-password.png"
              alt="login"
              style="height: 400px;"
              class="mx-auto"
            />
          </vs-row>
        </div>
      </div>
    </div>
    <div class="w-full justify-end">
      &nbsp;
      <router-link class="foot_link" to="#" style="margin-left: 50px;">Main home page</router-link>&nbsp;
      <router-link class="foot_link" to="#">Terms of use</router-link>&nbsp;
      <router-link class="foot_link" to="#">Privacy Policy</router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false,
      colorx: "#9A7B2D"
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    ...mapActions("dummy", ["toast"]),
    loginToApp() {
      // const payload = {
      //   userDetails: {
      //     email: this.email,
      //     password: this.password
      //   },
      //   notify: this.$vs.notify,
      //   acl: this.$acl
      // };
      // this.login(payload);
      this.$router.push({ path: "/app" });
    }
  }
};
</script>

<style scoped>
.foot_link {
  color: #9a7b2d;
  font-size: 12px;
}
</style>
