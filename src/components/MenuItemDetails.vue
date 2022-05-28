<script setup lang="ts">
import { FoodItem } from 'types';
import { ref } from 'vue';
const props = defineProps<{
  foodItem: FoodItem;
}>();
props.foodItem;

const details = ref(false);
</script>

<template>
  <div class="q-pa-md row inline q-gutter-md">
    <div class="col-12">
      <q-card>
        <q-img :src="`/Images/${foodItem.src}`" :alt="foodItem.name"> </q-img>
        <q-toggle v-model="details" label="See Details">
          <q-slide-transition :duration="1500" :appear="true">
            <div v-show="details">
              <q-card-section horizontal>
                {{ foodItem.description }}
                <h6 class="imperial-script">{{ foodItem.price }}</h6>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-toggle>
      </q-card>
    </div>
  </div>
</template>
