<template>
  <li
    class="relative w-full h-full overflow-hidden shadow-lg rounded-xl shrink-0 snap-center shadow-black"
  >
    <NuxtLink :to="`/shows/${show.id}`">
      <div
        v-if="!show.image"
        class="flex flex-col items-center justify-center object-cover w-full h-full text-gray-500 bg-black rounded"
      >
        <IconUnavailable />
        <span>No preview available</span>
      </div>
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
