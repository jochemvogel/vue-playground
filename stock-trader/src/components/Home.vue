<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <p class="h6">You may Save & Load your Data</p>
    <p class="h6">Click on 'End Day' to begin a New Day</p>
    <hr />
    <p>Your Funds: {{funds | currency}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped>
.h6 {
  font-size: 1.2em;
  font-weight: 300;
}
</style>