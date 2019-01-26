<script>
import AnimatedBackground from '@/components/Index/AnimatedBackground'
import Banner from '@/components/Index/Banner'
import Introduction from '@/components/Index/Introduction'
import Projects from '@/components/Index/Projects'
import Contact from '@/components/Index/Contact'

export default {
  components: {
    AnimatedBackground,
    Banner,
    Introduction,
    Projects,
    Contact
  },
}
</script>

<template>
  <div id="index">
    <Banner/>

    <AnimatedBackground>
      <Introduction/>
      <Projects/>
    </AnimatedBackground>

    <Contact/>
  </div>
</template>
