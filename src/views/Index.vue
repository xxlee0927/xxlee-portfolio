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
}
</script>

<template>
  <div id="index">
    <Banner/>

    <Introduction/>

    <Projects/>

    <Contact/>
  </div>
</template>

<style>
#index{
  background: #eee;
}
</style>
