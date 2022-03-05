<template>
  <div class="presale-wrapper">
    <div class="container">
      <div class="presale">
        <the-countdown :timer-date="timerDate">
          <template #header>
            <div class="presale-block">
              <h2 class="presale__heading">
                Time until <span>the biggest drop of 2022</span>
              </h2>
            </div>
            
          </template>
          
          <template #footer>
            <div class="presale-block">
              <a href="#" target="_blank" class="btn sm presale__button">
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
