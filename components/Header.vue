<template>
  <header class="absolute w-full overflow-hidden top-0 left-0 right-0 px-25 py-4 z-110 flex items-center gap-35">
    <h1>
      <NuxtLink to="/" class="w-43 h-15 shrink-0">
        <IconsLogo class="size-full" color="black" />
      </NuxtLink>
    </h1>
    <!--
    <nav class="grow-1">
      <ul class="flex items-center  gap-16">
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/airdrop"> Airdrop </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/invite"> Invite friends </NuxtLink>
        </li>
      </ul>
     </nav> 
    
    <button class="button-primary shrink-0" @click="login">Log In</button>  
  -->
  </header>
</template>

<script setup lang='ts'>
// const login = () => {
//   console.log('login');

// }
</script>
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