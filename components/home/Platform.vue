<template>
  <section class="panel">
    <div class="panel-item left">
      <div class="topic-wrap">
        <div class="topic">Platform</div>
        <div class="topic-desc">Platform for play ... Earn ...</div>
      </div>
      <div class="divider-line">
        <div class="divider-label"></div>
      </div>
      <div class="intro">
        SN not just focuses on the value of game experience, but also embeds an
        economic system that connects with reality. By integrating equipment,
        securitization, game token mechanism securitization, security audit,
        native cloud security defense,, advertising services, game asset
        management, AI economic model governance, big data user behavior
        analysis, recommendation network and other functions, we aim to help
        user more safely and conveniently enter the WEB3 World.
      </div>
    </div>
    <div class="panel-item right">
      <img class="img-phone" src="@/assets/images/platform.png" />
    </div>
  </section>
</template>
<style scoped>
.panel {
  width: 100%;
  height: 1060px;
  position: relative;

  color: var(--white);
  background: var(--black);

  display: flex;
}
.panel-item {
  flex: 1;
}

.panel-item.left {
}
.topic-wrap {
  padding-left: 83px;
}
.topic {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  padding-top: 108px;
}
.topic-desc {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 120%;
  text-transform: uppercase;

  margin-top: 18px;
  margin-bottom: 113px;
}
.divider-line {
  border-top: 1px solid #d2d2d2;
  position: relative;
}
.divider-label {
  width: 226px;
  height: 35px;
  background: #dafd60;

  position: absolute;
  top: -17px;
  left: -13px;
}
.intro {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 21.3333px;
  line-height: 31px;

  padding-left: 83px;
  padding-right: 83px;
  margin-top: 55px;
}
.panel-item.right {
  position: relative;
}
.img-phone {
  width: 845px;
  height: 1130px;

  position: absolute;
  top: 130px;
  left: 0;
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .panel {
    width: 100%;
    height: auto;
    position: relative;

    display: block;
  }
  .panel-item {
    flex: auto;
  }

  .panel-item.left {
  }
  .topic-wrap {
    padding-left: 20px;
  }
  .topic {
    font-size: 14px;
    line-height: 16px;

    padding-top: 53px;
  }
  .topic-desc {
    font-size: 40px;

    margin-top: 16px;
    margin-bottom: 55px;
  }
  .divider-label {
    left: -113px;
  }
  .intro {
    font-size: 15px;
    line-height: 150%;

    padding-left: var(--sm-pl);
    padding-right: var(--sm-pr);
    margin-top: 55px;
  }
  .panel-item.right {
    position: relative;
  }
  .img-phone {
    width: 100%;
    height: auto;

    position: relative;
    top: 108px;
    left: 0;
    margin-top: -88px;
  }
}
</style>