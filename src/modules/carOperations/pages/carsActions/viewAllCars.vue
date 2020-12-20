<template>
  <v-app class="bg">
    <v-container>
      <v-card
        class="mx-auto mt-5 pa-3"
        max-width="100%"
        id="limited-products"
        :style="'border: 0px solid #D50000;'"
      >
        <v-data-table
          :headers="tableHeaders"
          :items="loadedCarsGetter"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template #[`item.actions`]="{ item }">
            <v-btn icon @click="edit(item.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="delete(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <!-- pagination -->
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
          <v-text-field
            :value="itemsPerPage"
            label="Items per page"
            type="number"
            min="-1"
            max="15"
            @input="itemsPerPage = parseInt($event, 10)"
            class="pl-7 pr-7"
          ></v-text-field>
        </div>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ActionsTypes from "../../store/types/actions-types";
import GettersTypes from "../../store/types/getters-types";

export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,


      desserts: [
        {
          name: "Frozen Yogurt",
          price: 159,
          numberofseats: 6.0,
          date: 24,
          sellingprice: 4.0,
          Thebuyername: "1%",
        },
        {
          name: "Frozen Yogurt",
          price: 159,
          numberofseats: 6.0,
          date: 24,
          sellingprice: 4.0,
          Thebuyername: "1%",
        },
        {
          name: "Frozen Yogurt",
          price: 159,
          numberofseats: 6.0,
          date: 24,
          sellingprice: 4.0,
          Thebuyername: "1%",
        },
      ],
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      loadedCarsGetter: GettersTypes.GET_CAR_FORM_GETTER,
      tableHeaders: GettersTypes.GET_HEADERS_TABLE_GETTER,
    }),
  },
  mounted() {
    // this.loadedCarsGetter();
  },
  methods:{
    ...mapActions({
      editcardispatcher: ActionsTypes.EDIT_CAR_ACTION
    }),
    edit(){
      this.editcardispatcher({
        
      })
    }
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EeLcDeT-ydxW_QwDPBL2o5Q18PwvJBITVg&usqp=CAU")
    no-repeat center center;
  background-size: cover;
  transform: scale(1);
}
</style>
