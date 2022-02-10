<template>
  <div class="home">
    <div class="slider">
      <div class="slider__sliders-btns">
        <button @click="1" class="slider__prev-slide-btn">&#60;</button>
        <button @click="1" class="slider__next-slide-btn">&#62;</button>
      </div>
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
    
    border: 1px solid green;
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
</style>