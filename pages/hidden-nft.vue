<template>
  <div class="hidden-nft-wrapper"></div>
</template>

<script>
export default {
  name: 'hidden-nft'
}
</script>

<style scoped lang="scss">
.hidden-nft-wrapper {
  height: 100vh;
  background: url("static/HiddenNFT/desktop.png") no-repeat center / 100% 100%;
  
  @media (max-width: 700px) {
    background: url("static/HiddenNFT/mobile.png") no-repeat center bottom / 100% 100%;
  }
}
</style>
