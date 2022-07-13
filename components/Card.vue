<template>
  <li
    class="relative w-32 h-48 overflow-hidden shadow-lg rounded-xl shrink-0 snap-center shadow-black"
  >
    <NuxtLink :to="`/shows/${show.id}`">
      <IconUnavailable
        v-if="!show.image"
        class="object-cover w-full h-full rounded"
      />
      <img
        v-else
        :src="show.image.medium"
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
