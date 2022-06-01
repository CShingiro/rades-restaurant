<script setup lang="ts">
import NavBarVue from 'src/layouts/NavBar.vue';
import MenuItemDetailsVue from 'src/components/MenuItemDetails.vue';
import { BreakFastMenuList } from 'app/menu';
import FooterBarVue from 'src/layouts/FooterBar.vue';

const breakFastMenu = BreakFastMenuList;
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <nav-bar-vue></nav-bar-vue>
    <q-page-container>
      <q-page>
        <h3 class="imperial-script text-center">Breakfast</h3>
        <menu-item-details-vue
          v-for="item in breakFastMenu"
          :foodItem="item"
          :key="item.id"
        ></menu-item-details-vue>
      </q-page>
    </q-page-container>
    <q-footer elevated class="bg-white">
      <footer-bar-vue></footer-bar-vue>
    </q-footer>
  </q-layout>
</template>
