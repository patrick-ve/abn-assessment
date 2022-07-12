<template>
  <li
    class="relative overflow-hidden shadow-lg rounded-xl shrink-0 snap-center w-72 h-96"
  >
    <NuxtLink :to="`/shows/${show.id}`">
      <img
        :src="show.image.original"
        :alt="`TV show image of ${show.name}`"
        class="object-cover w-full h-full rounded"
      />
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Object,
    required: true,
  },
});
</script>
