<template>
  <div class="exc-wrapper">
    <div class="container">
      <div class="exc">
        <the-countdown :timer-date="timerDate">
          <template #header>
            <div class="exc-header">
              Exclusively on
              <img class="exc-header__img" src="/ExclusivelyOn/crypto-com-nft.png" alt="logo">
            </div>
          </template>
          
          <template #footer>
            <div class="exc-footer">
              <button class="btn sm">
                View Drop (soon)
              </button>
            </div>
          </template>
        </the-countdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExclusivelyOn',
  props: {
    timerDate: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/ExclusivelyOn.scss";
</style>
