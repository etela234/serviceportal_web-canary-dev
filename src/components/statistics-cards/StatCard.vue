<!-- =========================================================================================
    File Name: StatisticsCard.vue
    Description: Statistics card component
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card class="overflow-hidden">
    <div slot="no-body">
      <div
        class="p-6 pb-3"
        :class="{'flex justify-between flex-row-reverse items-center': iconRight}"
        style="border-bottom: 1px #eee solid;"
      >
        <vs-chip :color="color">{{label}}</vs-chip>
        <div>
          <h2 class="mb-1 font-bold">{{ statistic }}</h2>
          <span>{{ statisticTitle }}</span>
        </div>
      </div>
      <div class="p-6 flex justify-between items-center">
        <div class="h-full flex flex-col justify-between vx-col stat-info-col">
          <h2>39929393</h2>
          <h5>Processed</h5>
        </div>
        <div class="h-full flex flex-col justify-between vx-col stat-info-col">
          <h2>39929393</h2>
          <h5>Processed</h5>
        </div>
      </div>
    </div>
  </vx-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      default: "primary"
    },
    chartType: {
      type: String,
      default: "line-chart"
    },
    type: {
      type: String,
      default: "line"
    },
    iconRight: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: { monochrome: { color: this.getHex() } }
      });
    }
  },
  computed: {
    themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex() {
      let rgb = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`--vs-${this.color}`);
      rgb = rgb.split(",");
      return (
        "#" +
        (
          (1 << 24) +
          (Number(rgb[0]) << 16) +
          (Number(rgb[1]) << 8) +
          Number(rgb[2])
        )
          .toString(16)
          .slice(1)
      );
    }
  },
  components: {
    VueApexCharts
  },
  created() {
    // if(this.type == 'area') {
    //     this.chartData.chartOptions['theme'] = {
    //         monochrome: {
    //             enabled: true,
    //             color: this.getHex(this.color),
    //             shadeTo: 'light',
    //             shadeIntensity: 0.65
    //         }
    //     }
    // }
  }
};
</script>
<style lang="scss">
.stat-info-col {
  h2,
  h5 {
    color: #67758d;
    font-weight: 100;
  }
}
</style>