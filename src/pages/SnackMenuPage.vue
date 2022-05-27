<script setup lang="ts">
import NavBarVue from 'src/layouts/NavBar.vue';
import FooterBarVue from 'src/layouts/FooterBar.vue';
import MenuItemDetailsVue from 'src/components/MenuItemDetails.vue';
import { MenuList } from 'app/menu';

const snackMenu = MenuList.slice(MenuList.length - 1);
</script>

<template>
  <nav-bar-vue></nav-bar-vue>
  <menu-item-details-vue
    v-for="item in snackMenu"
    :key="item.id"
    :src="item.src"
  ></menu-item-details-vue>
  <footer-bar-vue></footer-bar-vue>
</template>
