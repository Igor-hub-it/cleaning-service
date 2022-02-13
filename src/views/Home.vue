<template>
  <div class="home">
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
  props: {
    },
  data() {
    return {
      slides: [
        { id: '0', isActive: true, img: '1.webp' },
        { id: '1', isActive: false, img: 'img.jpg' },
        { id: '2', isActive: false, img: 'i.jpg' },
      ],
      currentSlide: 0,
      source: '', 
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
    width: 80%;
    margin: auto;
    padding: 30px 0;
  }
  .slider {
    width: 100%;
    height: 350px;
    border: 2px solid green;
    border-radius: 5px;
    display: flex;
    align-items: center;

    &__slds {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }

    &__sliders-btns {
      width: 80%;
      height: auto;
      position: absolute;
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
    width: 75%;
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