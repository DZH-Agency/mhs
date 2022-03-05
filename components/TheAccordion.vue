<template>
  <component
    :is="tag"
    ref="accordion"
    class="accordion"
    :style="{transition: `max-height ${openDurationMs}ms`}"
  >
    <slot name="default"></slot>
  </component>
</template>

<script>
export default {
  name: 'TheAccordion',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    openDurationMs: {
      type: Number,
      default: 250
    }
  },
  watch: {
    isOpened() {
      this.$nextTick(() => {
        this.toggleAccordion()
      })
    }
  },
  methods: {
    getTotalHeight() {
      return this.$slots.default.reduce((acc, node) => {
        console.log(node)
        console.log(node.elm?.offsetHeight, 'elm')
        return acc + (node.elm?.offsetHeight ?? 0)
      }, 0)
    },
    toggleAccordion() {
      const wrapper = this.$refs.accordion
  
      if (this.isOpened) {
        wrapper.style.maxHeight = this.getTotalHeight() + 'px'
      } else {
        wrapper.style.removeProperty('max-height')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.accordion {
  max-height: 0;
  overflow: hidden;
}
</style>
