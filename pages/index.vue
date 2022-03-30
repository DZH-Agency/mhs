<template>
  <div>
    <portal-target name="app"/>
    <top-nav-bar/>
    <meet-mad-society/>
    <exclusively-on :timer-date="timerDate"/>
    <div id="story">
      <our-story/>
    </div>
    <div id="roadmap">
      <the-roadmap/>
    </div>
    <div id="artist">
      <our-artist/>
    </div>
    <div id="faq">
      <facts-section/>
    </div>
    <time-until-presale :timer-date="timerDate"/>
    <join-the-community/>
    <the-footer/>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default {
  name: 'Home',
  targetDate: null,
  data() {
    return {
      timerDate: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      }
    }
  },
  beforeMount() {
    AOS.init();
  },
  mounted() {
    const targetDate = new Date(Date.UTC(2022, 3, 15, 20))
    targetDate.setHours(targetDate.getHours() - 8 + new Date().getTimezoneOffset() / 60)
    this.$options.targetDate = targetDate
  
    setInterval(() => {
      const today = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + new Date().getTimezoneOffset() / 60 * 1000)
      today.setHours(today.getHours() - 8)
      
      let diffInSeconds = Math.floor((this.$options.targetDate - today) / 1000);
      if (diffInSeconds <= 0) {
        return
      }
    
      const days = Math.floor(diffInSeconds / 86400);
      diffInSeconds -= days * 86400;
    
      // calculate hours
      const hours = Math.floor(diffInSeconds / 3600) % 24;
      diffInSeconds -= hours * 3600;
    
      // calculate minutes
      const minutes = Math.floor(diffInSeconds / 60) % 60;
      diffInSeconds -= minutes * 60;
    
      this.timerDate = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(diffInSeconds).padStart(2, '0')
      }
    
    }, 1000)
  }
}
</script>
