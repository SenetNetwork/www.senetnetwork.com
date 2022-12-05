<template>
  <footer class="footer">
    <div class="logo">
      <img src="@/assets/images/logo.svg" />
    </div>
    <div class="copyright">© 2022 Senet. All rights reserved.</div>
  </footer>
</template>
<style scoped>
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 132px;
  height: 61px;
}
.copyright {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  text-transform: capitalize;

  margin-left: 35px;
}
/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .footer {
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 132px;
    height: 61px;
  }
  .copyright {
    margin-top: 18px;
    margin-left: 0;
  }
}
</style>