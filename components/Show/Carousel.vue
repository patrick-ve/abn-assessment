<template>
  <section>
    <h2 class="px-4 mb-2 text-lg font-bold">{{ genre }}</h2>
    <ul
      class="flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll pb-6 before:w-[30vw] after:w-[30vw] after:shrink-0"
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
ul {
  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
}
ul::-webkit-scrollbar {
  height: 1rem;
  cursor: grab;
}
ul::-webkit-scrollbar-track {
  background: none;
}
ul::-webkit-scrollbar-thumb {
  border: 5px solid transparent;
  border-radius: 999px;
  background-color: red;
  background-clip: content-box;
}

@media (max-width: 376px) {
  ul::-webkit-scrollbar {
    height: 0;
  }
}
</style>
