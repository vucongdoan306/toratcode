<template>
  <div>
    <!-- <div v-for="item in fileName" :key="item.src">
    </div> -->
    <single-deck></single-deck>
    <spread-cards @selected-card="getItemCard"></spread-cards>
    <single-card v-if="srcCard" :srcCard="srcCard" ></single-card>

  </div>
</template>
<script>
import SingleCard from "./bases/cards/SingleCard.vue";
import SingleDeck from "./bases/decks/SingleDeck.vue";
import SpreadCards from "./bases/Spread /SpreadCards.vue";
import { fileName } from "/src/constants/dataCard.js";
export default {
  setup(props) {
    return {
      fileName,
    };
  },
  components: {
    SingleCard,
    SingleDeck,
    SpreadCards,
  },
  data() {
    return {
      srcCard: ''
    }
  },
  methods: {
    getItemCard(val){
      this.srcCard = val;
    }
  },
};
</script>
<style lang=""></style>
