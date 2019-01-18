<script>
import Snap from 'snapsvg'

export default {
  props: {
    showAnimation: Boolean
  },
  data: () => ({
    s: null
  }),
  mounted () {
    this.s = Snap('#introduction svg')
    this.decomposeFace()
    if (this.showAnimation) {
      this.composeFace()
    }

    document.querySelector('#introduction svg').addEventListener('mouseenter', e => {
      this.decomposeFace({ transparent: false })
    })
    document.querySelector('#introduction svg').addEventListener('mouseleave', e => {
      this.composeFace({ delay: false })
    })
  },
  watch: {
    showAnimation (val) {
      if (val) { this.composeFace() } else { this.decomposeFace() }
    }
  },
  methods: {
    decomposeFace ({ transparent = true } = {}) {
      let triangles = this.s.selectAll('polygon')

      triangles.forEach(el => {
        el.animate({
          transform: `translate(${Math.random() * 50 - 25}, ${Math.random() * 50 - 25})`,
          opacity: transparent ? 0 : 1
        }, 300)
      })
    },
    composeFace ({ delay = true } = {}) {
      let triangles = this.s.selectAll('polygon')
      triangles.forEach(el => {
        setTimeout(() => {
          el.animate({
            transform: `translate(0, 0) rotate(0)`,
            opacity: 1
          }, 300)
        }, delay ? Math.random() * 1500 : 0)
      })
    }
  }
}
</script>

<template>
  <div id="introduction">
    <div class="container full-height">
      <el-row type="flex" align="middle" class="full-height">
        <el-col :span="10" :offset="2">
          <div>
            <h1 class="h1">
              嗨！我是李慶宏
            </h1>
            <h3 class="h3">
              一位前端工程師<br/>
              喜歡唱歌、攝影、探索 UIUX
            </h3>
          </div>
        </el-col>
        <el-col :span="10">
          <div v-html="require('@/assets/low-poly-face.svg')">
            <!-- svg render here -->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #introduction{
    position: relative;
    height: 100vh;
    background-color: #eee;
  }
</style>
