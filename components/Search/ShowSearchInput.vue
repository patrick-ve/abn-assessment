<template>
  <form class="p-4" @submit.prevent>
    <label
      for="search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <IconSearch class="w-5 h-5" />
      </div>
      <input
        type="search"
        name="search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search TV shows"
        required
        v-model="tvShowQuery"
      />
      <button
        v-if="!tvShowQuery"
        @click="emptyFormHandler"
        class="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
      >
        <IconCross class="w-5 h-5" />
      </button>
    </div>
  </form>
</template>

<script setup>
/*
  Imports
*/
import { ref, watch, defineEmits } from 'vue';
import { useDebouncedRef } from '@/composables/useDebouncedRef';

/*
  Refs
*/
const tvShowQuery = useDebouncedRef('', 400);
const shows = ref([]);

/*
  Watchers
*/
watch(tvShowQuery, async (newQuery) => {
  if (tvShowQuery.value === '') {
    emit('searchQueryEmptied');
  }

  await submitFormHandler(newQuery);
});

/*
  Emits
*/
const emit = defineEmits(['apiCallComplete', 'searchQueryEmptied']);

/*
  Form handlers
*/
const emptyFormHandler = () => {
  tvShowQuery.value = '';
};

const submitFormHandler = async (query) => {
  const { data, pending, error, refresh } = await useFetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  console.log(data.value, pending, error);
  emit('apiCallComplete', data.value);
  // router.push({
  //   name: 'shows',
  //   query: {
  //     search: tvShowQuery.value,
  //   },
  // });
};
</script>
