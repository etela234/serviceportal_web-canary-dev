<template>
  <div class="vx-row">
    <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
      <vx-card class="overlay-card overflow-hidden">
        <template slot="no-body">
          <img
            :src="require('@/assets/images/dashboard-asset-1.png')"
            alt="service-ovly"
            class="responsive"
          />
          <div class="card-overlay text-white">
            <div class="flex flex-col justify-around items-start h-full w-2/3">
              <vs-row
                vs-align="flex-end"
                vs-type="flex"
                vs-justify="flex-start"
                vs-w="12"
                style="padding: 10px;"
              ></vs-row>
              <h1 class="text-white mb-2">EPMS</h1>
              <hr style="width: 60%; border: 1.2px solid #fff; " />
              <p>
                Electronic POS management system
                is designed to fix bugs update
              </p>
              <vs-row
                vs-align="flex-end"
                vs-type="flex"
                vs-justify="flex-start"
                vs-h="12"
                vs-w="12"
              >
                <div class="check-holder flex justify-center items-center">
                  <span class="fa fa-check-circle fa-2x"></span>
                </div>
              </vs-row>
            </div>
          </div>
        </template>
      </vx-card>
    </div>
    <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
      <vx-card class="overlay-card overflow-hidden">
        <template slot="no-body">
          <img
            :src="require('@/assets/images/dashboard-e-billsasset-1.png')"
            alt="service-ovly"
            class="responsive"
          />
          <div class="card-overlay text-white">
            <div class="flex flex-col justify-around items-start h-full w-2/3">
              <vs-row
                vs-align="flex-end"
                vs-type="flex"
                vs-justify="flex-start"
                vs-w="12"
                style="padding: 10px;"
              ></vs-row>
              <h1 class="text-white mb-2">E-bills Pay</h1>
              <hr style="width: 60%; border: 1.2px solid #fff; " />
              <p>E-bills is an online, real-time credit Transfer product that enables customers to make and receive payments</p>
              <vs-row
                vs-align="flex-end"
                vs-type="flex"
                vs-justify="flex-start"
                vs-h="12"
                vs-w="12"
              >
                <div class="check-holder flex justify-center items-center">
                  <span class="fa fa-check-circle fa-2x"></span>
                </div>
              </vs-row>
            </div>
          </div>
        </template>
      </vx-card>
    </div>
    <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
      <vx-card class="overlay-card overflow-hidden">
        <template slot="no-body">
          <img
            :src="require('@/assets/images/dashboard-mask.png')"
            alt="service-ovly"
            class="responsive"
          />
          <div class="card-overlay text-white">
            <div class="flex flex-col justify-around items-start h-full w-2/3">
              <vs-row
                vs-align="flex-end"
                vs-type="flex"
                vs-justify="flex-start"
                vs-w="12"
                style="padding: 10px;"
              ></vs-row>
              <h1 class="text-white mb-2">M-Cash</h1>
              <hr style="width: 60%; border: 1.2px solid #fff; " />
              <p>Mcash is designed to provide accessible electronic payment channels to a wider range of users</p>
              <vs-row
                vs-align="flex-end"
                vs-type="flex"
                vs-justify="flex-start"
                vs-h="12"
                vs-w="12"
              >
                <div class="check-holder flex justify-center items-center">
                  <span class="fa fa-check-circle fa-2x"></span>
                </div>
              </vs-row>
            </div>
          </div>
        </template>
      </vx-card>
    </div>

    <div class="vx-row dash-body w-full lg:w-3/4 mb-base" style="margin: 0px;">
      <!-- <div class="vx-col w-full lg:w-3/4 mb-base"> -->
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-5">
        <stat-card label="OPERATIONAL" icon-right statistic="NIP" color="primary"></stat-card>
      </div>
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-5">
        <stat-card label="DOWN" icon-right statistic="POS" color="danger"></stat-card>
      </div>
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-5">
        <stat-card label="OPERATIONAL" icon-right statistic="BVN" color="warning"></stat-card>
      </div>
      <div class="vx-col w-full mb-base">
        <vx-card title="TRAF">
          <vue-apex-charts
            type="area"
            height="350"
            :options="apexChatData.lineAreaChartSpline.chartOptions"
            :series="apexChatData.lineAreaChartSpline.series"
          ></vue-apex-charts>
        </vx-card>
      </div>
      <!-- <div class="vx-row"> -->

      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
        <statistics-card-line
          icon="MonitorIcon"
          icon-right
          statistic="129,500"
          statisticTitle="TRANSACTIONS"
        ></statistics-card-line>
      </div>

      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
        <statistics-card-line
          icon="SettingsIcon"
          icon-right
          statistic="15,000"
          statisticTitle="OPERATIONS"
          color="success"
        ></statistics-card-line>
      </div>

      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
        <statistics-card-line
          icon="MailIcon"
          icon-right
          statistic="37,209"
          statisticTitle="TICKETS"
          color="warning"
        ></statistics-card-line>
      </div>
      <!-- </div> -->
    </div>

    <div class="vx-col w-full lg:w-1/4 mb-base">
      <vx-card title="721" subtitle="Reports" class="overflow-hidden flex flex-col h-full">
        <template slot="no-body">
          <div class="report-card-log" style="margin-top: 10px">
            <vs-list>
              <vs-list-item title="CAC">
                <template slot="avatar">
                  <vs-avatar />
                </template>
                <p color="primary">5,430,000</p>
              </vs-list-item>
              <vs-list-item title="FTSE">
                <template slot="avatar">
                  <vs-avatar />
                </template>
                <p color="primary">5,430,000</p>
              </vs-list-item>
              <vs-list-item title="Dangote">
                <template slot="avatar">
                  <vs-avatar />
                </template>
                <p color="primary">5,430,000</p>
              </vs-list-item>
              <vs-list-item title="FISL">
                <template slot="avatar">
                  <vs-avatar />
                </template>
                <p color="primary">5,430,000</p>
              </vs-list-item>
              <vs-list-item title="Canary">
                <template slot="avatar">
                  <vs-avatar />
                </template>
                <p color="primary">5,430,000</p>
              </vs-list-item>
              <vs-list-item title="CAC">
                <template slot="avatar">
                  <vs-avatar />
                </template>
                <p color="primary">5,430,000</p>
              </vs-list-item>
              <vs-list-item title="CAC">
                <template slot="avatar">
                  <vs-avatar />
                </template>
                <p color="primary">5,430,000</p>
              </vs-list-item>
              <vs-list-item title="CAC">
                <template slot="avatar">
                  <vs-avatar />
                </template>
                <p color="primary">5,430,000</p>
              </vs-list-item>
              <div style="margin-top: 25px;">
                <vs-pagination :total="5" v-model="currentx"></vs-pagination>
              </div>
            </vs-list>
          </div>
        </template>
      </vx-card>
    </div>
  </div>
</template>

<script>
import StatCard from "@/components/statistics-cards/StatCard.vue";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "./data/analyticsData.js";
import VueApexCharts from "vue-apexcharts";
import apexChatData from "./data/apexChartData.js";
export default {
  name: "dash-board",
  components: {
    StatCard,
    VueApexCharts,
    StatisticsCardLine
  },
  data() {
    return {
      apexChatData: apexChatData,
      analyticsData: analyticsData,
      currentx: 1,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      },
      chatMsgInput: "",
      chatMsg: [
        {
          senderImg: "avatar-s-2.png",
          msg: "Cake sesame snaps cupcake gingerbread",
          isSent: false
        },
        {
          senderImg: "avatar-s-5.png",
          msg: "Apple pie pie jujubes chupa chups muffin",
          isSent: true
        },
        { senderImg: "avatar-s-2.png", msg: "Chocolate cake", isSent: false },
        {
          senderImg: "avatar-s-5.png",
          msg: "Donut sweet pie oat cake dragée fruitcake",
          isSent: true
        },
        {
          senderImg: "avatar-s-2.png",
          msg: "Liquorice chocolate bar jelly beans icing",
          isSent: false
        },
        { senderImg: "avatar-s-5.png", msg: "Pudding candy", isSent: true }
      ]
    };
  },
  mounted() {
    //   window.location.reload();
  }
};
</script>

<style lang="scss">
.check-holder {
  background: rgba($color: #fff, $alpha: 0.4) !important;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.card-overlay::after {
  background: rgba($color: #000000, $alpha: 0.2) !important;
}
</style>