<template>
  <div>
    <h1 class="text-8xl mt-8">Tailwind</h1>
  </div>
</template>

<script setup>
import { useFetchAllShows } from "@/composables/useFetchAllShows.js";
import { useGroupByGenre } from "@/composables/useGroupByGenre.js";
import { useSortByRating } from "@/composables/useSortByRating.js";

onMounted(async () => {
  const shows = await useFetchAllShows();
  const showsSortedByGenre = await useGroupByGenre(shows);
  const showsSortedByRating = useSortByRating(shows);
  console.log(shows);
  console.log(showsSortedByGenre);
  console.log(showsSortedByRating);
});
</script>
