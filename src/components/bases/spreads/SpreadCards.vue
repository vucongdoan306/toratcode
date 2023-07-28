<template>
  <div
    class="spread-cards-container"
    :class="isMounted ? 'is-mounted' : ''"
    v-if="isMounted"
  >
    <div class="spread-cards-mains">
      <el-slider v-model="spaceValue" vertical height="200px" max="50" />
      <el-scrollbar always>
        <div
          class="spread-cards-main"
          :class="[
            countSelect < maxLength ||
            (countSelect >= maxLength && countPlusCard > 0)
              ? ''
              : ' opt-90',
          ]"
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
            @click="selectCard(item)"
          >
            <single-card
              :srcCard="item.src"
              :cantRotate="true"
              :backImgCard="backImgCard"
            ></single-card>
          </div>
        </div>
      </el-scrollbar>
      <div class="spread-more-container">
        <transition name="fade">
          <div class="button-add" v-if="countSelect >= maxLength">
            <el-button
              type="primary"
              color="#bdc5cc"
              dark
              :icon="Pointer"
              @click="plusCard()"
              >Chọn thêm</el-button
            >
          </div>
        </transition>
        <transition name="fade">
          <div class="spread-tag" v-if="countPlusCard > 0">
            <el-tag class="ml-2" type="info">{{ "+" + countPlusCard }}</el-tag>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import SingleCard from "../cards/SingleCard.vue";
import { fileName } from "../../../constants/dataCard.js";
import {
  magicShuffle,
  stoneShuffle,
  flowerShuffle,
} from "../../../constants/commonFunc";
import { Pointer } from "@element-plus/icons-vue";
export default {
  setup(props) {
    return {
      fileName,
      magicShuffle,
      Pointer,
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
      default: "nocard",
    },
    maxLength: {
      type: Number,
      default: 3,
    },
    backImgCard: {
      type: String,
      default: "behind1.jpg",
    },
  },
  created() {
    switch (this.typeDraw) {
      case 1:
        this.dataFileName = magicShuffle(fileName);
        break;
      case 2:
        this.dataFileName = stoneShuffle(fileName);
        break;
      case 3:
        this.dataFileName = flowerShuffle(fileName);
        break;
      default:
        this.dataFileName = magicShuffle(fileName);
        break;
    }
  },
  watch: {
    removeCard(newVal, oldVal) {
      this.countSelect++;
      this.dataFileName = this.dataFileName.filter((x) => x.src !== newVal);
    },
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
      countSelect: 0,
      countPlusCard: 0,
    };
  },
  methods: {
    selectCard(item) {
      if (this.countSelect < this.maxLength) {
        this.$emit("selected-card", item.src);
      } else if (this.countPlusCard > 0) {
        this.countPlusCard--;
        this.$emit("more-card", item.src);
      }
    },

    plusCard() {
      this.countPlusCard++;
    },
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
    .spread-more-container {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .spread-tag {
        margin-top: 5px;
      }
    }
  }
  .spread-cards-main {
    position: relative;
    padding-top: 10px;
    animation: spread-cards-animation 1s;
    .spread-card-item {
      position: absolute;
      transition: all 0.2s;
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
