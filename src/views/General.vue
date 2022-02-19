<template>
  <main>
    <div class="general-clining">
      <h1 class="general-clining__title">Генеральная уборка</h1>
      <div class="services">
        <h2 class="services__title">Что входит в генеральную уборку</h2>
        <div class="services__general">
          <div class="services__everywhere">
            <h2>Уборка во всех<br>комнатах</h2>
            <div class="block-of-services">
              <ul>
                <li>Уберёмся в гардеробной</li>
                <li>Помоем пол</li>
                <li>Обеспылим стены</li>
                <li>Протрём пыль</li>
                <li>Помоем зеркала</li>
                <li>Помоем люстру</li>
                <li>Вынесем мусор</li>
                <li>Почистим ковры</li>
                <li>Помоем окна изнутри</li>
                <li>Пропылесосим ковёр</li>
              </ul>
            </div>
          </div>
          <div class="services__kitchen">
            <h2>Уборка на кухне</h2>
            <div class="block-of-services">
              <ul>
                <li>Помоем раковину</li>
                <li>Помоем столешницу</li>
                <li>Помоем обеденный стол</li>
                <li>Помоем плиту</li>
                <li>Помоем холодильник</li>
                <li>Помоем микроволновку</li>
                <li>Помоем посуду</li>
                <li>Помоем фасады кухонных шкафов</li>
                <li>Помоем вытяжку</li>
                <li>Помоем духовку</li>
              </ul>
            </div>
          </div>
          <div class="services__bathroom-and-toilet">
            <h2>Уборка в ванной и туалете</h2>
            <div class="block-of-services">
              <ul>
                <li>Помоем раковину</li>
                <li>Помоем душевую/ванну</li>
                <li>Помоем биде</li>
                <li>Помоем унитаз</li>
                <li>Протрем зеркала</li>
                <li>Уберем лоток за животным</li>
                <li>Очистим плитку от налета</li>
                <li>Выведем пятна на ванной</li>
                <li>Уберемся в туалетном столике</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="differences">
        <h2 class="differences__title">Отличия от "ежедневной" уборки</h2>
        <div class="differences__of-service">
          <div class="differences__service">Выведение глубоких пятен</div>
          <div class="differences__service">Больше двух клинеров на уборке</div>
          <div class="differences__service">Обеспыливание стен</div>
          <div class="differences__service">Уборка в труднодоступных местах</div>
          <div class="differences__service">Уборка в кладовке</div>
          <div class="differences__service">Вынос крупногаборитного мусора</div>
          <div class="differences__service">Мытье потолков</div>
          <div class="differences__service">Выезд старшего клинера</div>
          <div class="differences__service">Спецоборудование у клинеров</div>
          <div class="differences__service">Уборка в пригороде</div>
          <div class="differences__service">Обеспыливание мебели</div>
          <div class="differences__service">Мытье окон с внешней стороны</div>
        </div>
      </div>
      <div class="cost">
        <h2 class="cost__title">Стоимость уборки</h2>
        <div class="cost__text">
          <p class="cost__subtitle">Минимальная цена генеральной уборки составляет 6000р</p>
          <p class="cost__discriptor">Цены обсуждаются индивидуально при выезде старшего клинера на место уборки(выезд бесплатный)</p></div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    width: 100%;
    padding: 50px 0;
  }
  .general-clining {
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
    &__title {
      margin-bottom: 30px;
      text-align: center;
      color: #656565;
    }
    &__general {
      text-align: center;
      color: #656565;
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
  .differences {
    color: #656565;

    &__title {
      margin: 30px 0 10px 0;
      text-align: center;
    }

    &__subtitle {
      text-align: center;
    }

    &__of-service {
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

    &__service {
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