<template>
  <div class="relative">
    <div class="relative z-20 w-screen h-full min-h-screen bg-white">
      <Header />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style>
/* "page" is hardcoded in nuxt3 page transitions atm */
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
