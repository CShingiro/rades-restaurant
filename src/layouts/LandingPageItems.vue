<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h3 class="text-center imperial-script">Welcome to Rade's Restaurant</h3>
  <div class="row gt-xs">
    <div class="col-4"></div>
    <div class="col-4">
      <router-link to="/home">
        <transition-group
          appear
          enter-active-class="animated bounceInUp delay-3s slower"
          leave-active-class="animated fadeOut"
        >
          <q-img
            key="image"
            width="100%"
            src="/Images/logo.png"
            alt="Rade's Restaurant Logo"
          >
            <div key="box" class="absolute-bottom text-center imperial-script">
              <h4 key="text">Enter Here</h4>
            </div>
          </q-img>
        </transition-group>
      </router-link>
    </div>
    <div class="col-4"></div>
  </div>
  <div class="row lt-sm">
    <div class="col">
      <router-link to="/home">
        <transition-group
          appear
          enter-active-class="animated bounceInUp delay-3s slower"
          leave-active-class="animated fadeOut"
        >
          <q-img
            key="image"
            width="100%"
            src="/Images/logo.png"
            alt="Rade's Restaurant Logo"
          >
            <div key="box" class="absolute-bottom text-center imperial-script">
              Enter Here
            </div>
          </q-img>
        </transition-group>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.slide-up-enter-active {
  transition: opacity translateY(10px) 2s ease;
}
</style>
