<template>
  <header class="container flex items-center justify-between h-16 px-4 mx-auto">
    <div class="flex items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-white">
        <img :src="profileImageUrl" alt="logo" class="w-8 h-8 rounded-full" />
      </NuxtLink>
    </div>
    <div class="flex items-center">
      <NuxtLink to="/about" class="text-2xl font-bold text-white">
        About
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  profileImageUrl: {
    type: String,
    required: true,
  },
});
</script>
