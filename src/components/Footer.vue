<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__text">
        Начиная использовать Сервис (его отдельные функциональности),
        вы принимаете Пользовательское соглашение и соглашаетесь<br> c Политикой конфиденциальности.
      </div>
      <div class="footer__rights-and-contacts">
        <div class="contacts">
          <p>+7 (900) 600-90-90</p>
          <p>г. Владивосток п. Аякс 10</p>
        </div>
        <div class="rights">
          © 2022, PinClean
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    background: rgb(1, 173, 1);
    color: white;
    font-size: 18px;
    &__content {
      width: 80%;
      margin: auto;
      padding: 30px 0;
    }
    &__text {

    }
    &__rights-and-contacts {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 750px) {
        flex-direction: column;
      }
    }
  }
  .rights {
    display: flex;
    align-items: flex-end;
  }
  .contacts {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 750px) {
      margin: 30px 0;
    }
  }
</style>