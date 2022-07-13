<template>
  <nuxt-layout>
    <NavBarHeader />
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
html,
body {
  scroll-behavior: smooth;
}

/* Page transition animations */
.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
