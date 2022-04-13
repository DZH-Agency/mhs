<script>
export default {
  name: 'TermsItem',
  props: {
    htmlContent: {
      type: String,
      required: true
    }
  },
  render(createElement) {
    const options = {
      domProps: { innerHTML: this.htmlContent }
    }
    
    return createElement('div', options)
  }
}
</script>

<style scoped>

</style>
