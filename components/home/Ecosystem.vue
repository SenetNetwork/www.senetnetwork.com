<template>
  <div class="panel">
    <div class="topic-wrap">
      <div class="topic-body">
        <div class="topic-title">Ecosystem</div>
        <div class="topic-desc">A Distribution networ Economic</div>
      </div>
      <img class="topic-animate" src="@/assets/images/ecosystem-block.png" />
    </div>
    <div class="economic-wrap">
      <div class="economic-body">
        <div class="economic-desc">
          In Senet, games no longer run in isolation. All ecosystem
          participants, platform holders, developers and users, have the
          opportunity to become SENET token holders and share in the value of
          it. The continuous interaction and common interests among users will
          promote the further development of the ecosystem
        </div>
        <img
          class="economic-animate"
          src="@/assets/images/ecosystem-economic.png"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.panel {
  width: 100%;
  background: var(--bg-gradient);
}
.topic-wrap {
  padding-top: 227px;
  padding-bottom: 21px;

  position: relative;
}
.topic-body {
  max-width: var(--max-width);
  margin: 0 auto;
}
.topic-title {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.topic-desc {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 120%;
  text-transform: uppercase;

  margin-top: 4px;
}
.topic-animate {
  width: 513px;

  position: absolute;
  bottom: -101px;
  right: -214px;
}

.economic-wrap {
  color: var(--white);
  background-color: var(--black);
  padding: 76px 112px;
}
.economic-body {
  max-width: 1600px;
  margin: 0 auto;

  position: relative;
}
.economic-desc {
  width: 712px;
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;

  position: absolute;
  top: 0;
  left: 0;
}
.economic-animate {
  width: 100%;
  height: calc(0.5625 * 100vw);
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .panel {
    width: 100%;
  }
  .topic-wrap {
    padding-top: 180px;
    padding-bottom: 26px;

    position: relative;
  }
  .topic-body {
    padding-left: var(--sm-pl);
    padding-right: var(--sm-pr);
  }
  .topic-title {
    font-size: 22px;
    line-height: 26px;
  }
  .topic-desc {
    font-size: 40px;
    line-height: 120%;

    margin-top: 23px;
  }
  .topic-animate {
    width: 256px;
    position: absolute;
    top: 50px;
    right: -146px;
    bottom: initial;
  }

  .economic-wrap {
    padding: 23px 0 37px;
  }
  .economic-body {
    max-width: 1600px;
    margin: 0 auto;

    position: relative;
  }
  .economic-desc {
    font-size: 15px;
    line-height: 150%;

    position: static;
    padding-left: var(--sm-pl);
    padding-right: var(--sm-pr);
    width: 100%;
    box-sizing: border-box;
  }
  .economic-animate {
    width: 100%;
    height: calc(0.5625 * 100vw);

    margin-left: auto;
    margin-right: auto;
    margin-top: 31px;
    display: block;
  }
}
</style>