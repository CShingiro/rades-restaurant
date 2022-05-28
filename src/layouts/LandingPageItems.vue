<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1 class="text-center imperial-script gt-xs">
    Welcome to Rade's Restaurant
  </h1>
  <h3 class="text-center imperial-script lt-sm">
    Welcome to Rade's Restaurant
  </h3>
  <div class="row gt-xs">
    <div class="col-3"></div>
    <div class="col-6">
      <router-link to="/home"
        ><q-img
          width="100%"
          src="/Images/logo.png"
          alt="Rade's Restaurant Logo"
        ></q-img
      ></router-link>
    </div>
    <div class="col-3"></div>
  </div>
  <div class="row lt-sm">
    <div class="col">
      <router-link to="/home"
        ><q-img
          width="100%"
          src="/Images/logo.png"
          alt="Rade's Restaurant Logo"
        ></q-img
      ></router-link>
    </div>
  </div>
</template>

<style scoped>
.slide-up-enter-active {
  transition: opacity translateY(10px) 2s ease;
}
</style>
