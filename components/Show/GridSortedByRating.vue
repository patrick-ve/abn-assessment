<template>
  <section class="mt-16">
    <h2 class="pl-4 mb-2 font-extrabold">Best Rated</h2>
    <ul class="grid grid-cols-2 gap-4 p-4 pt-0">
      <Card
        v-for="show in showsSortedByRating"
        :key="show.id"
        :show="show"
        class="w-full h-full mb-2"
      />
    </ul>
  </section>
</template>

<script setup>
import { useFetchAllShows } from '@/composables/useFetchAllShows.js';
import { useSortByRating } from '@/composables/useSortByRating.js';

const shows = await useFetchAllShows();
const showsSortedByRating = useSortByRating(shows);
</script>
