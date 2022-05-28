<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import FooterBarVue from 'src/layouts/FooterBar.vue';

const drawerRightHome = ref(false);

const tab = ref('');
</script>

<template>
  <q-img
    src="/Images/HomePageImage.jpeg"
    height="57%"
    width="100%"
    alt="Habesha Stale"
    fetchpriority="high"
    class="gt-xs"
  >
    <div class="q-pa-md absolute-top">
      <q-toolbar
        class="bg-white text-white shadow-2 transparent rounded-borders imperial-script"
      >
        <router-link to="/home">
          <q-avatar color="grey-1" size="70px">
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
          <q-btn
            no-caps
            class="text-h4"
            stretch
            flat
            label="About"
            to="/about"
          />
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
    </div>
  </q-img>
  <q-layout view="hHh lpR fFf" class="lt-sm">
    <q-header class="bg-white">
      <q-toolbar
        class="bg-white text-white shadow-2 transparent rounded-borders imperial-script"
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
        <q-space> </q-space>
        <q-btn
          color="brown-8"
          flat
          @click="drawerRightHome = !drawerRightHome"
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-drawer
          v-model="drawerRightHome"
          side="right"
          show-if-above
          elevated
          :width="100"
          class="bg-white transparent imperial-script"
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
        <div class="q-pa-xs">
          <div class="row">
            <div class="col">
              <q-img width="100%" src="/Images/HomePageImage.jpeg">
                <div class="absolute-center imperial-script">
                  Welcome To Rade's Restaurant
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
    <q-footer elevated class="bg-white">
      <footer-bar-vue></footer-bar-vue>
    </q-footer>
  </q-layout>
</template>

<style lang="sass" scoped></style>
