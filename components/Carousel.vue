<template>
  <section>
    <h2 class="px-4 mb-2 text-2xl">{{ show.genre }}</h2>
    <ul
      class="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-6 before:w-[30vw] after:w-[30vw] after:shrink-0"
    >
      <li
        v-for="show in show.shows"
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
import { defineProps } from "vue";
import { useFetchAllShows } from "@/composables/useFetchAllShows.js";
import { useGroupByGenre } from "@/composables/useGroupByGenre.js";
import { useSortByRating } from "@/composables/useSortByRating.js";

const shows = await useFetchAllShows();
const showsSortedByGenre = await useGroupByGenre(shows);
const showsSortedByRating = useSortByRating(shows);

const props = defineProps({
  show: {
    type: Object,
    required: true,
  },
});
</script>
