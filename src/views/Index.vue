<script>
import Banner from '@/components/Index/Banner'
import Introduction from '@/components/Index/Introduction'
import Projects from '@/components/Index/Projects'
import Contact from '@/components/Index/Contact'

export default {
  components: {
    Banner,
    Introduction,
    Projects,
    Contact
  },
  data: () => ({
    showIntroductionAnimation: false
  }),
  mounted () {
    if (window.scrollY > 0) {
      document.getElementById('banner').classList.add('hide')
      this.showIntroductionAnimation = true
    }

    let oldPosition = window.scrollY
    window.addEventListener('scroll', e => {
      if (oldPosition === 0 || window.scrollY === 0) {
        const deltaY = window.scrollY - oldPosition
        if (deltaY > 0) {
          document.getElementById('banner').classList.add('hide')
          this.showIntroductionAnimation = true
        } else if (deltaY < 0) {
          document.getElementById('banner').classList.remove('hide')
          this.showIntroductionAnimation = false
        }
      }
      oldPosition = window.scrollY
    })
  }
}
</script>

<template>
  <div id="index">
    <Banner/>

    <Introduction :show-animation="showIntroductionAnimation" class="margin-bottom"/>

    <Projects class="margin-bottom"/>

    <Contact/>
  </div>
</template>

<style>
#index{
  background: #eee;
}
</style>
