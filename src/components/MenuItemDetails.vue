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
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="col-3">
      <q-card>
        <q-img :src="foodItem.src" @click="details = !details"></q-img>
        <div v-if="details">
          <q-card-section horizontal>
            {{ foodItem.name }} - {{ foodItem.price }}
          </q-card-section>
          <q-card-section horizontal>
            {{ foodItem.description }}
          </q-card-section>
        </div>
      </q-card>
    </div>
  </div>
</template>
