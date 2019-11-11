<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vs-table
        search
        v-model="selected"
        pagination
        stripe
        :data="tableData"
        @selected="handleSelected"
      >
        <template slot="header">
          <!-- <h3>Users</h3> -->
        </template>
        <template slot="thead">
          <vs-th></vs-th>
          <vs-th>Name</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-th>{{indextr+1}}</vs-th>
            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>

    <!-- Institution Detail -->
    <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
      <vx-card class="mt-12" v-if="showDetails">
        <div class="flex w-full p-2 mt-4">
          <div class="flex justify-between items-center w-full">
            <div class="flex flex-col justify-around items-start ml-2">
              <span>Institution Type</span>
              <span class="text-bold mt-3">{{selected.name}}</span>
            </div>
          </div>
        </div>
        <!-- <vs-divider /> -->
        <!-- <div class="flex w-full p-2 mt-4">
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
        </div>-->

        <div class="mb-base"></div>

        <div class="vx-row">
          <div class="vx-col w-full mb-base flex items-center justify-end">
            <vs-button color="#af9c54" type="filled" @click="showEdit(selected)">Edit</vs-button>
            <vs-button
              color="#af9c54"
              type="filled"
              class="ml-2"
              @click="showDelete(selected)"
            >Delete</vs-button>
          </div>
        </div>
      </vx-card>

      <!-- Edit Institution Type -->
      <vx-card class="mt-12" v-if="editInstitutionType && showDetails !== true">
        <div class="vx-row mb-base">
          <div class="vx-col w-full">
            <vs-input class="w-full" label="Name" v-model="currentEdit.institutionName" />
          </div>
        </div>

        <!-- {{currentEdit}} -->
        <!-- <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <span>Description</span>
              <vs-textarea class="w-full" v-model="description" />
            </div>
        </div>-->
        <div class="vx-row mb-base">
          <div class="vx-col w-full sm:w-1/2 md:w-1/2">
            <vs-button color="#af9c54" type="filled" class="w-full" @click="cancelRequest">Cancel</vs-button>
          </div>
          <div class="vx-col w-full sm:w-1/2 md:w-1/2">
            <vs-button color="#af9c54" type="filled" class="w-full" @click="toConfirm">Save</vs-button>
          </div>
        </div>
      </vx-card>

      <!-- Confirm Institution Type Detail -->
      <vx-card
        class="mt-12"
        v-if="confirmInstitutionType && showDetails !== true && editInstitutionType !== true"
      >
        <div class="flex w-full p-2 mt-4">
          <div class="flex justify-between items-center w-full">
            <div class="flex flex-col justify-around items-start ml-2">
              <span
                class="text-bold"
                style="font-weight: bold"
              >Confirm institution type details below:</span>
            </div>
          </div>
        </div>
        <vs-divider />
        <div class="flex w-full p-2 mt-4">
          <div class="flex justify-between items-center w-full">
            <div class="flex flex-col justify-around items-start ml-2">
              <span>Intitution Type</span>
              <span class="text-bold mt-3">{{currentEdit.institutionName}}</span>
            </div>
          </div>
        </div>
        <vs-divider />
        <!-- <div class="flex w-full p-2 mt-4">
          <div class="flex justify-between items-center w-full">
            <div class="flex flex-col justify-around items-start ml-2">
              <span>Description</span>
              <span
                class="text-bold mt-3"
              >A monetary institution which fully controls the production, circulation</span>
            </div>
          </div>
        </div>-->
        <!-- <vs-divider /> -->
        <!-- <div class="flex w-full p-2 mt-4">
          <div class="flex justify-between items-center w-full">
            <div class="flex flex-col justify-around items-start ml-2">
              <span>Selected Services</span>
            </div>
          </div>
        </div>-->
        <!-- <div class="flex w-full p-2 mt-4">
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
        </div>-->

        <div class="mb-base"></div>

        <div class="vx-row">
          <div class="vx-col w-full flex items-center justify-end">
            <vs-button color="#af9c54" type="filled" class="w-full" @click="edit">Review</vs-button>
            <vs-button
              color="#af9c54"
              type="filled"
              class="ml-2 w-full"
              @click="updateInstitutionType"
            >Save</vs-button>
          </div>
        </div>
      </vx-card>

      <!-- Delete Institution Type -->
      <vx-card
        class="mt-12"
        v-if="confirmDelete && showDetails !== true && editInstitutionType !== true && confirmInstitutionType !== true"
      >
        <div class="mb-base ml-5">
          <div style="text-align: center">
            <vs-icon icon="delete_forever" size="120px" color="#7aacaf"></vs-icon>
          </div>
          <div class="mb-6">
            <p class="title-bold">
              Are you sure you want to delete the institution type
              <br />
              <span style="color:#40888d; font-size: 1.4rem; font-weight: bold">{{currentEdit.name}}</span>
            </p>
          </div>
          <!-- <div class="mt-6" style="text-align: center;">
            <p style="font-weight: bold; font-size: 1rem">*There are no institutions assigned</p>
          </div>-->
        </div>
        <div style="text-align: center;">
          <div>
            <vs-button color="#af9c54" class="m-2" type="filled" @click="deleteInstitutionType">Yes</vs-button>
            <vs-button color="#af9c54" type="filled" @click="cancelRequest">No</vs-button>
          </div>
        </div>
      </vx-card>

      <!-- Deleted -->
      <vx-card
        class="mt-12"
        v-if="deleted && showDetails !== true && editInstitutionType !== true && confirmInstitutionType !== true && confirmDelete !== true"
      >
        <div class="mb-base ml-5">
          <div style="text-align: center">
            <vs-icon icon="delete_forever" size="120px" color="#7aacaf"></vs-icon>
          </div>
          <div style="text-align: center">
            <p style="color:#40888d; font-size: 1.7rem; font-weight: bold">Regulator</p>
          </div>
          <div class="mt-6" style="text-align: center;">
            <p style="font-size: 1rem">This institution has been deleted</p>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import API from "../../../API";

export default {
  name: "institution-types",
  data() {
    return {
      selected: [],
      showDetails: false,
      editInstitutionType: false,
      confirmInstitutionType: false,
      confirmDelete: false,
      showReview: false,
      deleted: false,
      tableData: [],
      name: "",
      currentEdit: {
        institutionName: "",
        code: ""
      }
    };
  },
  methods: {
    handleSelected(tr) {
      // console.log(this.selected);
      this.showDetails = true;
    },
    fetchInstitutionTypes() {
      API.get("selfservicews/ws/tx/findinstitutiontypes")
        .then(response => {
          this.tableData = response;
        })
        .catch(error => console.log(error));
    },
    showEdit(data) {
      // console.log(data);
      this.currentEdit = {
        institutionName: data.name,
        code: data.code
      };
      this.showDetails = false;
      this.editInstitutionType = true;
    },
    showDelete(data) {
      // console.log(data);
      this.currentEdit = {
        code: data.code
      };
      this.showDetails = false;
      this.editInstitutionType = false;
      this.confirmInstitutionType = false;
      this.confirmDelete = true;
    },
    deleteInstitutionType() {
      const payload = {
        institutionTypeCode: this.currentEdit.code
      };

      API.post("selfservicews/ws/tx/deleteinstitutiontype", payload)
        .catch(response => {
          // console.log(response);
          this.showDetails = false;
          this.editInstitutionType = false;
          this.confirmInstitutionType = false;
          this.confirmDelete = false;
          this.deleted = true;
        })
        .catch(error => console.log(error));
    },
    cancelRequest() {
      this.showDetails = true;
    },
    toConfirm() {
      this.showDetails = false;
      this.editInstitutionType = false;
      this.confirmInstitutionType = true;
    },
    edit() {
      this.showDetails = false;
      this.editInstitutionType = true;
      this.confirmInstitutionType = false;
    },
    backToEdit() {
      this.showDetails = true;
    },
    updateInstitutionType() {
      let app = this;
      const payload = {
        institutionTypeCode: this.currentEdit.code,
        institutionTypeName: this.currentEdit.institutionName
      };
      console.log("posting...");

      API.put("selfservicews/ws/tx/editinstitutiontype", payload)
        .catch(response => {
          window.location.reload()
          console.log(response);
          // console.log(app.showDetails);
          // app.showDetails = true;
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.fetchInstitutionTypes();
  }
};
</script>

<style lang="scss">
#parentx {
  overflow: hidden;
  height: 500px;
  position: relative;
}

.text-bold {
  color: #40888d;
  font-size: 1rem;
}

.title-bold {
  font-size: 1.2rem;
  text-align: center;
}

.inner-sidebarx {
  .vs-sidebar {
    min-width: 70%;
  }
}

@media only screen and (max-width: 768px) {
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
</style>