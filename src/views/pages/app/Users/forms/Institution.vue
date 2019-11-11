<template>
  <div class>
    <div class="flex justify-between w-full mt-2 p-4" style="background: #FAFAFA;">
      <h2 class="header">Create Institution</h2>
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
      <div class="vx-row p-10" v-if="addInst">
        <div class="vx-col flex flex-col sm:w-full lg:w-2/3 p-20">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Institution Name</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input placeholder="Institution Name" class="w-full" v-model="fullName" />
            </div>
          </div>

          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Code</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input placeholder="Code" v-model="code" class="w-full" />
            </div>
          </div>

          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Institution Type</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-select
                class="selectExample"
                v-model="institutionTypeId"
                style="width: 100% !important"
              >
                <vs-select-item
                  :key="item.id"
                  :value="item.id"
                  :text="item.name"
                  v-for="item in institution_types"
                  @change="getName"
                />
              </vs-select>
            </div>
          </div>

          <!-- <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Physical Address</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input placeholder="Physical Address" v-model="institution_address" />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Contact Email</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input placeholder="Contact Email" v-model="institution_email" />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Contact Phone Number</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input placeholder="Contact Phone Number" v-model="institution_phone" />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Physical Address</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input placeholder="Physical Address" v-model="institution_address" />
            </div>
          </div>-->

          <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="w-full" color="#AF9C54" @click="review">Submit</vs-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Review -->

      <div class="vx-row p-10" v-if="reviewInst">
        <div class="vx-col flex flex-col sm:w-full lg:w-2/3 p-20">
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span class="text-bold">Confirm institution details below</span>
              </div>
            </div>
          </div>
          <vs-divider />
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span>Institution</span>
                <span class="text-bold mt-3">{{fullName}}</span>
              </div>
            </div>
          </div>
          <vs-divider />
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span>Code</span>
                <span class="text-bold mt-3">{{code}}</span>
              </div>
            </div>
          </div>
          <vs-divider />
          <div class="flex w-full p-2 mt-4">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-around items-start ml-2">
                <span>Institution Type</span>
                <span class="text-bold mt-3">{{institutionTypeId}}</span>
              </div>
            </div>
          </div>

          <div class="mb-base"></div>

          <div class="mb-base"></div>

          <div class="vx-row">
            <div class="vx-col w-full mb-base flex items-center justify-end">
              <vs-button color="#af9c54" type="filled" @click="back" class="w-full">Review</vs-button>
              <vs-button
                color="#af9c54"
                type="filled"
                class="ml-5 w-full"
                @click="addInstitution"
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
                <span>You have created an institution</span>
              </p>
            </div>
            <div class="mt-6" style="text-align: center;">
              <p style="color:#40888d; font-size: 1.4rem; font-weight: bold">{{fullName}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
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
      fullName: "",
      institutionTypeId: "",
      institution_description: "",
      code: "",
      institution_types: [],
      addInst: true,
      reviewInst: false,
      doneSaving: false
    };
  },
  methods: {
    getName() {

    },
    back() {
      this.addInst = true;
      this.reviewInst = false;
    },
    fetchInstitutionTypes() {
      API.get("selfservicews/ws/tx/findinstitutiontypes")
        .then(response => {
          this.institution_types = response;
        })
        .catch(error => console.log(error));
    },
    addInstitution() {
      const payload = {
        code: this.code,
        fullName: this.fullName,
        institutionTypeId: this.institutionTypeId
      };
      API.post("selfservicews/ws/tx/addinstitution", payload)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));
    },
    review() {
      this.reviewInst = true;
      this.addInst = false;
    }
  },
  created() {
    this.fetchInstitutionTypes();
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