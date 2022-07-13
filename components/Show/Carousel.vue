<template>
  <section>
    <h2 class="px-4 mb-2 text-lg font-bold">{{ genre }}</h2>
    <ul
      class="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto lg:overflow-visible pb-6 before:w-[30vw] after:w-[30vw] after:shrink-0 container-snap"
    >
      <ShowCard
        v-for="(show, index) in shows"
        :key="`${show.id}-${index}`"
        :show="show"
      />
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  shows: {
    type: Object,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* TODO: Make scrollbar visible on desktop */
/* Hide scrollbar for Chrome, Safari and Opera */
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
