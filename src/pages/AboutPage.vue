<script setup lang="ts">
import NavBarVue from 'src/layouts/NavBar.vue';
import FooterBarVue from 'src/layouts/FooterBar.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <nav-bar-vue></nav-bar-vue>
    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col absolute-center">
            <q-card>
              <q-card-section>
                <q-video src="https://youtu.be/nBRYO8Ys-6c"></q-video>
              </q-card-section>
              <q-card-section>
                <div class="text-h4 imperial-script text-center">
                  A Message From The Owner
                </div>
                <div class="text-h6 inria-serif text-center">
                  What Is Rade's Restaurant?
                </div>
              </q-card-section>
              <q-card-section class="gt-xs">
                <p class="inria-serif text-center">
                  Rade's is the abbreviation of my kids' names and is a new
                  family run restaurant. We function in traditional
                  Ethiopian-Eritrean, Middle Eastern and Italian Cuisine and
                  offer a friendly, traditional, African environment. We offer
                  Habesha traditional coffee and our food is made from scratch
                  using all fresh and natural ingredients-with no pork products
                  used. You will find handmade white and whole wheat bread and
                  injera made with teff flour-all made in a stove oven!
                  <br /><br />We offer indoor and outdoor dining, as well as
                  take-out options and there is free parking on site. We are
                  open 7 days a week, hours are: Monday-Thursday 10am-10pm,
                  Friday-Sunday 10am-Midnight
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
    <q-footer elevated class="bg-white">
      <footer-bar-vue></footer-bar-vue>
    </q-footer>
  </q-layout>
</template>
