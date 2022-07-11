<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>

    <div class="message" v-if="formSubmitted">
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const formSubmitted = ref(false);
</script>
