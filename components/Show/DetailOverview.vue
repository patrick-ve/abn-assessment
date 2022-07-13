<template>
  <section class="relative w-screen">
    <IconLoading v-if="pending" />
    <div v-else>
      <div
        class="w-full h-[75vh] md:h-[50vh] md:rounded-b-[250px] overflow-hidden shadow-2xl rounded-b-[150px]"
      >
        <img
          class="object-cover w-full h-full shadow-2xl"
          :src="show.image.original"
          :alt="`Image cover of ${show.name}`"
        />
      </div>
      <nuxt-link
        :to="show.url"
        class="absolute w-24 h-24 top-[67.5vh] left-[37.5%] text-[red] bg-white rounded-full shadow-2xl md:top-[45vh] md:left-[46.5%]"
      >
        <IconPlay />
      </nuxt-link>
      <div class="p-4 md:p-10">
        <span class="flex justify-between">
          <IconPlus />
          <IconShare />
        </span>
      </div>
      <h1
        class="px-4 mb-2 text-2xl font-bold text-center uppercase md:text-5xl"
      >
        {{ show.name }}
      </h1>
      <div
        class="block mx-auto mb-2 text-center text-gray-500 flew-row md:text-xl"
      >
        <span
          v-for="(genre, index) in show.genres"
          :key="`genre-${index}-${show.name}`"
        >
          <span>{{ genreFormattedWithComma(index) }} </span>
        </span>
      </div>
      <div class="px-4 mx-auto text-3xl font-bold text-center md:text-4xl">
        <span v-if="rating"
          >{{ rating }} <span class="text-lg text-[red]">/ 10</span></span
        >
        <span v-else class="text-sm text-gray-500">No rating</span>
      </div>
      <ul class="flex justify-between px-16 py-2 md:px-48 lg:px-96">
        <li
          v-for="(property, index) in properties"
          :key="index"
          class="flex flex-col items-center"
        >
          <span class="text-xs text-gray-500">{{ property.key }}</span>
          <span class="text-sm font-semibold">{{ property.value }}</span>
        </li>
      </ul>
      <main
        class="p-4 py-2 text-justify text-gray-500 md:px-24 md:text-xl lg:px-96"
        v-html="show.summary"
      ></main>
    </div>
  </section>
</template>

<script setup>
/*
  Router and useFetch
*/
const route = useRoute();
const { data: show, pending } = await useFetch(
  `https://api.tvmaze.com/shows/${route.params.id}`
);

console.log(show.value);
/*
  Properties
*/
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
  }
};

const rating = show.value.rating.average;
</script>
