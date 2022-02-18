<template>
  <div class="main">
    <div class="dayly-clining">
      <h1 class="dayly-clining__title">Ежедневная уборка</h1>
      <div class="dayly-clining__service service">
        <h2 class="service__title">Что входит в уборку квартиры</h2>
        <div class="service__all-rooms">
          <div class="service__everywhere">
            <h2>Уборка во всех<br>комнатах</h2>
            <div class="block-of-services">
              <ul>
                <li>Помоем пол</li>
                <li>Протрем пыль</li>
                <li>Помоем зеркала</li>
                <li>Вынесем мусор</li>
                <li>Помоем окна изнутри</li>
                <li>Пропылесосим ковёр</li>
              </ul>
            </div>
          </div>
          <div class="service__kitchen">
            <h2>Уборка на кухне</h2>
            <div class="block-of-services">
              <ul>
                <li>Помоем раковину</li>
                <li>Помоем столешницу</li>
                <li>Помоем обеденный стол</li>
                <li>Помоем плиту</li>
                <li>Помоем холодильник</li>
                <li>Помоем микроволновку</li>
              </ul>
            </div>
          </div>
          <div class="service__bathroom-and-toilet">
            <h2>Уборка в ванной и туалете</h2>
            <div class="block-of-services">
              <ul>
                <li>Помоем раковину</li>
                <li>Помоем душевую/ванну</li>
                <li>Помоем биде</li>
                <li>Помоем унитаз</li>
                <li>Протрем зеркала</li>
                <li>Уберем лоток за животным</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- что не входит в обязанности -->
      <div class="not-included-in-clining">
        <h2 class="not-included-in-clining__title">Что не входит в уборку</h2>
        <h3 class="not-included-in-clining__subtitle">Попробуйте генеральную уборку, если вам нужна услуга из списка ниже</h3>
        <div class="not-included-in-clining__content">
          <div class="not-included-in-clining__non-service">Выведение глубоких пятен</div>
          <div class="not-included-in-clining__non-service">Больше двух клинеров на уборке</div>
          <div class="not-included-in-clining__non-service">Обеспыливание стен</div>
          <div class="not-included-in-clining__non-service">Уборка в труднодоступных местах</div>
          <div class="not-included-in-clining__non-service">Уборка в кладовке</div>
          <div class="not-included-in-clining__non-service">Мытье потолков</div>
        </div>
      </div>
      <div class="cost">
        <h2 class="cost__title">Стоимость уборки</h2>
        <div class="cost__variants">
          <div class="cost__one-room">
            <h3>Однокомнатная</h3>
            <p>от 1500р</p>
          </div>
          <div class="cost__two-rooms">
            <h3>Двухкомнатная</h3>
            <p>от 2000р</p>
          </div>
          <div class="cost__three-rooms">
            <h3>Трёхкомнатная</h3>
            <p>от 2500р</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
    padding: 50px 0;
  }
  .dayly-clining {
    width: 80%;
    margin: auto;
    &__title {
      margin-bottom: 20px;
      text-align: center;
      font-size: 45px;
      color: #4c4c4c;
    }
    &__service {
      text-align: center;
      color: #656565;
    }
  }
  .service {
    &__title {
      margin-bottom: 30px;
    }
    &__all-rooms {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 900px) {
        flex-direction: column;
        gap: 20px;
      }
    }
    &__everywhere, &__kitchen, &__bathroom-and-toilet {
      width: 25%;
      height: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      border: 1px rgb(88, 214, 88) solid;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      @media screen and (max-width: 900px) {
        width: 80%;
      }
    }
  }
  .block-of-services {
    text-align: start;
    font-size: 20px;
    li {
      margin-bottom: 20px;
    }
  }
  .not-included-in-clining {
    color: #656565;

    &__title {
      margin: 30px 0 10px 0;
      text-align: center;
    }

    &__subtitle {
      text-align: center;
    }

    &__content {
      margin-top: 30px;
      display: grid;
      justify-content: space-between;
      grid-template-columns: 30% 30% 30%;
      gap: 30px;
      @media screen and (max-width: 1050px) {
        grid-template-columns: 45% 45%;
      }
      @media screen and (max-width: 800px) {
        grid-template-columns: 100%;       
      }
    }

    &__non-service {
      padding: 20px;
      text-align: center;
      color: white;
      font-size: 20px;
      background: rgb(1, 173, 1);
      border: 1px #656565 solid;
      border-radius: 5px;
    }
  }
  .cost {
    margin: 50px 0;
    &__title {
      margin-bottom: 20px;
      text-align: center;
      color: #656565;
    }
    &__variants {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 30% 30% 30%;
      gap: 30px;
      @media screen and (max-width: 1050px) {
        grid-template-columns: 45% 45%;
      }
      @media screen and (max-width: 800px) {
        grid-template-columns: 100%;       
      }
    }
    &__one-room, &__two-rooms, &__three-rooms {
      padding: 35px;
      border: 1px #4c4c4c solid;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      p {
        margin-top: 20px;
        font-size: 30px;
      }
    }
  }
</style>