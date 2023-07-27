<template>
  <div class="spread-cards-container">
    <div class="spread-cards-mains">
      <el-slider v-model="spaceValue" vertical height="200px" max="50"/>
      <el-scrollbar always>
        <div
          class="spread-cards-main"
          :style="{ width: `${fileName.length * (20+spaceValue) + 200}px`, height: '340px' }"
        >
          <div
            class="spread-card-item"
            v-for="(item, index) in fileName"
            :key="item.src"
            :style="{ right: `${index * (20+spaceValue)}px` }"
          >
            <single-card :srcCard="item.src" :cantRotate="true"></single-card>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import SingleCard from "../cards/SingleCard.vue";
import { fileName } from "../../../constants/dataCard.js";
export default {
  setup(props) {
    return {
      fileName,
    };
  },
  components: {
    SingleCard,
  },
  data() {
    return {
      spaceValue: 1,
    };
  },
};
</script>
<style lang="scss">
.spread-cards-container {
  .spread-cards-mains{
    display: flex;
    align-items: center;
  }
  .spread-cards-main {
    position: relative;
    padding-top: 10px;
    .spread-card-item {
      position: absolute;
      transition: all 0.5s;
      &:hover {
        transform: translateY(-10px);
      }
    }
  }
}
</style>
