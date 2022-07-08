<template>
  <section>
    <ul
      class="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-6 before:w-[30vw] after:w-[30vw] after:shrink-0"
    >
      <li
        v-for="show in showsSortedByGenre[0].shows"
        :key="show.id"
        class="relative overflow-hidden shadow-lg rounded-2xl shrink-0 snap-center w-72 h-96"
      >
        <NuxtLink :to="`/shows/${show.id}`">
          <img
            :src="show.image.original"
            :alt="`TV show image of ${show.name}`"
            class="object-cover w-full h-full rounded"
          />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useFetchAllShows } from "@/composables/useFetchAllShows.js";
import { useGroupByGenre } from "@/composables/useGroupByGenre.js";
import { useSortByRating } from "@/composables/useSortByRating.js";

const shows = await useFetchAllShows();
const showsSortedByGenre = await useGroupByGenre(shows);
const showsSortedByRating = useSortByRating(shows);
// console.log(shows);
// console.log(showsSortedByGenre);
// console.log(showsSortedByRating);
</script>
