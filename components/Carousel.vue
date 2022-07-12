<template>
  <section class="mt-16">
    <h2 class="px-4 mb-2 text-lg">{{ showsByGenre.genre }}</h2>
    <ul
      class="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-6 before:w-[30vw] after:w-[30vw] after:shrink-0"
    >
      <Card
        v-for="(show, index) in showsByGenre.shows"
        :key="`${index}`"
        :show="show"
      />
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  showsByGenre: {
    type: Object,
    required: true,
  },
});
</script>
