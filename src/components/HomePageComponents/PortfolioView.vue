<template>
  <div>
    <p class="side__title">Portfolio</p>
    I show Some Portfolio Stuff Here
  </div>
</template>
<script>
export default {
  name: 'PortfolioView',
}
</script>
<style lang="scss" scoped>
.side__title {
  transform: rotate(270deg);
  position: absolute;
  top: 50%;
  left: 0;
  color: white;
  &::after {
    content: '';
    width: 40%;
    height: 1px;
    background: #c48f56;
    position: absolute;
    top: 50%;
    left: 4.5em;
  }
}
</style>
