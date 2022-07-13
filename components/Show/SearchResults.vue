<template>
  <div v-if="apiCallCompleted && showsFetchedFromApi.length > 0">
    <h2 class="pl-4 mb-2 font-extrabold">
      Results ({{ showsFetchedFromApi.length }})
    </h2>
    <ul class="grid grid-cols-2 gap-4 p-4 pt-0">
      <!-- TODO: Make card height and width dynamic -->
      <ShowCard
        v-for="item in showsFetchedFromApi"
        :key="item.show.id"
        :show="item.show"
        class="w-full h-full mb-2"
      />
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  showsFetchedFromApi: {
    type: Array,
    default: [],
  },
  apiCallCompleted: {
    type: Boolean,
    default: false,
  },
});
</script>
