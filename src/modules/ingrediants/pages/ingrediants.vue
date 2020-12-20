<template>
  <div style="width: 100%; height:100%;">
    <div
      style="display: flex; justify-content: center; align-itmes: center; width: 100%; height: 100%"
    >
      <div v-for="ing of ingrediantsGetter" :key="ing.id">
        <p>{{ ing.id }} || {{ ing.name }} || {{ ing.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ActionsTypes from '../store/types/actions-types';

export default {
  created() {},
  mounted() {
    this.createIngrediantDispatcher({
      name: "Rice bb bazalia",
      price: 2000,
    });
    this.getIngrediantsDispatcher();
  },
  methods: {
    ...mapActions({
      createIngrediantDispatcher: ActionsTypes.createNewIngredaint,
      getIngrediantsDispatcher: "getIngrediants",
    }),
  },
  computed: {
    ...mapGetters({
      ingrediantsGetter: "ingrediantsGetter",
    }),
  },
};
</script>

<style></style>
