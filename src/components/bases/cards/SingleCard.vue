<template>
  <div class="single-card-container">
    <div
      class="single-card"
      @click="rotateSingleCard()"
      :class="[!isRotate||cantRotate ? ' single-card-rotate' : '', cantRotate?' single-card-hover-light': '']"
    >
      <div class="single-card-face single-card-front" :style="{'background-image': `url(${getImgCard(srcCard)})`}"></div>
      <div class="single-card-face single-card-back"></div>
    </div>
  </div>
</template>
<script>
import {getImgCard} from '/src/constants/commonFunc.js'
export default {
  props:{
    srcCard: String,
    cantRotate:{
      Type: Boolean,
      Default: true
    }
  },
  setup(){
    return {
      getImgCard
    }
  },
  data() {
    return {
      isRotate: false,
    };
  },
  methods: {
    rotateSingleCard() {
      this.isRotate = !this.isRotate;
    },
  },
};
</script>
<style lang="scss">
.single-card-container {
  width: 200px;
  height: 330px;
  perspective: 600px;
  .single-card {
  border: 1px solid black;
  width: 200px;
  height: 330px;

  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.single-card-rotate {
  transform: rotateY(180deg);
}

.single-card-face {
  position: absolute;
  backface-visibility: hidden;

  width: 200px;
  height: 330px;

  font-weight: bold;
  font-size: 20px;
}
.single-card-front {
  background-color: lavender;
  background-size: 200px 330px;

}
.single-card-back {
  transform: rotateY(180deg);
  background-image: url("../../../assets/img/cards/behind1.jpg");
  background-size: 200px 330px;
  background-repeat: no-repeat;
}

  .single-card-hover-light:hover{
    box-shadow: 0px 5px 10px 0px rgba(0,255,255,0.7);  
  }
}

</style>
