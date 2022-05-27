<script setup lang="ts">
import NavBarVue from 'src/layouts/NavBar.vue';
import FooterBarVue from 'src/layouts/FooterBar.vue';
import MenuItemDetailsVue from 'src/components/MenuItemDetails.vue';
import { MenuList } from 'app/menu';

const lunchMenu = MenuList.slice(8, 12);
</script>

<template>
  <nav-bar-vue></nav-bar-vue>
  <menu-item-details-vue
    v-for="item in lunchMenu"
    :foodItem="item"
    :key="item.id"
  ></menu-item-details-vue>
  <footer-bar-vue></footer-bar-vue>
</template>
