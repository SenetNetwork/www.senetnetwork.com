<template>
  <footer class="bg-main-dark pt-13.5 pb-21 pl-8 text-white" md="px-25">
    <IconsLogo class="w-33 h-15" color="white" />
    <nav class="flex flex-col gap-6 mt-11" sm="flex-row">
      <ul class="flex-col gap-6 family-medium" sm="w-60" md="w-104">
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            Whitepaper
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            Privacy Policy
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            Collection Statement
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            Support
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            Acceptable Use Policy
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            $NEX Token T&Cs
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex-col gap-6 family-medium">
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            About us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            Careers
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="https://www.senetnetwork.com/">
            Media
          </NuxtLink>
        </li>
        <li>
          <ul flex items-center gap-7.5>
            <li>
              <NuxtLink to="https://discord.gg/HSFpUsxUN8" target="_blank" class="icon">
                <IconsDiscord class="size-7" color="black" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://twitter.com/SenetNetwork" target="_blank" class="icon">
                <IconsTwitter class="size-7" color="black" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://senetnetwork.medium.com/" target="_blank" class="icon">
                <IconsMedium class="size-7" color="black" />
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup lang='ts'>

</script>
<style scoped>
li .text {
  @apply text-white relative;
}

li .icon {
  @apply flex-center size-10 bg-white rounded-full;
}

li .text::after {
  @apply w-0 h-1px transition-width-300 content-empty absolute left-50% bottom--2px bg-white translate-x--50%;
}

li .text:hover::after {
  @apply w-full;
}
</style>
