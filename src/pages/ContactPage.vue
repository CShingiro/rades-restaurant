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
          <div class="col">
            <q-card class="absolute-center">
              <q-card-section>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.423034107974!2d-80.48598011800881!3d43.44747470487996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf5b129a31489%3A0x97a80c7f89c5a4da!2sRade&#39;s%20Restaurant!5e0!3m2!1sen!2sca!4v1653713064529!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  allowfullscreen="false"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </q-card-section>
              <q-card-section class="mobile-hide">
                <h4 class="inria-serif text-italic">Address:</h4>
                <div class="text-h5 inria-serif text-italic">
                  301 King Street East<br />
                  Kitchener, Ontario, N2G 2L3
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-h5 inria-serif text-italic">
                  Phone:
                  <a href="tel: 519-742-3166">519-742-3166</a>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-h5 inria-serif text-italic">
                  Email:
                  <a href="mailto: info@radesrestaurant.ca"
                    >info@radesrestaurant.ca</a
                  >
                </div>
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
