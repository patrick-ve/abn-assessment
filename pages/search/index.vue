<template>
  <section class="pt-16">
    <ShowSearchInput
      @searchQueryProvided="fetchShows"
      @searchQueryEmptied="emptySearchResults"
    />
    <ShowSearchResults
      :apiCallCompleted="apiCallCompleted"
      :showsFetchedFromApi="showsFetchedFromApi"
    />
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
