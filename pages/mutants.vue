<template>
  <div>
    <portal-target name="app"/>
    <top-navbar />
    
    <nuxt-child />
  </div>
</template>

<script>
import TopNavbar from '@/components/mutants/TopNavbar.vue'
export default {
  name: 'mutants',
  components: { TopNavbar },
}
</script>

<style scoped>

</style>
