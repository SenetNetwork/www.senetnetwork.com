<template>
  <header class="header">
    <a class="header-logo" href="#">
      <img src="@/assets/images/logo.svg" />
    </a>
    <ul class="header-menu">
      <li :class="{ active: activeIndex === 1 }" @click="activeIndex = 1">
        <a href="#">
          <span>Home</span>
        </a>
      </li>
      <li :class="{ active: activeIndex === 2 }" @click="activeIndex = 2">
        <a href="#platform">
          <span>Platform</span>
        </a>
      </li>
      <li :class="{ active: activeIndex === 3 }" @click="activeIndex = 3">
        <a href="#ecosystem">
          <span>Ecosystem</span>
        </a>
      </li>
      <li :class="{ active: activeIndex === 4 }" @click="activeIndex = 4">
        <a href="#roadmap">
          <span>Roadmap</span>
        </a>
      </li>
      <li :class="{ active: activeIndex === 5 }" @click="activeIndex = 5">
        <a href="#about">
          <span>About</span>
        </a>
      </li>
    </ul>
    <button type="button" class="header-mobile-menu" @click="open">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 10a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 10a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 9a1 1 0 1 0 0 2h30a1 1 0 1 0 0-2H5Z"
          fill="#1A1A1A"
        ></path>
      </svg>
    </button>
  </header>
  <HomeHeaderMobileMenu ref="menuRef" />
</template>

<script setup>
const activeIndex = ref(1)

const menuRef = ref()
function open() {
  menuRef.value.open()
}
</script>

<style scoped>
.header {
  padding: 15px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255 255 255 / 60%);

  position: sticky;
  top: 0;
  z-index: 110;
}
.header-logo {
  width: 132px;
  height: 61px;
}
.header-logo > img {
  width: 100%;
  height: 100%;
}

.header-menu {
  display: flex;
}

.header-menu li > a {
  padding: 0 38px;

  border-bottom: 2px solid transparent;
}
.header-menu span {
  padding: 6px 0;
}
.header-menu li.active span,
.header-menu li > a:hover span {
  color: #000;
  font-weight: 400;
  border-bottom: 1px solid #000;
  box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 50%);
}
.header-menu li a span {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
}

.header-mobile-menu {
  visibility: hidden;
  width: 31px;
  height: 24px;
}
.header-mobile-menu svg {
  width: 100%;
  height: 100%;
}
@media (max-width: 767px) {
  .header {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-logo {
    width: 86px;
    height: 40px;
  }
  .header-logo > img {
    width: 100%;
    height: 100%;
  }

  .header-menu {
    display: none;
  }

  .header-mobile-menu {
    visibility: visible;
    width: 31px;
    height: 24px;
  }
  .header-mobile-menu svg {
    width: 100%;
    height: 100%;
  }
}
</style>