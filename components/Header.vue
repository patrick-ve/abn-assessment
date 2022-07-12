<template>
  <header
    class="w-screen h-16 flex justify-between items-center p-4 backdrop-blur-sm bg-white/30 fixed left-0 top-0 z-30"
  >
    <NavbarProfileImage />
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>
    <nuxt-link class="h-6 w-6" to="/search">
      <IconSearch class="w-full h-full" />
    </nuxt-link>
  </header>
</template>
