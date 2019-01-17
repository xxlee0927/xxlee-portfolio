<script>
import Banner from '@/components/Index/Banner'
import Introduction from '@/components/Index/Introduction'

export default {
  components: {
    Banner,
    Introduction
  },
  data: () => ({
    showIntroductionAnimation: false
  }),
  mounted () {
    window.addEventListener('wheel', e => {
      if (window.scrollY === 0) {
        if (e.deltaY < 0) {
          document.getElementById('banner').classList.remove('hide')
          this.showIntroductionAnimation = false
        } else if (e.deltaY > 0) {
          document.getElementById('banner').classList.add('hide')
          this.showIntroductionAnimation = true
        }
      }
    })
  }
}
</script>

<template>
  <div id="index">
    <Banner/>

    <Introduction :show-animation="showIntroductionAnimation"/>
  </div>
</template>
