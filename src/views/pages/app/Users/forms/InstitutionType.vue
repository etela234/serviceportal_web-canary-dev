<template>
  <div class>
    <div class="flex justify-between w-full mt-2 p-4" style="background: #FAFAFA;">
      <h2 class="header">Create Institution Type</h2>
      <span>
        <vs-button color="#AF9C54" type="filled">Upload CSV file</vs-button>
        <vs-button
          color="#AF9C54"
          class="float-right"
          type="filled"
          style="margin-left: 10px;"
        >Download CSV template</vs-button>
      </span>
    </div>

    <div class="tab-text">
      <div class="vx-row p-10" v-if="addInsType">
        <div class="vx-col flex flex-col sm:w-full lg:w-2/3 p-20">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Name</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input placeholder="Name" class="w-full" v-model="institutionTypeName" />
            </div>
          </div>

          <!-- <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Description</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-textarea placeholder="Description" v-model="type_description" />
            </div>
          </div>

          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Select Services</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <div style="display: flex; flex-direction: row">
                <div style="flex: 1">
                  <div>
                    <vs-checkbox v-model="checkBox1" class="mt-6 ml-6">EDMMS</vs-checkbox>
                  </div>
                  <div>
                    <vs-checkbox v-model="checkBox2" class="mt-6 ml-6">NIP</vs-checkbox>
                  </div>
                  <div>
                    <vs-checkbox v-model="checkBox2" class="mt-6 ml-6">POS</vs-checkbox>
                  </div>
                </div>
                <div style="flex: 1">
                  <div>
                    <vs-checkbox v-model="checkBox1" class="mt-6 ml-6">E BILLS PAY</vs-checkbox>
                  </div>
                  <div>
                    <vs-checkbox v-model="checkBox2" class="mt-6 ml-6">CENTRAL PAY</vs-checkbox>
                  </div>
                  <div>
                    <vs-checkbox v-model="checkBox2" class="mt-6 ml-6">EPCOOS</vs-checkbox>
                  </div>
                </div>
                <div style="flex: 1">
                  <div>
                    <vs-checkbox v-model="checkBox1" class="mt-6 ml-6">MCASH</vs-checkbox>
                  </div>
                  <div>
                    <vs-checkbox v-model="checkBox2" class="mt-6 ml-6">NIBSS PAY</vs-checkbox>
                  </div>
                  <div>
                    <vs-checkbox v-model="checkBox2" class="mt-6 ml-6">CMMS</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>-->

          <div class="mb-base"></div>

          <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="w-full" color="#AF9C54" @click="review">Save</vs-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Review -->

      <div class="vx-row p-10" v-if="reviewInsType">
        <div class="vx-col flex flex-col sm:w-full lg:w-2/3 p-20">
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span class="text-bold">Confirm institution type details below</span>
              </div>
            </div>
          </div>
          <vs-divider />
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span>Institution Type</span>
                <span class="text-bold mt-3">{{institutionTypeName}}</span>
              </div>
            </div>
          </div>
          <!-- <vs-divider />
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span>Description</span>
                <span
                  class="text-bold mt-3"
                >A monetary institution which fully controls the production, circulation</span>
              </div>
            </div>
          </div>
          <vs-divider />
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span>Selected Services</span>
              </div>
            </div>
          </div>
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span class="text-bold">EDMMS</span>
                <span class="text-bold mt-2">NIP</span>
                <span class="text-bold mt-2">POS</span>
              </div>
            </div>
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span class="text-bold">EBILLS PAY</span>
                <span class="text-bold mt-2">CENTRAL PAY</span>
                <span class="text-bold mt-2">EPCCOS</span>
              </div>
            </div>
          </div> -->

          <div class="mb-base"></div>

          <div class="vx-row">
            <div class="vx-col w-full mb-base flex items-center justify-end">
              <vs-button color="#af9c54" type="filled" @click="back" class="w-full">Review</vs-button>
              <vs-button
                color="#af9c54"
                type="filled"
                class="ml-5 w-full"
                @click="addInstitutionType"
              >Save</vs-button>
            </div>
          </div>
        </div>
      </div>

      <div class="vx-row p-10" v-if="doneSaving">
        <div class="vx-col flex flex-col sm:w-full lg:w-2/3 p-20">
          <div class="mb-base ml-5">
            <div style="text-align: center">
              <vs-icon icon="done" size="120px" color="#7aacaf"></vs-icon>
            </div>
            <div class="mb-6">
              <p class="title-bold">
                Congratulations
                <br />
                <span>You have created an institution type</span>
              </p>
            </div>
            <div class="mt-6" style="text-align: center;">
              <p style="color:#40888d; font-size: 1.4rem; font-weight: bold">{{institutionTypeName}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import API from "../../../API";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      institutionTypeName: "",
      type_description: null,
      addInsType: true,
      reviewInsType: false,
      doneSaving: false
    };
  },
  methods: {
    back() {
      this.addInsType = true;
      this.reviewInsType = false;
    },
    addInstitutionType() {
      const app = this;
      const payload = {
        institutionTypeName: this.institutionTypeName
      };
      API.post("selfservicews/ws/tx/addinstitutiontype/", payload)
        .then(response => {
          console.log(response);
          this.addInsType = false;
          this.reviewInsType = false;
          this.doneSaving = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    review() {
      this.reviewInsType = true;
      this.addInsType = false;
    }
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