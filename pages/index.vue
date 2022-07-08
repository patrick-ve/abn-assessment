<template>
  <Carousel
    v-for="(showsByGenre, index) in showsSortedByGenre"
    :key="`show-${index}`"
    :showsByGenre="showsByGenre"
  />
</template>

<script setup>
import { useFetchAllShows } from "@/composables/useFetchAllShows.js";
import { useGroupByGenre } from "@/composables/useGroupByGenre.js";
import { useSortByRating } from "@/composables/useSortByRating.js";

const shows = await useFetchAllShows();
const showsSortedByGenre = await useGroupByGenre(shows);
const showsSortedByRating = useSortByRating(shows);
</script>
