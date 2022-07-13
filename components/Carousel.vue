<template>
  <section>
    <h2 class="px-4 mb-2 text-lg font-semibold">{{ showsByGenre.genre }}</h2>
    <ul
      class="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-6 before:w-[30vw] after:w-[30vw] after:shrink-0 container-snap"
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

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
