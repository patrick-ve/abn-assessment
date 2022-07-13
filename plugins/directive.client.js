export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('auto-focus', {
    mounted(el) {
      el.focus();
    },
  });
});
