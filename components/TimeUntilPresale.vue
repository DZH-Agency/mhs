<template>
  <div class="presale-wrapper">
    <div class="container">
      <div class="presale">
        <the-countdown :timer-date="timerDate">
<!--          <template #header>-->
<!--            <div class="presale-block">-->
<!--              <h2 class="presale__heading">-->
<!--                Time until <span>the biggest drop of 2022</span>-->
<!--              </h2>-->
<!--            </div>-->
<!--            -->
<!--          </template>-->
  
          <template #text>
            <div class="presale__sold-out">
              SOLD OUT IN <strong>13 MINUTES</strong>
            </div>
          </template>
          
          <template #footer>
            <div class="presale-block">
              <a href="https://crypto.com/nft/collection/41a371f626f43473ca087f0f36f06299" target="_blank" class="btn sm presale__button">
                View Collection
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
  name: 'TimeUntilPresale',
  props: {
    timerDate: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TimeUntilPresale.scss";
</style>
