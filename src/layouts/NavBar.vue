<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const tab = ref('');

const drawerRight = ref(false)


</script>

<template>
  <div class="q-pa-md">
    <q-header class="bg-white">
    <q-toolbar class="lt-sm">
      <router-link to="/home">
        <q-avatar size="70px">
          <img
            src="/Images/logo.png"
            size="30px"
            alt="Rade's Restaurant Logo"
          />
        </q-avatar>
      </router-link>
      <q-space>
      </q-space>
      <q-btn color="brown-8" flat @click="drawerRight = !drawerRight" round dense icon="menu" />
    </q-toolbar>
    <q-toolbar
      class="bg-white text-black shadow-2 transparent rounded-borders imperial-script gt-xs"
    >
      <router-link to="/home">
        <q-avatar size="70px">
          <img
            src="/Images/logo.png"
            size="30px"
            alt="Rade's Restaurant Logo"
          />
        </q-avatar>
      </router-link>
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-btn no-caps class="text-h4" stretch flat label="Home" to="/home" />
      <q-tabs v-model="tab" shrink>
        <q-btn-dropdown no-caps class="text-h4" name="menu" label="Menu">
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
                <q-item-label class="imperial-script"
                  ><h5>Lunch</h5></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="/menu/dinner">
              <q-item-section>
                <q-item-label class="imperial-script"
                  ><h5>Dinner</h5></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="/menu/snacks">
              <q-item-section>
                <q-item-label class="imperial-script"
                  ><h5>Snacks</h5></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn no-caps class="text-h4" stretch flat label="About" to="/about" />
        <q-btn
          no-caps
          class="text-h4"
          stretch
          flat
          label="Contact"
          to="/contact"
        />
      </q-tabs>
    </q-toolbar>
    </q-header>
    <q-drawer
          side="right"
          v-model="drawerRight"
          show-if-above
          elevated
          :width="100"
          class="bg-white transparent imperial-script lt-sm"
        >
          <q-scroll-area class="fit">
            <div class="q-pa-xs">
              <q-btn no-caps to="/home">Home</q-btn>
              <q-btn no-caps to="/menu/breakfast">Breakfast</q-btn>
              <q-btn no-caps to="/menu/lunch">Lunch</q-btn>
              <q-btn no-caps to="/menu/dinner">Dinner</q-btn>
              <q-btn no-caps to="/menu/snacks">Snacks</q-btn>
              <q-btn no-caps to="/about">About</q-btn>
              <q-btn no-caps to="/contact">Contact</q-btn>
            </div>
          </q-scroll-area>
        </q-drawer>
  </div>
</template>
