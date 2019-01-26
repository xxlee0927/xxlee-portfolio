<script>
import Snap from 'snapsvg'

export default {
  data: () => ({
    s: null,
    isFaceComposed: false
  }),
  mounted () {
    this.s = Snap('#introduction svg')
    this.decomposeFace()

    if (window.scrollY > 0) {
      this.isFaceComposed = true
    }

    // scroll event
    let oldPosition = window.scrollY
    window.addEventListener('scroll', e => {
      if (oldPosition === 0 || window.scrollY === 0) {
        const deltaY = window.scrollY - oldPosition
        if (deltaY > 0) {
          this.isFaceComposed = true
        } else if (deltaY < 0) {
          this.isFaceComposed = false
        }
      }
      oldPosition = window.scrollY
    })

    // mouse enter and leave event
    document.querySelector('#introduction svg').addEventListener('mouseenter', e => {
      this.decomposeFace({ transparent: false })
    })
    document.querySelector('#introduction svg').addEventListener('mouseleave', e => {
      this.composeFace({ delay: false })
    })
  },
  watch: {
    isFaceComposed (val) {
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
  <div id="introduction" ref="introduction">
    <div class="container full-height">
      <el-row type="flex" align="middle" class="full-height" style="flex-wrap: wrap;">
        <el-col :xs="24" :sm="12" :xl="{span: 11, offset: 1}" style="flex-shrink: 0;">
          <div>
            <h1 class="h1">
              Hi! I'm Ching-Hung Lee.
            </h1>
            <h3 class="h3">
              Front-end Developer.<br/>
              Passionate about singing, photography, and design.
            </h3>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :xl="{span: 11, offset: 0}" style="flex-shrink: 0;">
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
    @media (max-width: $xs){
      height: auto;
      padding: 50px 0;
    }
  }
</style>
