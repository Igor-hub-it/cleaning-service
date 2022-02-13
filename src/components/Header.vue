<template>
  <header class='header'>
    <div class="header__content">
      <div class="header__logo">
        <img class="header__logo-img" src="/images/Logo.png" alt="Логотип">
        <p>PinClean</p>
      </div>
      <div class="header__categories">
        <div class="categ-dayly category">Ежедневная</div>
        <div class="categ-after-repair category">После ремонта</div>
        <div class="categ-window-washing category">Мытье окон</div>
      </div>
      <div class="header__contacts">
        <p>+7 (900) 600-90-90</p>
        <p>г. Владивосток п. Аякс 10</p>
      </div>
      <div class="header__burger" @click="openBurgerWindow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    openBurgerWindow () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: auto;
    background: #ccffcc;

    &__content {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      display: flex;
      gap: 20px;
      align-items: end;
      font-size: 30px;
    }

    &__logo-img {
      max-height: 60px;
    }

    &__categories {
      display: flex;
      align-items: center;
      @media screen and (max-width: 1050px) {
        display: none;
      }
    }

    &__contacts {
      display: flex;
      gap: 30px;
      @media screen and (max-width: 1050px) {
        display: none;
      }
    }

    &__burger {
      width: 30px;
      height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (min-width: 1050px) {
        display: none;
      }
      span {
        height: 4px;
        width: 100%;
        background: green;
      }
    }
  }

  .category {
    width: auto;
    height: 70px;
    position: relative;
    padding: 0 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #aaffaa;
    }
    &:hover::before {
      transform: scaleX(1);
      transition: .5s;
      // transform-origin: right;
    }
    &::before {
      content: '';
      width: 100%;
      height: 4px;
      position: absolute;
      background: green;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
    }
  }
  // .category:hover::after {
  //   width: 100%;

  //   &:hover {
  //     content: '';
  //     display: block;
  //     position: absolute;
  //     bottom: 0;
  //     left: 50%;
  //     transform: translateX(-50%);
  //     height: 2px;
  //     width: 0;
  //     background-color: rgb(0, 0, 250);
  //     transition: 0.2s ease;
  //   }
  // }
</style>