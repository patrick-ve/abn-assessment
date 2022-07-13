import { onMounted } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('autofocus', {
    onMounted(el) {
      el.focus();
    },
  });
});
