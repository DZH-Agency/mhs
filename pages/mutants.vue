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
  beforeMount() {
    this.hasAccess = localStorage.getItem('has_access') === 'real_mad'
    
    if (!this.hasAccess) {
      this.checkSecureKey()
    }
  },
  methods: {
    checkSecureKey() {
      const pass = prompt('Enter secure key')
  
      if (pass === 'qazwsx9257') {
        localStorage.setItem('has_access', 'real_mad')
        this.hasAccess = true
      } else {
        alert('Wrong secure key, try again')
        this.checkSecureKey()
      }
    }
  }
}
</script>

<style scoped>

</style>
