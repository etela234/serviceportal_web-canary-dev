<template>
  <div>
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container box_1620">
            <a class="navbar-brand logo_h" href>
              <img src="@/assets/images/logo/logo.png" alt style="width: 112px; height: 68px;" />
            </a>

            <!-- <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>-->

            <!-- class="collapse navbar-collapse offset" -->
            <div id="navbarSupportedContent" style="margin-left: 100px; justify-content: flex-end;">
              <!-- <ul class="nav navbar-nav menu_nav justify-content-start">
              </ul>-->
              <!-- <div> -->
              <!-- <span>
                  <span class="fa fa-envelope-o"></span> &nbsp; contactcentre@nibss-plc.com.ng
              </span>-->
              <div style="font-weight: bold;">v.1</div>
              <!-- </div> -->
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main class="side-main">
      <section class="hero-banner mb-30px" style="padding: 150px 0 80px 0;">
        <div class="container">
          <div
            class="hero_bg_section"
            style="position: absolute; bottom: 25%; height: 40%; width: 50%; left: 0;"
          ></div>
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-banner__content">
                <h2
                  style="color: #9A7B2D; font-weight: 100; margin-bottom: 50px;"
                >User Friendly, Reliable and Flexible Solutions</h2>
                <!-- <div style="border: 2px solid #6f9e5e; width: 200px; margin: 20px 0px;"></div>
                <p style="color: #134C2F; max-width: 300px;">
                  Discover our newly improved self service integrated portal
                  system, with detailed data in one friendly dashboard.
                </p>-->
              </div>
              <div class="vx-row service-slides">
                <div
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  style="pointer: cursor;"
                  v-for="(service_item,index) in filteredServices"
                  :key="`filtered_${index}`"
                >
                  <!-- {{single_item}} -->
                  <a
                    v-if="service_item.injected"
                    class="card offer-single__content service-item justify-center text-center"
                    style="border-radius: 5px;"
                    @click="popupActive = true;content='selfservice'"
                  >
                    <p style="font-size: 12px; color: #fff;">Self Service</p>
                    <span></span>
                  </a>
                  <!-- <vx-col vs-type="flex" vs-justify="center" vs-align="center" > -->
                  <a
                    v-else
                    class="card offer-single__content service-item justify-center text-center"
                    style="border-radius: 5px;"
                    :href="service_item.url"
                    target="_blank"
                  >
                    <p style="font-size: 12px; color: #fff;">{{service_item.name}}</p>
                    <span></span>
                  </a>
                  <!-- </vx-col> -->
                </div>
              </div>
              <!-- <form id="contactForm">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <input class="form-control ip" type="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                      <input class="form-control ip" type="password" placeholder="Password" />
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <button class="button button-contactForm button-outline">Register</button>
                  <span class="text-md-right" style="margin-left: 11rem;">
                    <button @click="loginToDash" class="button button-contactForm">Login</button>
                  </span>
                </div>
                <div class="form-group mt-3">
                  <input type="checkbox" class="checkbox" />
                  <label style="margin-left: 10px;">Remember me</label>
                  <span class="text-md-right" style="margin-left: 11rem;">Forgot password?</span>
                </div>
              </form>-->
            </div>
            <div class="col-lg-5">
              <div class="hero-banner__img">
                <img
                  class="img-fluid animated fadeIn"
                  src="@/assets/img/nibbs-landing-phone-assets.png"
                  alt
                />
                <img
                  class="sec-hover animated slideInDown infinite slow"
                  src="@/assets/img/security.png"
                  alt
                />
                <!-- <div
                  style="width: 100%; position: relative;  margin-left: -105px;  height: 31px;"
                >-->
                <img
                  class="card-hover animated slideInRight infinite slower"
                  src="@/assets/img/card.png"
                  alt
                />
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-margin">
        <div class="container" style="position: relative;">
          <div
            class="hero_bg_section"
            style="position: absolute; bottom: 0; height: 40%; width: 50%; left: 0;"
          ></div>
          <div class="section-intro pb-85px text-center">
            <h4 class="section-intro__title secondary_color">Stay in full control with our</h4>
            <h2 class="section-intro__title primary_color">Improved User Experience</h2>
          </div>
          <vs-popup class="dialog" title :active.sync="popupActive">
            <!-- <h2 style="font-weight: normal;" class="text-center">{{popHeaders[content]}}</!-->
            <!-- <h2 style="font-weight: normal;" class="text-center">{{popHeaders[content]}}</h2> -->
            <template v-if="content== 'guide'">
              <div class="text-center p-12">
                <img src="../assets/images/click_here.svg" alt style="max-width: 100%;" />
                <h1 style="font-weight: normal;">Coming soon</h1>
              </div>
            </template>
            <template v-if="content== 'chat'">
              <div class="text-center p-12">
                <img src="../assets/images/click_here.svg" alt style="max-width: 100%;" />
                <h1 style="font-weight: normal;">Coming soon</h1>
              </div>
            </template>
            <template v-if="content== 'feedback'">
              <div class="p-12">
                <vs-input
                  class="w-full mb-3"
                  label="Name"
                  placeholder="Name"
                  v-model="feedbackForm.name"
                />
                <div class="vs-component vs-con-input-label vs-input w-full mb-3 vs-input-primary">
                  <label class="vs-input--label" for="Select institution">Select institution</label>
                  <!-- {{insitutionData}} -->
                  <v-select
                    placeholder="Select institution"
                    class="mb-3"
                    v-model="institiotnOpt"
                    @input="changeInstitution"
                    :options="insitutionData"
                  ></v-select>

                  <!-- <vs-select
                    placeholder="Select institution"
                    class="w-full"
                    v-model="feedbackForm.institution"
                  >
                    <vs-select-item
                      :key="`${item.id}_institution`"
                        :input-changed="changeInstitution"
                      :value="item.id"
                      :text="item.name"
                      v-for="item in insitutionData"
                    />
                  </vs-select>-->
                </div>
                <vs-input
                  class="w-full mb-3"
                  label="E-mail"
                  placeholder="E-mail"
                  v-model="feedbackForm.email"
                />
                <div class="vs-component vs-con-input-label vs-input w-full mb-3 vs-input-primary">
                  <!-- {{filteredServices}} -->
                  <label class="vs-input--label" for="Select service">Select service</label>
                  <v-select
                    placeholder="Select service"
                    class="mb-3"
                    v-model="optionService"
                    @input="changeServiceType"
                    :options="serviceOptions"
                  ></v-select>
                </div>

                <vs-textarea
                  placeholder="Type your feedback"
                  class="mb-3"
                  v-model="feedbackForm.content"
                />
                <div class="text-center">
                  <!-- <vs-checkbox
                    v-model="feedbackForm.tncChecked"
                    class="mt-5 text-center"
                  >I agree with service Terms & Conditions</vs-checkbox>-->
                  <vs-button @click="submitFeedback" color="#689855" type="filled">SUBMIT</vs-button>
                </div>
              </div>
            </template>
            <template v-if="content== 'survey'">
              <div class="text-center">
                <img :src="require('@/assets/images/click_here.svg')" alt style="max-width: 100%;" />
                <h1 style="font-weight: normal; margin-top: 10px;">There is no ongoing survey</h1>
                <!-- <h3>Check back soon</h3> -->
              </div>
            </template>
            <template v-if="content== 'faq'">
              <!-- <div class="text-center">
                <img src="../assets/images/click_here.svg" alt style="max-width: 100%;" />
                <h1 style="font-weight: normal;">Coming soon</h1>
              </div>-->
              <FAQ />
            </template>
            <template v-if="content== 'selfservice'">
              <div class="text-center">
                <img src="../assets/images/click_here.svg" alt style="max-width: 100%;" />
                <h1 style="font-weight: normal;">Coming soon</h1>
                <!-- <h3>Check back soon</h3> -->
              </div>
            </template>
            <!-- <p>{{content}}</p> -->
          </vs-popup>

          <div class="row">
            <div class="col-lg-3 mb-4">
              <div
                class="card card-feature text-center mb-4 mb-lg-0 fill"
                @click="popupActive = true;content='feedback'"
              >
                <div class="card-feature__icon">
                  <img :src="require('@/assets/images/like.svg')" alt />
                </div>
                <h3 class="card-feature__title">Feedback</h3>
                <p class="card-feature__subtitle">How can we serve you better?</p>
              </div>
            </div>
            <div class="col-lg-3 mb-4">
              <div
                class="card card-feature text-center mb-4 mb-lg-0 fill"
                @click="popupActive = true;content='survey'"
              >
                <div class="card-feature__icon">
                  <div class="card-feature__icon">
                    <img :src="require('@/assets/images/survey.svg')" alt />
                  </div>
                </div>
                <h3 class="card-feature__title">Survey</h3>
                <p class="card-feature__subtitle">We appreciate your opinion</p>
              </div>
            </div>
            <div class="col-lg-3 mb-4">
              <div
                class="card card-feature text-center mb-4 mb-lg-0 fill"
                @click="popupActive = true;content='faq'"
              >
                <span class="card-feature__icon">
                  <img :src="require('@/assets/images/faq.svg')" alt />
                </span>
                <h3 class="card-feature__title">FAQs</h3>
                <p class="card-feature__subtitle">Your questions... answered</p>
              </div>
            </div>
            <div class="col-lg-3 mb-4">
              <div
                class="card card-feature text-center mb-4 mb-lg-0 fill"
                @click="popupActive = true;content='guide'"
              >
                <span class="card-feature__icon">
                  <img :src="require('@/assets/images/code_python.png')" alt />
                </span>
                <h3 class="card-feature__title">User Guide</h3>
                <p class="card-feature__subtitle">Get started!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="section-margin">
        <div class="container">
          <div class="section-intro pb-85px text-center">
            <h2 class="section-intro__title primary_color">Sign Up for Our Newsletter</h2>
            <h4 class="section-intro__title secondary_color">
              Be the first to learn about our new products and get
              exclusive offers
            </h4>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <form class="form-inline newsletterForm" style="justify-content: center;" action="#">
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                    id="email"
                  />
                  <button type="submit" class="btn btn-default input-group-addon">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>-->
    </main>

    <footer class="footer-area section-gap">
      <div class="container">
        <div class="row">
          <div class="offset-xl-2 col-xl-12 mb-2 single-footer-widget">
            <h4>
              <vs-tooltip text="Not available." color="primary">
                <img src="@/assets/images/logo/logo-white.png" style="width: 112px; height: 68px;" />
              </vs-tooltip>
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="offset-xl-2 col-xl-3 col-md-4 col-sm-12 mb-4 mb-xl-0 single-footer-widget">
            <h4>Nigeria Inter-Bank Settlement System Plc</h4>
          </div>
          <div
            class="col-xl-4 col-md-4 col-sm-12 mb-4 single-footer-widget"
            style="flex-flow: column;"
          >
            <div>
              <!-- <span class="fa fa-phone"></span>&nbsp; -->
              07000 500 000
            </div>
            <div>
              <!-- <span class="fa fa-envelope-o"></span> &nbsp;  -->
              contactcentre@nibss-plc.com.ng
            </div>
            <div>
              <a href="https://nibss-plc.com.ng/">
                <!-- <span class="fa fa-globe"></span> &nbsp; -->
                www.nibss-plc.com.ng
              </a>
            </div>
          </div>
          <div
            class="col-xl-3 col-md-4 col-sm-12 mb-4 single-footer-widget"
            style="flex-flow: column;"
          >
            <span>Powered by NIBSS</span>
          </div>
        </div>
      </div>
    </footer>

    <div class="fabBtn shadow" @click="popupActive = true;content='chat'">
      <!-- <vs-tooltip text="Not available." active="true" color="primary"> -->
      <img src="../assets/images/chat.png" style="width: 60px; height: auto;" />
      <!-- </vs-tooltip> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// require("@/assets/landing-assets/vendors/bootstrap/bootstrap.min.css");
// require("@/assets/landing-assets/vendors/themify-icons/themify-icons.css");
// require("@/assets/landing-assets/css/style.css");
// import "../assets/landing-assets/js/main";
// import "../assets/landing-assets/js/slick.min.js";
// console.log({FilteredServices})
const axios = require("axios");
import _ from "lodash";
// import "../assets/landing-assets/vendors/jquery/jquery-3.2.1.min.js";
// import "../assets/landing-assets/vendors/bootstrap/bootstrap.bundle.min.js";
import vSelect from "vue-select";
import API from "../views/pages/API";
import FAQ from "./FAQ";
// import Tawk from "vue-tawk";
import Vue from "vue";
// Vue.use(Tawk, {
//   tawkSrc: "https://embed.tawk.to/5d7ea4ec9f6b7a4457e1cc31/default"
// });
export default {
  components: {
    "v-select": vSelect,
    FAQ
  },
  data() {
    return {
      optionService: null,
      institiotnOpt: null,
      serviceOptions: [],
      institution: "",
      guideForm: {
        name: null,
        email: null,
        option: null
      },
      filteredServices: [],
      feedbackForm: {
        name: null,
        email: null,
        service: null,
        institution: null,
        content: null,
        tncChecked: true
      },
      popupActive: false,
      content: "Default",
      insitutionData: [],

      institutionOption: ["DMB", "MDA", "MFB", "OFI", "PTSP", "Others"].map(
        x => ({ label: x, value: x })
      ),

      fbOptions: [
        {
          label: "NIP",
          url: "NIP.pdf"
        },
        {
          label: "POS",
          url: "POS.pdf"
        },
        {
          label: "mCash",
          url: "NIP.pdf"
        }

        // {
        //   id: 1,
        //   label: "DMB",
        //   url: "Authorised Signatory Verification -User Guide.pdf"
        // },
        // {
        //   id: 2,
        //   label: "ePassport",
        //   url: "ePassport -User Guide.pdf"
        // },
        // { id: 3, label: "EPCCOS", url: "EPCCOS -User Guide.pdf" },
        // {
        //   id: 4,
        //   label: "e-Reference",
        //   url: "e-Reference -User Guide.pdf"
        // },
        // {
        //   id: 5,
        //   label: "Validation Portal",
        //   url: "Validation Portal -User Guide.pdf"
        // },
        // {
        //   id: 5,
        //   label: "Others"
        // }
      ],
      options: [
        {
          id: 1,
          label: "Authorised Signatory Verification -User Guide",
          url: "Authorised Signatory Verification -User Guide.pdf"
        },
        {
          id: 2,
          label: "ePassport -User Guide",
          url: "ePassport -User Guide.pdf"
        },
        { id: 3, label: "EPCCOS -User Guide", url: "EPCCOS -User Guide.pdf" },
        {
          id: 4,
          label: "e-Reference -User Guide",
          url: "e-Reference -User Guide.pdf"
        },
        {
          id: 5,
          label: "Validation Portal -User Guide",
          url: "Validation Portal -User Guide.pdf"
        }
      ],
      popHeaders: {
        feedback: "Your Feedback ",
        survey: "",
        guide: "Download Our User Guides",
        faq: ""
      }
    };
  },
  methods: {
    changeInstitution(inst) {
      // console.log(inst);
      this.feedbackForm.institution = inst;
    },
    fetchInstitutions() {
      API.get("selfservicews/ws/tx/findinstitutions")
        .then(response => {
          // console.log(response);
          this.insitutionData = response.map((val, ind) => {
            return val.name;
          });
        })
        .catch(error => console.log(error));
    },
    changeServiceType(serv) {
      this.feedbackForm.service = serv;
    },
    loginToDash() {
      window.location = "#/app";
    },
    resetForms() {
      this.optionService = null;
      this.institution = null;
      this.guideForm = {
        name: null,
        email: null,
        option: null
      };
      this.feedbackForm = {
        name: null,
        email: null,
        service: null,
        institution: null,
        content: null
      };
    },
    submitFeedback: _.throttle(function() {
      let unfilled = false;
      let mailBody = `<h1>Customer Feedback</h1> <br><hr><br>`;
      console.log(this.feedbackForm);
      Object.keys(this.feedbackForm).map(key => {
        console.log(key);
        if (!this.feedbackForm[key]) {
          unfilled = true;
        } else {
          mailBody +=
            key == "tncChecked"
              ? ""
              : `<b>${key}</b> &nbsp;&nbsp; - ${this.feedbackForm[key]}  <br> `;
        }
      });
      if (unfilled) {
        this.$vs.notify({
          title: "",
          text: "Please fill all fields",
          iconPack: "feather",
          icon: "icon-warning",
          color: "danger",
          position: "top-right"
        });
      } else {
        this.$vs.loading();
        const msg = {
          // mailTo: "holhushehun@gmail.com",
          mailTo: "feedback@nibss-plc.com.ng",
          senderName: this.feedbackForm.name,
          subject: "Customer Feedback",
          body: mailBody
        };
        // console.log(msg);
        API.post(`selfservicews/ws/tx/sendemail`, msg)
          .then(resp => {
            this.$vs.notify({
              title: "Info",
              text: "Feedback sent!",
              iconPack: "feather",
              icon: "icon-info",
              color: "success",
              position: "top-right"
            });
            this.resetForms();
            this.popupActive = false;
            this.$vs.loading.close();
          })
          .catch(err => {
            this.$vs.loading.close();
          });
      }
    }, 4000),
    submitGuide() {
      let unfilled = false;
      Object.keys(this.guideForm).map(key => {
        if (!this.guideForm[key]) {
          unfilled = true;
        }
      });
      if (unfilled) {
        this.$vs.notify({
          title: "",
          text: "Please fill all fields",
          iconPack: "feather",
          icon: "icon-warning",
          color: "danger",
          position: "top-right"
        });
      } else {
        let name = `${this.guideForm.option ? this.guideForm.option.url : ""}`;
        let link = `${window.location.protocol}//${window.location.host}/assets/${name}`;
        this.resetForms();
        this.popupActive = false;
        this.$vs.loading.close();
        // this.forceFileDownload(link, name);
        window.open(link);
        // console.log(link);
      }
    },
    forceFileDownload(url, name) {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name);
      document.body.appendChild(link);
      link.click();
    }
  },
  mounted() {
    let container = this;
    API.get("selfservicews/ws/tx/find")
      .then(function(response) {
        let tempData = [
          ...response,
          {
            name: "Self service",
            injected: true
          }
        ];
        container.filteredServices = tempData.sort((x, y) => {
          if (x.name.toLowerCase() < y.name.toLowerCase()) {
            return -1;
          }
          if (x.name.toLowerCase() > y.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        // FilteredServices = filtered;
        // console.log(FilteredServices);
        container.filteredServices.map((service_item, index) => {
          // console.log(service_item);
          // let serviceIcon = require(`../../img/icons/${index}.png`);
          container.fbOptions = [
            ...container.fbOptions,
            {
              ...service_item,
              label: service_item.name
            }
          ];
        });
        container.fbOptions = [
          ...container.fbOptions,
          {
            id: 5,
            label: "Others"
          }
        ];

        container.serviceOptions = container.filteredServices.map(
          (val, ind) => {
            return val.name;
          }
        );
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  },
  created() {
    this.fetchInstitutions();
    // console.log(process.env.VUE_APP_API)
  }
};
</script>


<style>
@import url("../assets/css/animate.min.css");
@import url("../assets/css/slick.css");
/* @import url("../assets/css/slick-theme.css"); */
/* @import url("../assets/css/ionicons.min.css"); */
header.vs-popup--header {
  background: #fff !important;
  border-radius: 22px 0px !important;
}
.vs-popup {
  position: relative;
  border-radius: 22px !important;
  width: 70% !important;
}
.con-vs-checkbox {
  justify-content: center !important;
}
#maximizeChat {
  background: #50a8ad !important;
}
</style>

<style lang="scss" scoped>
// @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
// @import url("https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css");
// @import url("https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css");
// @import url("https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css");
// @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

@import url("../assets/landing-assets/vendors/bootstrap/bootstrap.min.css");
@import url("../assets/landing-assets/vendors/themify-icons/themify-icons.css");
@import url("../assets/landing-assets/css/style.css");
.ip {
  border-radius: 25px;
  border: 1px solid #dfe2e6;
  padding: 20px;
  height: 50px;
}
.button-contactForm {
  background: #689855;
}
.button-contactForm:hover {
  /* font-weight: bold; */
  color: #fff;
}
.button-outline:hover {
  color: #689855;
}
.button-outline {
  border: 1px solid #689855;
  color: #689855;
  background: none;
}
@media only screen and (min-width: 768px) {
  .ip {
    width: 400px;
  }
}
@media only screen and (min-width: 600px) {
  .ip {
    width: 400px;
  }
}
.fabBtn {
  bottom: 0;
  position: fixed;
  margin: 1em;
  right: 0px;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 999999;
}
</style>
  