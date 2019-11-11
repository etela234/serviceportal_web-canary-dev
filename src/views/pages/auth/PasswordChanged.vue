<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex bg-img items-center" id="page-login">
    <vs-col vs-offset="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start">
      <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-2/5 m-4">
        <vx-card>
          <div class="p-8">
            <div class="vx-card__title mb-8" style="text-align: center">
              <vs-icon icon="thumb_up_alt" color="#9A7B2D" size="120px"></vs-icon>
              <h4 class="mb-4">Congratulations</h4>
              <p>Your password has been changed.</p>
            </div>

            <vs-button class="w-full" style="margin-top: 10px;" :color="colorx">Back to Log in</vs-button>
          </div>
        </vx-card>
      </div>
    </vs-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false,
      colorx: "#9A7B2D"
    };
  }
};
</script>
