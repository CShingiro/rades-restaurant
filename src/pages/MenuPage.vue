<script setup lang="ts">
import NavBarVue from 'src/layouts/NavBar.vue';
import FooterBarVue from 'src/layouts/FooterBar.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav-bar-vue></nav-bar-vue>
  <div class="row">
    <div class="col-6">
      <router-link to="/menu/breakfast">
        <q-img src="~assets/HummusFoul.jpeg"> Breakfast </q-img>
      </router-link>
    </div>
    <div class="col-6">
      <router-link to="/menu/lunch">
        <q-img src="~assets/PizzaAlfredo.jpeg"> Lunch </q-img>
      </router-link>
    </div>
    <div class="col-6">
      <router-link to="/menu/dinner">
        <q-img src="~assets/VegiHabesha.jpeg"> Dinner </q-img>
      </router-link>
    </div>
    <div class="col-6">
      <router-link to="/menu/dinner">
        <q-img src="~assets/VegiHabesha.jpeg"> Snacks </q-img>
      </router-link>
    </div>
  </div>
  <footer-bar-vue></footer-bar-vue>
</template>

<style lang="sass" scoped></style>
