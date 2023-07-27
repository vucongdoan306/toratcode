<template>
  <div>
    <!-- <div v-for="item in fileName" :key="item.src">
      <single-card :srcCard="item.src"></single-card>
    </div> -->
    <single-deck></single-deck>
    <spread-cards></spread-cards>
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
};
</script>
<style lang=""></style>
