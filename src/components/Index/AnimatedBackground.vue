<script>
import * as PIXI from 'pixi.js'
import chroma from 'chroma-js'

export default {
  mounted () {
    // wait other componet loaded to calculate correct height
    window.addEventListener('load', () => {
      const width = document.getElementById('introduction').offsetWidth
      const height = document.getElementById('introduction').offsetHeight + document.getElementById('projects').offsetHeight
      let app = new PIXI.Application({
        width: width,
        height: height,
        transparent: true,
        antialias: true,
      })
      this.$refs.canvasWrapper.appendChild(app.view)

      let triangleArr = []
      const colorScale = chroma.scale(['#7ed6df', '#7bed9f'])
      for (let i = 0; i < 30; i++) {
        let triangle = new PIXI.Graphics()
        const color = parseInt(colorScale(Math.random()).hex().slice(1), 16)
        triangle.beginFill(color, 0.3)
        triangle.drawPolygon([
          Math.random() * 100, Math.random() * 40,
          Math.random() * 40, Math.random() * 40 + 60,
          Math.random() * 40 + 60, Math.random() * 40 + 60,
        ])
        triangle.endFill()
        triangle.x = Math.random() * width
        triangle.y = Math.random() * height
        triangle.vx = Math.random() * 2 - 1
        triangle.vy = Math.random() * 2 - 1

        app.stage.addChild(triangle)
        triangleArr.push(triangle)
      }
      app.ticker.add(delta => {
        triangleArr.forEach(el => {
          el.x += el.vx
          el.y += el.vy
          el.rotation += 0.005
          boundaryHandler(el)
        })
      })

      function boundaryHandler (el) {
        if (el.x < (0 - 100) || el.x > (width + 100)) { el.vx = -el.vx }
        if (el.y < (0 - 100) || el.y > (height + 100)) { el.vy = -el.vy }
      }
    })
  }
}
</script>

<template>
  <div id="animated-background">
    <div class="canvas-wrapper" ref="canvasWrapper">
      <!-- canvas render here -->
    </div>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  #animated-background{
    background-color: #eee;

    .canvas-wrapper{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
