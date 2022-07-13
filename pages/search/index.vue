<template>
  <section class="pt-16">
    <ShowSearchInput
      @searchQueryProvided="fetchShows"
      @searchQueryEmptied="emptySearchResults"
      v-autofocus
    />
    <div v-if="apiCallCompleted && showsFetchedFromApi.length > 0">
      <h2 class="pl-4 mb-2 font-extrabold">
        Results ({{ showsFetchedFromApi.length }})
      </h2>
      <ul class="grid grid-cols-2 gap-4 p-4 pt-0">
        <!-- TODO: Make card height and width dynamic -->
        <Card
          v-for="item in showsFetchedFromApi"
          :key="item.show.id"
          :show="item.show"
          class="w-full h-full mb-2"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
/*
  Imports
*/
import { ref } from 'vue';

/*
  Refs
*/
const apiCallCompleted = ref(false);
const showsFetchedFromApi = ref([]);

/*
  Methods
*/
const fetchShows = async (query) => {
  const { data: shows } = await useFetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  showsFetchedFromApi.value = shows.value;
  apiCallCompleted.value = true;
};

const emptySearchResults = () => {
  showsFetchedFromApi.value = [];
  apiCallCompleted.value = false;
};
</script>
