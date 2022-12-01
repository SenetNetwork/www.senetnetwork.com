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
  padding-top: 14.125rem;
  padding-bottom: 1.25rem;

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
  font-size: 1.375rem;
  line-height: 1.625rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.topic-desc {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 6.25rem;
  line-height: 120%;
  text-transform: uppercase;

  margin-top: 0.25rem;
}
.topic-animate {
  width: 32rem;

  position: absolute;
  bottom: -6.25rem;
  right: -13.375rem;
}

.economic-wrap {
  color: var(--white);
  background-color: var(--black);
  padding: 4.75rem 7rem;
}
.economic-body {
  max-width: 100rem;
  margin: 0 auto;

  position: relative;
}
.economic-desc {
  width: 44.5rem;
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
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
    padding-top: 11.25rem;
    padding-bottom: 1.625rem;

    position: relative;
  }
  .topic-body {
    padding-left: var(--sm-pl);
    padding-right: var(--sm-pr);
  }
  .topic-title {
    font-size: 1.375rem;
    line-height: 1.625rem;
  }
  .topic-desc {
    font-size: 2.5rem;
    line-height: 120%;

    margin-top: 1.4375rem;
  }
  .topic-animate {
    width: 16rem;
    position: absolute;
    top: 3.125rem;
    right: -9.125rem;
    bottom: initial;
  }

  .economic-wrap {
    padding: 1.375rem 0 2.25rem;
  }
  .economic-body {
    max-width: 100rem;
    margin: 0 auto;

    position: relative;
  }
  .economic-desc {
    font-size: 0.9375rem;
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
    margin-top: 1.875rem;
    display: block;
  }
}
</style>