<!-- =========================================================================================
    File Name: ResetPassword.vue
    Description: Reset Password Page
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
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8">
                <div class="vx-card__title mb-8" style="text-align: center">
                  <vs-icon icon="lock" color="#9A7B2D" size="120px"></vs-icon>
                  <h4 class="mb-4" style="margin-top: 10px">Reset Your Password</h4>
                  <p>Type in a new password to access your account</p>
                </div>
                <vs-input
                  type="password"
                  label-placeholder="PASSWORD"
                  v-model="value1"
                  class="w-full mb-6"
                />
                <vs-input
                  type="password"
                  label-placeholder="REPEAT PASSWORD"
                  v-model="value2"
                  class="w-full mb-6"
                />

                <div class="flex flex-wrap justify-between flex-col-reverse sm:flex-row">
                  <vs-button class="w-full" :color="'#9A7B2D'">Reset</vs-button>
                </div>
              </div>
            </div>
            <div class="vx-col hidden lg:block lg:w-1/2">
              <vs-row>
                <vs-col vs-offset="5" vs-type="flex" vs-justify="center" vs-align="center">
                  <h1 class="mb-4">Self Service</h1>
                </vs-col>
                <vs-col vs-offset="2" vs-type="flex" vs-justify="center" vs-align="center">
                  <p>Now you can easily reset your password and gain access into your account, chat with our online assistant and solve simple issues with our integrated self service system</p>
                </vs-col>
              </vs-row>
              <img src="@/assets/images/pages/reset-password.png" alt="login" class="mx-auto" />
            </div>
          </div>
        </div>
      </vx-card>
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
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: ""
    };
  }
};
</script>

<style scoped>
.foot_link {
  color: #9a7b2d;
  font-size: 12px;
}
</style>