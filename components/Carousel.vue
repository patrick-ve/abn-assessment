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
        <img
          :src="show.image.original"
          :alt="show.name"
          class="object-cover w-full h-full rounded"
        />
        <button
          class="absolute px-4 py-2 text-white rounded shadow semibold inset-x-2 bottom-2 bg-primary shadow-primary"
        >
          Read the review of {{ show.name }}
        </button>
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
