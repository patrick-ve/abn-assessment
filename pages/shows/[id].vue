<template>
  <section class="relative w-screen">
    <div class="w-full h-[75vh] overflow-hidden shadow-2xl rounded-b-[150px]">
      <img
        class="object-cover w-full h-full shadow-2xl"
        :src="show.image.original"
        :alt="`Image cover of ${show.name}`"
      />
    </div>
    <button
      class="absolute w-24 h-24 top-[67.5vh] left-[37.5%] text-red-500 bg-white rounded-full shadow-2xl"
    >
      <IconPlay />
    </button>
    <div class="p-4">
      <span class="flex justify-between">
        <IconPlus />
        <IconShare />
      </span>
    </div>
    <h1 class="px-4 text-2xl font-bold text-center uppercase">
      {{ show.name }}
    </h1>
    <div class="block mx-auto text-center text-gray-500 flew-row">
      <span
        v-for="(genre, index) in show.genres"
        :key="`genre-${index}-${show.name}`"
      >
        <span>{{ genreFormattedWithComma(index) }} </span>
      </span>
    </div>
    <!-- <span>RATING</span> -->
    <ul>
      <li v-for="(property, index) in properties" :key="index">
        {{ property.key }} - {{ property.value }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const route = useRoute();
const { data: show } = await useFetch(
  `https://api.tvmaze.com/shows/${route.params.id}`
);

console.log(show.value);

const properties = [
  {
    key: 'Year',
    value: show.value.premiered.split('-')[0],
  },
  { key: 'Language', value: show.value.language },
  { key: 'Length', value: `${show.value.averageRuntime} min` },
];

const genreFormattedWithComma = (index) => {
  if (index !== show.value.genres.length - 1) {
    return `${show.value.genres[index]}, `;
  } else {
    return show.value.genres[index];
  }
};
</script>
