<template>
  <div class="relative">
    <div class="w-screen h-full min-h-screen bg-[#ccd5ae] z-20">
      <Header
        :profile-image-url="'https://avatars.githubusercontent.com/u/37079247?s=40&v=4'"
      />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
