<template>
  <div class="home">
    <div class="slider">
      <div class="slider__sliders-btns">
        <button @click="1" class="slider__prev-slide-btn">&#60;</button>
        <button @click="1" class="slider__next-slide-btn">&#62;</button>
      </div>
    </div>
    <div class="about-us">
      <h1>Мы - профессиональная клининговая компания</h1>
      <h4>За нашими плечами множество коммерчских заказов, а клиенты довольны качеством оказываемых услуг.
        Мы работаем как с юридическими так и с физическими лицами.
        Наша компания заключает дологсрочные контракты по уборке различных помещений: офисных, жилых, пригородних и т.д.
        Штат наших сотрудников - это хорошо обученные клинеры с опытом работы.</h4>
    </div>
    <div class="title-of-example"><h1>Примеры наших работ</h1></div>
    <div class="example">
      <div class="example__first"></div>
      <div class="example__second"></div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  .home {
    width: 80%;
    margin: auto;
    padding: 30px 0;
  }
  .slider {
    width: 100%;
    height: 350px;
    border: 2px solid green;
    border-radius: 5px;

    &__sliders-btns {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__prev-slide-btn {
      height: 50px;
      width: 50px;
      position: relative;
      left: 20px;
      border: 1px solid green;
      border-radius: 5px;
      font-size: 30px;
    }

    &__next-slide-btn {
      height: 50px;
      width: 50px;
      position: relative;
      right: 20px;
      border: 1px solid green;
      border-radius: 5px;
      font-size: 30px;
    }
  }
  .about-us {
    margin: 30px 0;
  }
  .example {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &__first, &__second {
      width: 35%;
      height: 180px;
      border: 1px solid green;
      border-radius: 5px;
    }
  }
</style>