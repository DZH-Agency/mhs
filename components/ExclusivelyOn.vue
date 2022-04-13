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
              <a href="https://crypto.com/nft/drops-event/0f43502c4af20b094dfb43f515f8d301" target="_blank" class="btn sm">
                View Drop
              </a>
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
