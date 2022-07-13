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
      class="absolute w-24 h-24 top-[67.5vh] left-[37.5%] text-[red] bg-white rounded-full shadow-2xl"
    >
      <IconPlay />
    </button>
    <div class="p-4">
      <span class="flex justify-between">
        <IconPlus />
        <IconShare />
      </span>
    </div>
    <h1 class="px-4 mb-2 text-2xl font-bold text-center uppercase">
      {{ show.name }}
    </h1>
    <div class="block mx-auto mb-2 text-center text-gray-500 flew-row">
      <span
        v-for="(genre, index) in show.genres"
        :key="`genre-${index}-${show.name}`"
      >
        <span>{{ genreFormattedWithComma(index) }} </span>
      </span>
    </div>
    <div class="px-4 mx-auto text-3xl font-bold text-center">
      <span v-if="rating"
        >{{ rating }} <span class="text-lg text-[red]">/ 10</span></span
      >
      <span v-else class="text-sm text-gray-500">No rating</span>
    </div>
    <ul class="flex justify-between px-16 py-2">
      <li
        v-for="(property, index) in properties"
        :key="index"
        class="flex flex-col items-center"
      >
        <span class="text-xs text-gray-500">{{ property.key }}</span>
        <span class="text-sm font-semibold">{{ property.value }}</span>
      </li>
    </ul>
    <div
      class="p-4 py-2 text-justify text-gray-500"
      v-html="show.summary"
    ></div>
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

const rating = show.value.rating.average;

const starStyling = {
  fullStarColor: 'red',
  emptyStarColor: '#000',
  starWidth: 30,
  starHeight: 30,
};
</script>
