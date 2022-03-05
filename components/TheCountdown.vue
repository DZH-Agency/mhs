<template>
  <div class="countdown">
    <slot name="header"></slot>
    <div class="countdown__time">
      <span data-time="Days">{{ timerDate.days }}</span>:<span data-time="Hours">{{ timerDate.hours }}</span>:<span data-time="Minutes">{{ timerDate.minutes }}</span>:<span data-time="Seconds">{{ timerDate.seconds }}</span>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'TheCountdown',
  props: {
    timerDate: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheCountdown.scss";
</style>
