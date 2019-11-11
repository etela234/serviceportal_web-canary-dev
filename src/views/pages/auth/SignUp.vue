<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter">
            <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
              <vs-row>
                <vs-col vs-type="flex" vs-justify="end" vs-align="end">
                  <h1 class="mb-4">User Management</h1>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="end" vs-align="end">
                  <p>With our newly improved integrated system, you can easily navigate, manage and monitor all your users within one domain.</p>
                </vs-col>
              </vs-row>
              <img src="@/assets/images/pages/register.jpg" alt="register" class="mx-auto" />
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
              <div class="p-8">
                <div class="vx-card__title" style="text-align: center">
                  <h4 class="mb-4">Create Account</h4>
                </div>
                <div class="clearfix">
                  <vs-input
                    label-placeholder="FULL NAME"
                    name="username"
                    placeholder="FULL NAME"
                    v-model="username"
                    class="w-full"
                  />

                  <vs-input
                    name="email"
                    type="email"
                    label-placeholder="EMAIL"
                    placeholder="EMAIL"
                    v-model="email"
                    class="w-full mt-6"
                  />

                  <vs-input
                    ref="password"
                    type="password"
                    name="password"
                    label-placeholder="PASSWORD"
                    placeholder="PASSWORD"
                    v-model="password"
                    class="w-full mt-6"
                  />

                  <vs-input
                    type="password"
                    name="confirm_password"
                    label-placeholder="REPEAT PASSWORD"
                    placeholder="REPEAT PASSWORD"
                    v-model="confirm_password"
                    class="w-full mt-6"
                  />

                  <vs-checkbox
                    v-model="isTermsConditionAccepted"
                    class="mt-6"
                  >I agree to all statements in terms of use.</vs-checkbox>
                  <vs-button :color="'#9A7B2D'" to="/pages/login" class="mt-6 w-full">Register</vs-button>
                  <div class="flex flex-wrap justify-center my-5">
                    Already a member? &nbsp;
                    <router-link class="mb-3" to="/" style="color: #9A7B2D">Login</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>

    <vs-col vs-offset="5" vs-type="flex" vs-justify="center" vs-align="center">
      &nbsp;
      <router-link class="foot_link" to>Main home page</router-link>&nbsp;
      <router-link class="foot_link" to>Terms of use</router-link>&nbsp;
      <router-link class="foot_link" to>Privacy Policy</router-link>
    </vs-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      isTermsConditionAccepted: false
    };
  },
  computed: {
    validateForm() {
      return (
        !this.errors.any() &&
        this.username != "" &&
        this.email != "" &&
        this.password != "" &&
        this.confirm_password != "" &&
        this.isTermsConditionAccepted === true
      );
    }
  },
  methods: {
    registerUser() {
      if (!this.validateForm) return false;
      if (this.$store.state.auth.isUserLoggedIn()) {
        this.notifyAlreadyLogedIn();
        return;
      }
      const payload = {
        userDetails: {
          email: this.email,
          password: this.password,
          username: this.username
        },
        notify: this.$vs.notify
      };
      this.$store.dispatch("auth/registerUser", payload);
    },
    notifyAlreadyLogedIn() {
      this.$vs.notify({
        title: "Login Attempt",
        text: "You are already logged in!",
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "warning"
      });
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