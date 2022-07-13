<template>
  <nav
    class="fixed top-0 left-0 z-30 flex items-center justify-between w-screen h-16 p-4 backdrop-blur-sm bg-white/30 lg:px-4"
  >
    <div>
      <transition name="fade" mode="out-in">
        <NavBarProfileImage v-if="$route.path === '/'" />
        <nuxt-link to="/" v-else>
          <IconPrevious />
        </nuxt-link>
      </transition>
    </div>
    <nuxt-link to="/">
      <NavBarLogo />
    </nuxt-link>
    <div class="w-6 h-6">
      <transition name="fade" mode="out-in">
        <nuxt-link to="/search" v-if="$route.path !== '/search'">
          <IconSearch class="w-full h-full" />
        </nuxt-link>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
