<script setup lang="ts">
import NavBarVue from 'src/layouts/NavBar.vue';
import FooterBarVue from 'src/layouts/FooterBar.vue';
import MenuItemDetailsVue from 'src/components/MenuItemDetails.vue';
import { MenuList } from 'app/menu';

const breakFastMenu = MenuList.slice(0, 8);
</script>

<template>
  <nav-bar-vue></nav-bar-vue>
  <menu-item-details-vue
    v-for="item in breakFastMenu"
    :foodItem="item"
    :key="item.id"
  ></menu-item-details-vue>
  <footer-bar-vue></footer-bar-vue>
</template>
