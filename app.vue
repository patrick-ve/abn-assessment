<template>
  <div>
    <h1 class="text-8xl mt-8">Tailwind</h1>
  </div>
</template>

<script setup>
import { useGetShowList } from "@/composables/useGetAllShows.js";
import { useGroupByGenre } from "@/composables/useGroupByGenre.js";

onMounted(async () => {
  const shows = await useGetShowList();
  const showsByGenre = await useGroupByGenre(shows);
  console.log(shows);
  console.log(showsByGenre);
});
</script>
