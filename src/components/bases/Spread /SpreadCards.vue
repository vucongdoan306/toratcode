<template>
  <div class="spread-cards-container" :class="isMounted?'is-mounted':''" v-if="isMounted">
    <div class="spread-cards-mains">
      <el-slider v-model="spaceValue" vertical height="200px" max="50" />
      <el-scrollbar always>
        <div
          class="spread-cards-main"
          :style="{
            width: `${fileName.length * (20 + spaceValue) + 200}px`,
            height: '340px',
          }"
        >
          <div
            class="spread-card-item"
            v-for="(item, index) in dataFileName"
            :key="item.src"
            :style="{ right: `${index * (20 + spaceValue)}px` }"
            @click="$emit('selected-card', item.src)"
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
import { shuffleArray } from "../../../constants/commonFunc";
export default {
  setup(props) {
    return {
      fileName,
      shuffleArray,
    };
  },
  components: {
    SingleCard,
  },
  props: {
    typeDraw: {
      type: Number,
      default: 1,
    },
    removeCard: {
      type: String,
      default: 'nocard'
    },
  },
  created() {
    switch (this.typeDraw) {
      case 1:
        this.dataFileName = shuffleArray(fileName);
        break;
      default:
        this.dataFileName = shuffleArray(fileName);
        break;
    }
  },
  watch:{
    removeCard(newVal,oldVal){
      this.dataFileName = this.dataFileName.filter(x=>x!==newVal);
    }
  },
  mounted() {
    // Khi component được mounted, chúng ta sẽ đặt isMounted thành true để kích hoạt hiệu ứng trải bài
    this.isMounted = true;
  },
  data() {
    return {
      spaceValue: 1,
      dataFileName: [],
      isMounted: false,
    };
  },
};
</script>
<style lang="scss">
.spread-cards-container {
  opacity: 0;
  transition: opacity 1s;
  &.is-mounted {
    opacity: 1;
  }
  .el-slider__bar {
    background: #bdc5cc !important;
  }
  .el-slider__button {
    border: 2px solid #bdc5cc !important;
  }
  .spread-cards-mains {
    display: flex;
    align-items: center;
  }
  .spread-cards-main {
    position: relative;
    padding-top: 10px;
    animation: spread-cards-animation 1s;
    .spread-card-item {
      position: absolute;
      transition: all 1s;
      &:hover {
        transform: translateY(-10px);
      }
    }
  }


  @keyframes spread-cards-animation {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
}
</style>
