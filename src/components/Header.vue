<template>
  <header class="header">
    <div class="header__content">
      <router-link :to="{ name: 'home' }" class="header__logo">
        <img class="header__logo-img" src="/images/Logo.png" alt="Логотип">
        <p>PinClean</p>
      </router-link>
      <div class="header__categories">
        <router-link :to="{ name: 'dayly' }" class="categ-dayly category">Ежедневная</router-link>
        <router-link :to="{ name: 'general' }" class="categ-after-repair category">Генеральная</router-link>
        <router-link :to="{ name: 'window-washing' }" class="categ-window-washing category">Мытье окон</router-link>
      </div>
      <div class="header__contacts">
        <div class="header__telephone">
          <img class="header__phone-img" src="/telephone.png" alt="">
          <p>+7 (900) 600-90-90</p>
        </div>
        <div class="header__adress">
          <img class="header__adress-img" src="/adress.png" alt="">
          <p>г. Владивосток п. Аякс 10</p>
        </div>
      </div>
      <div class="header__burger" @click="burgerActive=!burgerActive">
        <div class="header__burger_line" :class="{ line_active: burgerActive }"></div>
        <div class="header__burger_line" :class="{ line_active: burgerActive }"></div>
        <div class="header__burger_line" :class="{ line_active: burgerActive }"></div>
      </div>
      <div class="burger-shadow" v-show="burgerActive"></div>
      <div class="burger-window" :class="{ burger_active: burgerActive }">
        <div class="burger-window__categories">
          <router-link :to="{ name: 'dayly' }" class="categ-dayly burger-window__categor">Ежедневная</router-link>
          <router-link :to="{ name: 'general' }" class="categ-general burger-window__categor">Генеральная</router-link>
          <router-link :to="{ name: 'window-washing' }" class="categ-window-washing burger-window__categor">Мытье окон</router-link>
        </div>
        <div class="burger-window__contacts">
          <p>+7 (900) 600-90-90</p>
          <p>г. Владивосток п. Аякс 10</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      burgerActive: false
    }
  },
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: auto;
    background: rgb(1, 173, 1);

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
      color: white;
      text-decoration: none;
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
      color: white;
      font-size: 17px;
      @media screen and (max-width: 1050px) {
        display: none;
      }
    }

    &__telephone, &__adress {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__phone-img, &__adress-img {
      width: 20px;
      height: 20px;
      color: white;
    }

    &__burger {
      width: 30px;
      height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 3;
      cursor: pointer;
      @media screen and (min-width: 1050px) {
        display: none;
      }
      &_line {
        height: 4px;
        width: 100%;
        background: white;
        transition: .5s;
      }
    }
  }
  .line_active {
    background: white;
    transition: .5s;
  }
  .burger-shadow {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
  .burger-window {
    position: absolute;
    top: 0; right: -100%;
    width: 100%;
    height: 100%;
    padding-top: 80px;
    z-index: 2;
    background: green;
    color: white;
    transition: 0.5s;
    font-size: 20px;
    // display: none;
    &__categories {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    &__categor {
      cursor: pointer;
      text-decoration: none;
      color: white;
    }

    &__contacts {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      cursor: pointer;
    }
  }
  .burger_active {
    position: absolute;
    top: 0; right: 0;
    width: 80%;
    height: 100%;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    background: rgb(1, 173, 1);
    transition: .5s;
    border-bottom-left-radius: 15px;
    transform-origin: right;
  }
  .category {
    width: auto;
    height: 70px;
    position: relative;
    padding: 0 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    color: white;
    text-decoration: none;
    &:hover {
      background: #aaffaa;
      color: black;
      transition: .5s;
    }
    &:hover::before {
      transform: scaleX(1);
      transition: .5s;
    }
    &::before {
      content: '';
      width: 100%;
      height: 4px;
      position: absolute;
      background: rgb(1, 173, 1);
      bottom: 0; left: 0;
      transform: scaleX(0);
      transform-origin: left;
    }
  }
</style>