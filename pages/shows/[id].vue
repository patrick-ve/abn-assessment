<template>
  <section class="w-screen">
    <div class="w-full h-[60vh] overflow-hidden shadow-2xl rounded-b-[150px]">
      <img
        class="object-cover w-full h-full"
        :src="show.image.original"
        :alt="`Image cover of ${show.name}`"
      />
    </div>
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
