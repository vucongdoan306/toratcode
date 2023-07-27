<template>
  <div class="single-deck-container">
    <div
      class="single-deck-main"
      :style="{
        height: `${330 + Math.floor(fileName.length / 4) * 2}px`,
        width: `${200 + Math.floor(fileName.length / 6) * 2}px`,
      }"
    >
      <div
        class="deck-item"
        v-for="(item, index) in fileName"
        :key="item.src"
        :style="{
          bottom: `${Math.floor(index / 6) * 2}px`,
          right: `${Math.floor(index / 4) * 2}px`,
        }"
      >
        <single-card :cantRotate="true" :srcCard="item.src"></single-card>
      </div>
    </div>
  </div>
</template>
<script>
import { fileName } from "/src/constants/dataCard.js";
import SingleCard from "../cards/SingleCard.vue";
export default {
  setup(props) {
    return {
      fileName,
    };
  },
  components: { SingleCard },
};
</script>
<style lang="scss">
.single-deck-container {
  .single-deck-main {
    position: relative;
    .deck-item {
      position: absolute;
      transition: all 0.1s;
      &:hover{
        transform: translate(5px, 5px);
      }
    }
  }
}
</style>
