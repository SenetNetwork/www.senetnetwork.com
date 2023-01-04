<template>
  <div class="partnership">
    <div class="label">Partnership</div>
    <div class="value">
      <img class="brand0" src="@/assets/images/partner-00.svg" />
      <img class="brand1" src="@/assets/images/partner-01.svg" />
      <img class="brand2" src="@/assets/images/partner-02.svg" />
    </div>
  </div>
</template>

<style scoped>
.partnership {
  background-color: black;
  display: flex;
  padding: 50px 90px;
  align-items: center;
  border-bottom: 1px solid #2c2c2c;
}
.label {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #ffffff;
  margin-right: 50px;
}

.value {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
.brand0 {
  height: 80px;
}
.brand1 {
  height: 80px;
}
.brand2 {
  height: 80px;
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .partnership {
    background-color: black;
    display: block;
    padding: 50px 50px;
    align-items: center;
    border-bottom: 1px solid #2c2c2c;
  }
  .label {
    font-family: var(--font-work-sans);
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;

    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #ffffff;
    margin-right: 0;
    text-align: center;
    margin-bottom: 20px;
  }

  .value {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .brand0 {
    height: 80px;
  }
  .brand1 {
    height: 80px;
  }
  .brand2 {
    height: 80px;
  }
}
</style>