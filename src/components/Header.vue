<template>
  <header class='header'>
    <div class="header__content">
      <div class="header__logo">LOGO</div>
      <div class="header__categories categories">
        <div class="categories__dayly">Ежедневная</div>
        <div class="categories__after-repair">После ремонта</div>
        <div class="categories__window-washing">Мытье окон</div>
      </div>
      <div class="header__contacts">
        <p>phone</p>
        <p>ofice</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: auto;
    background: #f8f8f8;

    &__content {
      width: 80%;
      margin: auto;
      // padding: 30px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {

    }

    &__categories {
      display: flex;
      align-items: center;
    }

    &__contacts {
      display: flex;
      gap: 30px;
    }
  }

  .categories {
    &__dayly, &__after-repair, &__window-washing {
      height: 70px;
      padding: 0 15px;
      display: flex;
      align-items: center;
    }
    &__dayly:hover, &__after-repair:hover, &__window-washing:hover {
      transition: .5s;
      background: #e9e9e9;
      cursor: pointer;
    }
  }
</style>