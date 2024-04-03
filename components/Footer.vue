<template>
  <footer class="bg-main-dark pt-13.5 pb-21 pl-87 text-white">
    <IconsLogo class="w-33 h-15" color="white" />
    <nav class="flex mt-11">
      <ul class="w-104 flex-col gap-6 family-medium">
        <li>
          <NuxtLink class="text" to="/">Whitepaper</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="/">Privacy Policy</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="/">Collection Statement</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="/">Support</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="/">Acceptable Use Policy</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="/">$NEX Token T&Cs</NuxtLink>
        </li>
      </ul>
      <ul class="flex-col gap-6 family-medium">
        <li>
          <NuxtLink class="text" to="/">About us</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="/">Careers</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text" to="/">Media</NuxtLink>
        </li>
        <li>
          <ul flex items-center gap-7.5>
            <li>
              <NuxtLink to="/" class="icon">
                <IconsDiscord class="size-7" color="black" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="icon">
                <IconsTwitter class="size-7" color="black" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="icon">
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