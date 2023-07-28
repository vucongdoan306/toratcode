<template>
  <div class="single-stone-container">
    <div class="single-stone" :style="{'background-image': `url(${getImgStone(backImgStone)})`}"></div>
  </div>
</template>
<script>
import { getImgStone } from "/src/constants/commonFunc.js";

export default {
  setup() {
    return {
      getImgStone,
    };
  },
  props:{
    backImgStone:{
      type: String,
      default: "stone1.png"
    }
  }
};
</script>
<style lang="scss">
.single-stone-container {
  .single-stone {
    height: 128px;
    width: 128px;
    background-size: 128px 128px;
    &:hover {
        filter: drop-shadow(0 0 0.75rem rgb(89, 109, 239));
    }
  }
}
</style>
