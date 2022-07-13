<template>
  <section class="mt-16">
    <Carousel
      v-for="(showsByGenre, index) in showsSortedByGenre"
      :key="`show-carousel-${index}`"
      :shows="showsByGenre.shows"
      :genre="showsByGenre.genre"
    />
    <Carousel :shows="showsSortedByRating" :genre="'Best Rated'" />
  </section>
</template>

<script setup>
import { useFetchAllShows } from '@/composables/useFetchAllShows.js';
import { useGroupByGenre } from '@/composables/useGroupByGenre.js';
import { useSortByRating } from '@/composables/useSortByRating.js';

const shows = await useFetchAllShows();
const showsSortedByGenre = await useGroupByGenre(shows);
const showsSortedByRating = useSortByRating(shows);
</script>
