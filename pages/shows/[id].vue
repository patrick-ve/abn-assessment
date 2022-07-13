<template>
  <section class="relative w-screen">
    <div class="w-full h-[60vh] overflow-hidden shadow-2xl rounded-b-[150px]">
      <img
        class="object-cover w-full h-full"
        :src="show.image.original"
        :alt="`Image cover of ${show.name}`"
      />
    </div>
    <button
      class="absolute w-24 h-24 top-[50vh] left-[37.5%] text-red-500 bg-white rounded-full shadow-2xl"
    >
      <IconPlay />
    </button>
    <h1>{{ show.name }}</h1>
    <ul>
      <li
        v-for="(genre, index) in show.genres"
        :key="`genre-${index}-${show.name}`"
      >
        <span>{{ genre }}</span>
      </li>
    </ul>
    <span>RATING</span>
    <ul>
      <li v-for="(property, index) in properties" :key="index">
        {{ property.key }} - {{ show[property.value] }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const route = useRoute();
const { data: show } = await useFetch(
  `https://api.tvmaze.com/shows/${route.params.id}`
);

const properties = [
  {
    key: 'Year',
    value: 'year',
  },
  { key: 'Language', value: 'language' },
  { key: 'Length', value: 'averageRuntime' },
];
</script>

<style scoped>
.image {
  border-radius: 0 0 50px 50px;
}
</style>
