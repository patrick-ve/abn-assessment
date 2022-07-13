<template>
  <section class="mt-16">
    <ShowCarousel :shows="showsSortedByRating" :genre="'Best Rated'" />
    <ShowCarousel
      v-for="(showsByGenre, index) in showsSortedByGenre"
      :key="`show-carousel-${index}`"
      :shows="showsByGenre.shows"
      :genre="showsByGenre.genre"
    />
  </section>
</template>

<script setup>
/*
Imports
*/
import { useFetchAllShows } from '@/composables/useFetchAllShows.js';
import { useGroupByGenre } from '@/composables/useGroupByGenre.js';
import { useSortByRating } from '@/composables/useSortByRating.js';

/*
  Composables
*/
const shows = await useFetchAllShows();
const showsSortedByGenre = await useGroupByGenre(shows);
const showsSortedByRating = useSortByRating(shows);
</script>
