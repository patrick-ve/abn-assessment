<template>
  <section class="flex flex-col m-auto">
    <h1
      class="flex pt-4 pb-2 pl-4 text-4xl font-bold text-white lg:px-20 md:px-10 lg:mx-40 md:mx-20"
    >
      {{ showsSortedByGenre[0].genre }}
    </h1>
    <div class="flex pb-10 pl-4 overflow-x-scroll hide-scroll-bar">
      <div class="flex flex-nowrap lg:ml-40 md:ml-20">
        <article
          v-for="show in showsSortedByGenre[0].shows"
          :key="show.slug"
          class="inline-block pr-5"
        >
          <nuxt-link
            class="relative block max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out shadow-md rounded-2xl h-96 w-72 hover:shadow-xl"
            :to="`/shows/${show.id}`"
          >
            <div
              class="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black bg-opacity-10"
            >
              <h2
                class="absolute top-auto text-xl text-white font-fraunces bottom-4 left-4"
              >
                {{ show.title }}
              </h2>
            </div>
            <img
              :src="show.image.original"
              :alt="`Image of show for ${show.title}`"
              class="relative z-10 object-cover w-full h-full"
            />
          </nuxt-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFetchAllShows } from "@/composables/useFetchAllShows.js";
import { useGroupByGenre } from "@/composables/useGroupByGenre.js";
import { useSortByRating } from "@/composables/useSortByRating.js";

const shows = await useFetchAllShows();
const showsSortedByGenre = await useGroupByGenre(shows);
const showsSortedByRating = useSortByRating(shows);
console.log(shows);
console.log(showsSortedByGenre);
console.log(showsSortedByRating);
</script>
