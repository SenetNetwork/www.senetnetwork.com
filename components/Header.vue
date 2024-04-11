<template>
  <header class="w-full overflow-hidden px-8  md-px-25 sm-px-15 px-0 py-4  flex items-center">
    <NuxtLink to="/" class="shrink-0">
      <h1 class="w-43">
        <IconsLogo class="size-full" color="black" />
      </h1>
    </NuxtLink>

    <div class="grow-1 shrink-1" />
    <NuxtLink v-if="$route.path === '/'" to="/download" class="shrink-0">
      <button class="button-primary flex-center gap-3 !px-6">
        <img class="w-5" src="@img/logo.png" alt="">
        <span>
          Download
        </span>
      </button>
    </NuxtLink>
  </header>
</template>

<style scoped>
li a {
  /* cursor: pointer; */
  position: relative;
}

li a::after {
  width: 0;
  transition: width .3s;
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  height: 1px;
  background-color: black;
}

li a:hover::after {
  width: 100%;
}
</style>
