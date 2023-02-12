<template>
  <ClientOnly>
    <div v-if="hasAccess">
      <portal-target name="app"/>
      <top-navbar />

      <nuxt-child />
    </div>
  </ClientOnly>
</template>

<script>
import TopNavbar from '@/components/mutants/TopNavbar.vue'
export default {
  name: 'mutants',
  components: { TopNavbar },
  data() {
    return {
      hasAccess: false
    }
  },
  blockUntil: new Date(Date.UTC(2023, 1, 5, 20)),
  beforeMount() {
    this.checkAccess()

    this.hasAccess = localStorage.getItem('has_access') === 'real_mad'

    if (!this.hasAccess) {
      this.checkSecureKey()
    }

    if (!this.hasAccess) {
      const timer = setInterval(() => {
        this.checkAccess()
        if (this.hasAccess) {
          clearTimeout(timer)
        }
      }, 1000)
    }
  },
  methods: {
    checkAccess() {
      const total = Date.parse(this.$options.blockUntil) - Date.parse(new Date());

      if (total <= 0) {
        localStorage.setItem('has_access', 'real_mad')
        this.hasAccess = true
      }
    },
    checkSecureKey() {
      const pass = prompt('Enter secure key')

      if (pass === 'qazwsx9257') {
        localStorage.setItem('has_access', 'real_mad')
        this.hasAccess = true
      } else {
        alert('Wrong secure key, try again')
        if (this.hasAccess) {
          return
        }
        this.checkSecureKey()
      }
    }
  }
}
</script>

<style scoped>

</style>
