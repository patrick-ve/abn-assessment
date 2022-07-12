<template>
  <section class="pt-16">
    <Input @apiCallComplete="showSearchResults" />
    <div v-if="apiCallCompleted && showsFetchedFromApi.length > 0">
      <h2 class="pl-4 mb-2 font-extrabold">Results</h2>
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
