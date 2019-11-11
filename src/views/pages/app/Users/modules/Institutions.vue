<template>
  <div class="mt-4">
    <vs-popup class="holamundo" title="Edit Institution" :active.sync="popupActive">
      <div class="flex flex-col">
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Institution Name</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input placeholder="Institution Name" class="w-full" v-model="editData.fullName" />
          </div>
        </div>

        <!-- <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Code</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input placeholder="Code" v-model="editData.instCode" class="w-full" />
          </div>
        </div>-->

        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="w-full" color="#AF9C54" @click="updateInstitution">Submit</vs-button>
          </div>
        </div>
      </div>
    </vs-popup>
    <!-- <grey-table :tableData="insitutionData" :columnDefs="columnDefs"></grey-table> -->
    <vs-table search pagination stripe :data="insitutionData">
      <template slot="thead">
        <vs-th>Name</vs-th>
        <!-- <vs-th></vs-th> -->
        <vs-th></vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>
          <vs-td :data="data[indextr].code" >
             <vs-button  type="border" @click="showPopup(data[indextr])" style="margin-right: 10px;">Edit</vs-button>
            <vs-button  type="border" @click="deleteInstitution(data[indextr].code)" color="danger">Delete</vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
/* eslint-disable */
import API from "../../../API";

export default {
  name: "institutions",
  data() {
    return {
      insitutionData: [],
      popupActive: false,
      institution_types: [],
      editData: {
        fullName: "",
        instCode: "",
        preValue: ""
      },
      selected: [],
      columnDefs: [
        {
          headerName: "Institution Name",
          field: "name",
          //   width: 175,
          // filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true
        }
        // {
        //   headerName: "Type",
        //   field: "roleType"
        // }
      ]
    };
  },
  methods: {
    fetchInstitutions() {
      API.get("selfservicews/ws/tx/findinstitutions")
        .then(response => {
          this.insitutionData = response;
        })
        .catch(error => console.log(error));
    },
    handleSelected(tr) {
      console.log(tr);
    },
    showPopup(data) {
      this.editData = {
        fullName: data.name,
        instCode: data.code
      };
      this.popupActive = true;
    },
    updateInstitution() {
      const payload = {
        code: this.editData.instCode,
        fieldName: "institutionName",
        fieldNewValue: this.editData.fullName
      };
      API.put("selfservicews/ws/tx/editinstitution", payload)
        .then(response => {
          console.log(response);
          window.location.reload();
        })
        .catch(error => cnsole.log(error));
    },
    deleteInstitution(code) {
      API.post("selfservicews/ws/tx/deleteinstitution", {
        code: code
      })
        .then(response => {
          console.log(response);
          window.location.reload();
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.fetchInstitutions();
  }
};
</script>