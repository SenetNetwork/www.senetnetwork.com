<template>
  <footer class="bg-main-dark pt-13.5 pb-21 pl-8 text-white" md="px-25">
    <IconsLogo class="w-33 h-15" color="white" />
    <nav class="flex flex-col gap-6 mt-11" sm="flex-row">
      <ul v-for="menu,index in navs" :key="index" class="flex-col gap-6 family-medium" sm="w-60" md="w-104 text-5">
        <li v-for="item in menu" :key="item.label">
          <p v-if="item.disabled" class="text-white">
            {{ item.label }}
          </p>
          <NuxtLink v-else class="relative text-white" :to="item.route" target="_blank">
            {{ item.label }}
          </NuxtLink>
        </li>
        <ul v-if="index === navs.length - 1" flex items-center gap-7.5>
          <li>
            <NuxtLink to="https://discord.gg/HSFpUsxUN8" target="_blank" class="flex-center size-10 bg-white rounded-full">
              <IconsDiscord class="size-7" color="black" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://twitter.com/SenetNetwork" target="_blank" class="flex-center size-10 bg-white rounded-full">
              <IconsTwitter class="size-7" color="black" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://senetnetwork.medium.com/" target="_blank" class="flex-center size-10 bg-white rounded-full">
              <IconsMedium class="size-7" color="black" />
            </NuxtLink>
          </li>
        </ul>
      </ul>
    </nav>
  </footer>
</template>

<script setup lang='ts'>
const navs = [
  [
    { label: 'Whitepaper', route: 'https://senet.wiki' },
    { label: 'Privacy Policy', route: '', disabled: true },
    { label: 'Buy Gamimg Tokens', route: '', disabled: true },
    { label: 'Support', route: '', disabled: true }
  ],
  [
    { label: 'About us', route: '', disabled: true },
    { label: 'Careers', route: '', disabled: true },
    { label: 'Media', route: '', disabled: true }
  ]
]
</script>
<style scoped>

li a::after {
  @apply w-0 h-1px transition-width-300 content-empty absolute left-50% bottom--2px bg-white translate-x--50%;
}

li a:hover::after {
  @apply w-full;
}
</style>
