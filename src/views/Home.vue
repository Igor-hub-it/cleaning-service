<template>
  <div class="home">
    <div class="slider-and-main-discriptor">
      <div class="slider">
        <img 
          class="slider__slds"
          v-for="slide in slides"
          :key="slide.id"
          v-show="slide.isActive"
          :src="`/images/${slide.img}`"
        >
        <div class="slider__sliders-btns">
          <button @click="prevSlide" class="slider__prev-slide-btn">&#60;</button>
          <button @click="nextSlide" class="slider__next-slide-btn">&#62;</button>
        </div>
      </div>
      <div class="main-discriptor">
        <h1>Клининговая компания PinClean</h1>
        <hr>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam, repellat quisquam ratione adipisci nihil excepturi et eum nesciunt odio. Deleniti fugit sapiente sint optio soluta! Dolor quasi voluptas ex itaque, sit ipsa ratione enim tempore aspernatur aliquid quod fuga.</h4>
      </div>
    </div>
    <div class="about-us">
      <div class="about-us__content">
        <h1>Мы - профессиональная клининговая компания</h1>
        <p>За нашими плечами множество коммерчских заказов, а клиенты довольны качеством оказываемых услуг.
          Мы работаем как с юридическими так и с физическими лицами.
          Наша компания заключает дологсрочные контракты по уборке различных помещений: офисных, жилых, пригородних и т.д.
          Штат наших сотрудников - это хорошо обученные клинеры с опытом работы.</p>
      </div>
    </div>
    <div class="title-of-example"><h2>Примеры наших работ</h2></div>
    <div class="example">
      <div class="example__first">
        <img class="example__first-img" src="/images/was-become1.webp" alt="">
        <p>До и после уборки<br> "после ремонта"</p>
      </div>
      <div class="example__second">
        <img class="example__second-img" src="/images/was-become2.webp" alt="">
        <p>До и после<br> ежедневной уборки </p>
      </div>
      <div class="example__third">
        <img class="example__third-img" src="/images/was-become3.webp" alt="">
        <p>До и после <br>генеральной уборки</p>
      </div>
    </div>
    <div class="cost">
      <h2>Средняя стоимость уборки</h2>
      <p>Средняя стоимость одной уборки из двух клинеров составляет 1600р, за подробными расценками вы можете обратиться в категории</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    },
  data() {
    return {
      slides: [
        { id: '0', isActive: true, img: '1.webp' },
        { id: '1', isActive: false, img: '2.webp' },
        { id: '2', isActive: false, img: '3.webp' },
      ],
      currentSlide: 0,
      // source: '', 
      // interval: {
      //   type: Number,
      //   default: 0,
      // },
    }
  },
  methods: {
    nextSlide () {
      this.slides[this.currentSlide].isActive = false
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++
      }
      else if (this.currentSlide === this.slides.length - 1) {
        this.currentSlide = 0
      }
      this.slides[this.currentSlide].isActive = true
    },

    prevSlide () {
      this.slides[this.currentSlide].isActive = false
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
      else if (this.currentSlide === 0) {
        this.currentSlide = this.slides.length - 1
      }
      this.slides[this.currentSlide].isActive = true
    },
  },
  // mounted() {
  //   if (this.interval > 0) {
  //     vm = this
  //     setInterval( function () {
  //       vm.nextSlide
  //     }, vm.interval);
  //   }
  // }
}
</script>

<style lang="scss" scoped>

  .home {
    width: 100%;
    margin: auto;
    padding: 50px 0;
  }
  .slider-and-main-discriptor {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    @media screen and (max-width: 750px) {
      margin: auto;
      flex-direction: column;
    }
  }
  .main-discriptor {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    hr {
      width: 100%;
      height: 1px;
      background: green;
    }
    @media screen and (max-width: 750px) {
      width: 80%;
    }
  }
  .slider {
    width: 60%;
    height: 350px;
    border: 2px solid green;
    border-radius: 5px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 750px) {
      width: 100%;
      height: 150px;
    }

    &__slds {
      width: 100%;
      height: 100%;
      border-radius: 3px;
      transition: 1s;
    }

    &__sliders-btns {
      width: 48%;
      height: auto;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 750px) {
        width: 80%;
      }
    }

    &__prev-slide-btn, &__next-slide-btn {
      height: 50px;
      width: 50px;
      position: relative;
      background: #ccffcc;
      border: 1px solid green;
      border-radius: 5px;
      font-size: 30px;
      color: rgb(1, 173, 1);
      @media screen and (max-width: 750px) {
        width: 35px;
        height: 35px;
        background: rgba(0, 0, 0, 0.5);
        font-size: 20px;
      }
    }
    &__prev-slide-btn:hover, &__next-slide-btn:hover {
      background: #74cc74;
      transition: .5s;
      @media screen and (max-width: 750px) {
        background: rgba(0, 0, 0, .9);
      }
    }
    &__prev-slide-btn {
      left: 20px;
    }
    &__next-slide-btn {
      right: 20px;
    }
  }
  .about-us {
    width: 100%;
    margin: 50px 0;
    background: #2eca2e;
    &__content {
      width: 80%;
      margin: auto;
      padding: 30px 0;
      p {
        font-size: 18px;
      }
    }
  }
  .title-of-example {
    width: 80%;
    margin: auto;
  }
  .example {
    height: auto;
    width: 80%;
    margin: auto;
    padding: 30px 0;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    @media screen and (max-width: 1350px) {
      flex-direction: column;
      gap: 30px;
    }
    &__first, &__second, &__third {
      display: flex ;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    &__first-img, &__second-img, &__third-img {
      width: 100%;
      height: 200px;
      display: flex;
      border: 2px solid green;
      border-radius: 5px;
      @media screen and (min-width: 800px) {
        width: 70%;
      }
    }
  }
  .cost {
    width: 80%;
    height: auto;
    margin: auto;
    p {
      font-size: 18px;
    }
  }
</style>