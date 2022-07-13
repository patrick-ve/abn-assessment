<template>
  <div class="relative">
    <div
      class="relative z-20 w-screen h-full min-h-screen bg-white md:px-32 lg:px-36"
    >
      <NavBarHeader />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style>
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
