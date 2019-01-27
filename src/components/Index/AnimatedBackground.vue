<script>
import * as PIXI from 'pixi.js'
import chroma from 'chroma-js'

export default {
  data: () => ({
    pixiApp: null,
    width: null,
    height: null,
  }),
  mounted () {
    // wait other componet loaded to calculate correct height
    window.addEventListener('load', () => {
      this.setWidthHeight()
      this.pixiApp = new PIXI.Application({
        width: this.width,
        height: this.height,
        transparent: true,
        antialias: true,
      })
      this.$refs.canvasWrapper.appendChild(this.pixiApp.view)

      // create rando triangle
      let triangleArr = []
      const colorScale = chroma.scale(['#7ed6df', '#7bed9f'])
      const count = this.$breakpoint.is('xs') ? 10 : 30
      for (let i = 0; i < count; i++) {
        let triangle = new PIXI.Graphics()
        const color = parseInt(colorScale(Math.random()).hex().slice(1), 16)
        triangle.beginFill(color, 0.3)
        triangle.drawPolygon([
          Math.random() * 100, Math.random() * 40,
          Math.random() * 40, Math.random() * 40 + 60,
          Math.random() * 40 + 60, Math.random() * 40 + 60,
        ])
        triangle.endFill()
        triangle.x = Math.random() * this.width
        triangle.y = Math.random() * this.height
        triangle.vx = Math.random() * 2 - 1
        triangle.vy = Math.random() * 2 - 1

        this.pixiApp.stage.addChild(triangle)
        triangleArr.push(triangle)
      }

      // triangle animation
      this.pixiApp.ticker.add(delta => {
        triangleArr.forEach(el => {
          el.x += el.vx
          el.y += el.vy
          el.rotation += 0.005
          this.boundaryHandler(el)
        })
      })
    })

    window.addEventListener('resize', () => {
      this.setWidthHeight()
      this.pixiApp.renderer.resize(this.width, this.height)
    })
  },
  methods: {
    setWidthHeight () {
      this.width = document.getElementById('introduction').offsetWidth
      this.height = document.getElementById('introduction').offsetHeight + document.getElementById('projects').offsetHeight
    },
    boundaryHandler (el) {
      if (el.x < (0 - 100) || el.x > (this.width + 100)) { el.vx = -el.vx }
      if (el.y < (0 - 100) || el.y > (this.height + 100)) { el.vy = -el.vy }
    }
  }
}
</script>

<template>
  <div id="animated-background">
    <div class="canvas-wrapper" ref="canvasWrapper">
      <!-- canvas render here -->
    </div>

    <slot>
      <!-- Introduction and Projects render here -->
    </slot>
  </div>
</template>

<style lang="scss" scoped>
  #animated-background{
    z-index: 0;
    background-color: #eee;
    overflow: hidden;

    .canvas-wrapper{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
