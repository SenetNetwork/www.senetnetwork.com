<template>
  <div class="header_mobile-menu-wrap" :class="show ? 'header_open' : ''">
    <div class="header_mobile-menu">
      <div class="header_menu-top">
        <button type="button" class="header_menu-close" @click="close">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.293 9.293a1 1 0 0 1 1.414 0L20 18.586l9.293-9.293a1 1 0 1 1 1.414 1.414L21.414 20l9.293 9.293a1 1 0 0 1-1.414 1.414L20 21.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L18.586 20l-9.293-9.293a1 1 0 0 1 0-1.414Z"
              fill="#1A1A1A"
            ></path>
          </svg>
          <span class="a11y">关</span>
        </button>
      </div>
      <nav>
        <ul class="header_menu-nav">
          <li>
            <div class="header_menu-btn-wrap">
              <a href="#" @click="close">
                <span>Home</span
                ><span class="a11y" aria-hidden="false">Home</span>
              </a>
            </div>
          </li>
          <li>
            <div class="header_menu-btn-wrap">
              <a href="#platform" @click="close">
                <span>Platform</span
                ><span class="a11y" aria-hidden="false">Platform</span>
              </a>
            </div>
          </li>
          <li>
            <div class="header_menu-btn-wrap">
              <a href="#ecosystem" @click="close">
                <span>Ecosystem</span
                ><span class="a11y" aria-hidden="false">Ecosystem</span>
              </a>
            </div>
          </li>
          <li>
            <div class="header_menu-btn-wrap">
              <a href="#roadmap" @click="close">
                <span data-name="Developers">Roadmap</span
                ><span class="a11y" aria-hidden="false">Roadmap</span>
              </a>
            </div>
          </li>
          <li>
            <div class="header_menu-btn-wrap">
              <a href="#about" @click="close">
                <span>About</span
                ><span class="a11y" aria-hidden="false">About</span>
              </a>
            </div>
          </li>
          <!-- <li class="li_btn first">
            <div class="header_menu-btn-wrap">
              <a
                href="/download/xxx_Whitepaper.pdf"
                download=""
                class="header_btn-whitepager"
                target="_blank"
                rel="noreferrer"
                >WHITEPAPER
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m8.354 9.854 3.182-3.182a.5.5 0 0 0-.707-.708L8.5 8.293V2.5a.5.5 0 0 0-1 0v5.793L5.172 5.964a.5.5 0 1 0-.707.708l3.182 3.182a.5.5 0 0 0 .707 0Z"
                    fill="#1A1A1A"
                  ></path>
                  <path
                    d="M13.5 10a.5.5 0 0 1 .5.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2.5a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5Z"
                    fill="#1A1A1A"
                  ></path>
                </svg>
              </a>
            </div>
          </li>
          <li classs="li_btn">
            <div class="header_menu-btn-wrap">
              <a
                href="https://www.google.com.hk/"
                class="header_btn-whitepager"
                target="_blank"
                rel="noreferrer"
                >外链
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 2a.5.5 0 0 1 0 1H3v10h10V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3.5Z"
                    fill="#1A1A1A"
                  ></path>
                  <path
                    d="M13.5 2H9a.5.5 0 1 0 0 1h3.293L7.147 8.146a.5.5 0 1 0 .707.708L13 3.707V7a.5.5 0 1 0 1 0V2.5a.5.5 0 0 0-.5-.5Z"
                    fill="#1A1A1A"
                  ></path>
                </svg>
              </a>
            </div>
          </li> -->
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
const show = ref(false)
function open() {
  show.value = true
}
function close() {
  show.value = false
}
defineExpose({
  open
})
</script>
<style scoped>
.header_mobile-menu-wrap {
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  background: transparent;
  transition: z-index 0.2s step-end, background 0.2s ease-in-out;
  will-change: z-index, background;
}
.header_mobile-menu-wrap.header_open {
  z-index: 300;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  transition: z-index 0.2s step-start, background 0.2s ease-in-out;
  will-change: z-index, background;
}

.header_mobile-menu {
  position: fixed;
  right: 0;
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 20px;
  background: #fff;
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;
  will-change: transform;
}

.header_mobile-menu-wrap.header_open .header_mobile-menu {
  transform: translateX(0);
}

.header_menu-top {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header_menu-close {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.header_menu-close svg {
  width: 100%;
  height: 100%;
}

.header_mobile-menu nav {
  margin-top: 25px;
}

.header_menu-btn-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f2f2f2;
}
.header_menu-nav > li:first-child .header_menu-btn-wrap {
  border: 0;
}
.header_menu-nav li:nth-child(5) ~ li > div {
  border-top: none;
}
.header_menu-btn-wrap a {
  width: 100%;
  padding: 15px 0;
  color: #1a1a1a;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 36px;
}

a.header_btn-whitepager {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border: 1px solid #a6a6a6;
  border-radius: 4px;
  color: #595959;
  font-size: 18px;
  line-height: 26px;
}
a.header_btn-whitepager svg {
  font-size: 28px;
}

.li_btn {
  margin-bottom: 8px;
}
.li_btn.first {
  margin-top: 16px;
}

.a11y {
  position: relative;
  z-index: -1;
  display: inline-block;
  overflow: hidden;
  width: 1px;
  height: 1px;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  word-break: normal;
  word-wrap: normal;
}

@media (max-width: 767px) {
  .header_menu-close {
    width: 28px;
    height: 28px;
  }
  .header_mobile-menu nav {
    margin-top: 22px;
  }
  .header_menu-btn-wrap a {
    padding: 18px 0;
    font-size: 16px;
    line-height: 20px;
  }
  a.header_btn-whitepager {
    padding: 12px 16px;
    font-size: 16px;
    line-height: 20px;
  }
  a.header_btn-whitepager svg {
    font-size: 16px;
  }
}
</style>