<template>
  <vs-card>
    <!-- <div class="vx-row p-10"> -->
    <!-- <div class="vx-row flex justify-end w-full">
      <div class="vx-col sm:w-2/3 w-full ml-auto">
        <vs-button class="mr-3 mb-2" color="primary" type="filled">Upload CSV file</vs-button>
        <vs-button color="primary" type="filled" class="mb-2">Download CSV template</vs-button>
      </div>
    </div>-->

    <vs-tabs>
      <!-- <vs-tab label="NIBSS Users">
        <div class="tab-text">
          <div class="vx-row p-10">
            <div class="vx-col flex flex-col sm:w-full lg:w-2/3 p-20">
              <form-wizard
                color="rgba(var(--vs-primary), 1)"
                :title="null"
                :subtitle="null"
                finishButtonText="Submit"
                @on-complete="formSubmitted"
              >
                <tab-content title="Biodata" class="mb-5">
                  <div class="vx-row mb-6">
                    <div class="vx-col sm:w-1/3 w-full">
                      <span>First Name</span>
                    </div>
                    <div class="vx-col sm:w-2/3 w-full">
                      <vs-input class="w-full" v-model="firstName" />
                    </div>
                  </div>
                  <div class="vx-row mb-6">
                    <div class="vx-col sm:w-1/3 w-full">
                      <span>Last Name</span>
                    </div>
                    <div class="vx-col sm:w-2/3 w-full">
                      <vs-input class="w-full" v-model="lastName" />
                    </div>
                  </div>
                  <div class="vx-row mb-6">
                    <div class="vx-col sm:w-1/3 w-full">
                      <span>Email</span>
                    </div>
                    <div class="vx-col sm:w-2/3 w-full">
                      <vs-input class="w-full" type="email" v-model="email" />
                    </div>
                  </div>
                  <div class="vx-row mb-6">
                    <div class="vx-col sm:w-1/3 w-full">
                      <span>Password</span>
                    </div>
                    <div class="vx-col sm:w-2/3 w-full">
                      <vs-input class="w-full" v-model="password" type="password" />
                    </div>
                  </div>
                  <div class="vx-row mb-6">
                    <div class="vx-col sm:w-1/3 w-full">
                      <span>Repeat Password</span>
                    </div>
                    <div class="vx-col sm:w-2/3 w-full">
                      <vs-input class="w-full" type="password" v-model="repeat_password" />
                    </div>
                  </div>
                  <div class="vx-row mb-6">
                    <div class="vx-col sm:w-1/3 w-full">
                      <span>Send User Notification</span>
                    </div>
                    <div class="vx-col sm:w-2/3 w-full">
                      <vs-checkbox
                        class="inline-flex"
                        v-model="notify_user"
                      >Send the new user an email about their account</vs-checkbox>
                    </div>
                  </div>
                </tab-content>

                <tab-content title="Access Control" class="mb-5">
                  <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full">
                      <vs-input label="Proposal Title" v-model="proposalTitle" class="w-full mt-4" />
                      <vs-input label="Job Title" v-model="jobTitle" class="w-full mt-4" />
                    </div>
                    <div class="vx-col md:w-1/2 w-full">
                      <vs-textarea
                        v-model="textarea"
                        label="Short discription"
                        class="mb-0 md:mt-10 mt-6"
                        rows="3"
                      />
                    </div>
                  </div>
                </tab-content>

                <tab-content title="Styling" class="mb-5">
                  <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full">
                      <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" />
                    </div>
                    <div class="vx-col md:w-1/2 w-full">
                      <vs-select
                        v-model="city"
                        class="w-full select-large mt-5"
                        label="Event Location"
                      >
                        <vs-select-item
                          :key="index"
                          :value="item.value"
                          :text="item.text"
                          v-for="(item,index) in cityOptions"
                          class="w-full"
                        />
                      </vs-select>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                      <vs-select v-model="status" class="w-full select-large" label="Event Status">
                        <vs-select-item
                          :key="index"
                          :value="item.value"
                          :text="item.text"
                          v-for="(item,index) in statusOptions"
                          class="w-full"
                        />
                      </vs-select>
                    </div>
                    <div class="vx-col md:w-1/2 w-full md:mt-8">
                      <div class="demo-alignment">
                        <span>Requirements:</span>
                        <div class="flex">
                          <vs-checkbox>Staffing</vs-checkbox>
                          <vs-checkbox>Catering</vs-checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content>
              </form-wizard>
            </div>

            <div class="vx-col flex flex-col sm:w-full lg:w-1/3 p-20">
              <div class="carousel-example">
                <swiper :options="swiperOption">
                  <swiper-slide>Info 1</swiper-slide>
                  <swiper-slide>Info 2</swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </vs-tab>-->
      <vs-tab label="Institution Type">
        <institution-type-form />
      </vs-tab>
      <vs-tab label="Institution">
        <institution-form />
        <!-- <div class="tab-text">
          <div class="vx-row p-10">
            <div class="vx-col flex flex-col sm:w-full lg:w-2/3 p-20">
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Branch Name</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input class="w-full" v-model="branch_name" />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Branch Email</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input class="w-full" type="email" v-model="branch_email" />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Password</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input class="w-full" v-model="branch_password" type="password" />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Repeat Password</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input class="w-full" type="password" v-model="branch_repeatpassword" />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Send Branch Notification</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-checkbox
                    class="inline-flex"
                    v-model="branch_notify"
                  >Send the new branch an email about their account</vs-checkbox>
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col sm:w-2/3 w-full ml-auto">
                  <vs-button class="w-full" color="primary">Add New Branch</vs-button>
                </div>
              </div>
            </div>

            <div class="vx-col flex flex-col sm:w-full lg:w-1/3 p-20">
              <div class="carousel-example">
                <swiper :options="swiperOption">
                  <swiper-slide>Info 1</swiper-slide>
                  <swiper-slide>Info 2</swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
          </div>
        </div>-->
      </vs-tab>
    </vs-tabs>
    <!-- </div> -->
  </vs-card>
</template>

<script>
import InstitutionTypeForm from "./forms/InstitutionType";
import InstitutionForm from "./forms/Institution";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeat_password: "",
      notify_user: false,
      branch_name: "",
      branch_email: "",
      branch_password: "",
      branch_repeatpassword: "",
      branch_notify: "",
      city: "",
      proposalTitle: "",
      jobTitle: "",
      textarea: "",
      eventName: "",
      eventLocation: "san-francisco",
      status: "plannning",
      cityOptions: [
        { text: "New York", value: "new-york" },
        { text: "Chicago", value: "chicago" },
        { text: "San Francisco", value: "san-francisco" },
        { text: "Boston", value: "boston" }
      ],
      statusOptions: [
        { text: "Plannning", value: "plannning" },
        { text: "In Progress", value: "in progress" },
        { text: "Finished", value: "finished" }
      ],
      LocationOptions: [
        { text: "New York", value: "new-york" },
        { text: "Chicago", value: "chicago" },
        { text: "San Francisco", value: "san-francisco" },
        { text: "Boston", value: "boston" }
      ],
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    formSubmitted() {
      alert("Form submitted!");
    }
  },
  components: {
    FormWizard,
    TabContent,
    swiper,
    swiperSlide,
    "institution-type-form": InstitutionTypeForm,
    "institution-form": InstitutionForm
  }
};
</script>

<style lang="scss">
.carousel-example .swiper-container .swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 300px;
}
</style>