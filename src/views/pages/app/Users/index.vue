<template>
  <vs-card class="p-10">
    <div class="flex items-end justify-end tab-action" id="tab-actions">
      <!-- {{activeTab}} -->
      <vs-button
        v-show="activeTab == 0"
        color="#AF9C54"
        type="filled"
        to="/app/users/create"
        class="m-2"
      >Create New User</vs-button>
      <vs-button
        v-show="activeTab == 1"
        color="#AF9C54"
        type="filled"
        to="/app/users/create"
        class="m-2"
      >Create Institution Type</vs-button>
      <vs-button
        v-show="activeTab == 2"
        color="#AF9C54"
        type="filled"
        to="/app/users/create"
        class="m-2"
      >Create Institution</vs-button>
    </div>
    <vs-tabs v-model="activeTab">
      <vs-tab label="NIBSS Users">
        <div class="tab-text">
          <nibss-users></nibss-users>
        </div>
      </vs-tab>
      <vs-tab label="Institution Types">
        <div class="tab-text">
          <institution-types></institution-types>
        </div>
      </vs-tab>
      <vs-tab label="Institutions">
        <div class="tab-text">
          <institutions></institutions>
        </div>
      </vs-tab>
    </vs-tabs>
  </vs-card>
</template>
<script>
import Institutions from "./modules/Institutions";
import InstitutionTypes from "./modules/InstitutionTypes";
import Users from "./modules/Users";
export default {
  name: "app-users",
  components: {
    [Institutions.name]: Institutions,
    [InstitutionTypes.name]: InstitutionTypes,
    [Users.name]: Users
  },
  data() {
    return {
      activeTab: 0
    };
  }
};
</script>
<style lang="scss">
#tab-actions {
  margin-bottom: -45px;

  button{
    z-index: 9999;
  }
}
@media only screen and (max-width: 768px) {
  #tab-actions {
    margin: 0px !important;
  }
}
</style>