<template>
  <main>
    <div class="windows">
      <h1 class="windows__title">Мытье окон</h1>
      <div class="services">
        <h2 class="services__title">Что входит в услугу</h2>
        <div class="services__windows">
          <div class="services__non-balcony">
            <h3>Без балконов / лоджий</h3>
            <ul>
              <li>Помоем окна внутри</li>
              <li>Помоем окна снаружи</li>
              <li>Нанесём антипылевое покрытие</li>
              <li>Протрём подоконики</li>
            </ul>
          </div>
          <div class="services__with-balcony">
            <h3>С балконами / лоджиями</h3>
            <ul>
              <li>Помоем окна балконов</li>
              <li>Нанесём антипылевое покрытие</li>
              <li>Протрем карнизы</li>
              <li>Уберем налёт</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="our-advantages">
        <h2 class="our-advantages__title">Наши преимущества</h2>
        <div class="our-advantages__list">
          <div class="our-advantages__robots">
            <div class="our-advantages__content">
              <h2 class="our-advantages__subtitle">Роботы</h2>
              <p class="our-advantages__discriptor">Мы используем современных роботов,<br>позволяющих быстро и качественно мыть<br> окна в труднодоступных местах.</p>
            </div>
            <img class="our-advantages__img" src="/images/robot.jpeg" alt="">
          </div>
          <div class="our-advantages__specialists">
            <div class="our-advantages__content">
              <h2 class="our-advantages__subtitle">Специалисты</h2>
              <p class="our-advantages__discriptor">Наши клинеры имеют огромный опыт<br> и способны быстро и качественно справляться с работой.</p>
            </div>
            <img class="our-advantages__img" src="/images/specialists.webp" alt="">
          </div>
          <div class="our-advantages__time">
            <div class="our-advantages__content">
              <h2 class="our-advantages__subtitle">Время</h2>
              <p class="our-advantages__discriptor">Наши клинеры уже в течение часа прибудут<br> на место работы и приступят к мытью окон.</p>
            </div>
            <img class="our-advantages__img" src="/images/time.webp" alt="">
          </div>
        </div>
      </div>
      <div class="cost">
        <h2 class="cost__title">Стоимость уборки</h2>
        <div class="cost__text">
          <p class="cost__subtitle">Минимальная цена услуги составляет 1000р</p>
          <p class="cost__discriptor">Цены обсуждаются индивидуально по телефонному разговору.</p>
        </div>
      </div>
    </div>
  </main>  
</template>

<style lang="scss" scoped>
  main {
    width: 100%;
    padding: 50px 0;
  }
  .windows {
    width: 80%;
    margin: auto;
    &__title {
      margin-bottom: 20px;
      text-align: center;
      font-size: 45px;
      color: #4c4c4c;
    }
  }
  .services {
    width: 100%;
    &__title {
      margin-bottom: 30px;
      text-align: center;
      color: #656565;
    }
    &__windows {
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: center;
      color: #656565;
      @media screen and (max-width: 900px) {
        flex-direction: column;
        gap: 20px;
      }
    }
    &__non-balcony, &__with-balcony {
      width: 45%;
      height: auto;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      border: 1px rgb(88, 214, 88) solid;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      li {
        margin-bottom: 20px;
        text-align: start;
        font-size: 20px;
      }
      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }
  }
  .our-advantages {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    &__robots, &__time, &__specialists {
      width: 70%;
      height: 250px;
      display: flex;
      justify-content: space-between;
      border: 1px #4c4c4c solid;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
        flex-direction: column;
      }
    }
    &__content {
      padding: 30px;
    }
    &__title {
      margin: 30px 0;
      text-align: center;
      color: #656565;
    }
    &__subtitle {
      margin-bottom: 20px;
    }
    &__discriptor {
      font-size: 19px;
    }
    &__img {
      height: 100%;
      border-radius: 10px;
      @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
      }
    }
  }
  .cost {
    padding: 30px 0;
    &__title {
      margin-bottom: 30px;
      text-align: center;
      color: #656565;
    }
    &__text {
      padding: 35px;
      border: 1px #4c4c4c solid;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    &__subtitle {
      margin-bottom: 20px;
      font-size: 28px;
    }
    &__discriptor {
      font-size: 20px;
    }
  }
</style>