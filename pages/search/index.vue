<template>
  <section class="pt-16">
    <Input @apiCallComplete="showSearchResults" />
    <div v-if="apiCallCompleted && showsFetchedFromApi.length > 0">
      <ul>
        <Card
          v-for="item in showsFetchedFromApi"
          :key="item.show.id"
          :show="item.show"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const apiCallCompleted = ref(false);
const showsFetchedFromApi = ref([]);

/*
  Methods
*/
const showSearchResults = (results) => {
  apiCallCompleted.value = true;
  showsFetchedFromApi.value = results;

  console.log(apiCallCompleted.value);
  console.log(showsFetchedFromApi.value);
};
</script>
