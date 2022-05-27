<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1 class="text-center imperial-script">Welcome to Rade's Restaurant</h1>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <router-link to="/home"
        ><q-img width="100%" src="../assets/logo.png"></q-img
      ></router-link>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<style scoped></style>
