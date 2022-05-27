<template>
  <div class="q-pa-md">
    <q-toolbar
      class="bg-white text-black shadow-2 transparent rounded-borders imperial-script"
      :class="classType"
    >
      <router-link to="/home">
        <q-avatar size="70px">
          <img src="~assets/logo.png" size="30px" />
        </q-avatar>
      </router-link>
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-btn no-caps size="30px" stretch flat label="Home" to="/home" />
      <q-tabs v-model="tab" shrink>
        <q-btn-dropdown no-caps size="30px" name="menu" label="Menu">
          <q-list>
            <q-item clickable v-close-popup to="/menu/breakfast">
              <q-item-section>
                <q-item-label class="imperial-script"
                  ><h5>Breakfast</h5></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="/menu/lunch">
              <q-item-section>
                <q-item-label size="30px" class="imperial-script"
                  ><h5>Lunch</h5></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="/menu/dinner">
              <q-item-section>
                <q-item-label size="30px" class="imperial-script"
                  ><h5>Dinner</h5></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="/menu/snacks">
              <q-item-section>
                <q-item-label size="30px" class="imperial-script"
                  ><h5>Snacks</h5></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn no-caps size="30px" stretch flat label="About" to="/about" />
        <q-btn no-caps size="30px" stretch flat label="Contact" to="/contact" />
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const tab = ref('');

const props = defineProps<{
  classType?: string;
}>();

props.classType;
</script>
