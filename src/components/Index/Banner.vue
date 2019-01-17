<script>
import Snap from 'snapsvg'
const mina = window.mina // for eslint no-undef

export default {
  mounted () {
    this.animateLogo()
  },
  methods: {
    animateLogo () {
      const svgWidth = 300; const svgHeight = 300
      let s = Snap('#banner .logo')
      s.attr({
        width: svgWidth,
        height: svgHeight,
      })

      let left = s.select('.left')
      let right = s.select('.right')
      let top = s.select('.top')
      let bottom = s.select('.bottom')
      let slash = s.select('.slash')
      let text = s.select('.text')

      let elements = s.g(left, right, top, bottom, slash)
      elements.attr({
        fill: '#fff',
      })

      left.attr({ transform: `translate(${(500 / 2)}, 0)`, visibility: 'hidden' })
      right.attr({ transform: `translate(${-(500 / 2)}, 0)`, visibility: 'hidden' })
      top.attr({ transform: `translate(0, ${(500 / 2)})`, opacity: 0 })
      bottom.attr({ transform: `translate(0, ${-(500 / 2)})`, opacity: 0 })
      slash.attr({ visibility: 'hidden' })

      // typing animation
      const typeArr = [right, slash, left]
      typeArr.forEach((el, i) => {
        setTimeout(() => {
          el.attr({ visibility: 'visible' })

          if (i === typeArr.length - 1) { fadeOutSlash() }
        }, i * 150 + 500)
      })

      function fadeOutSlash () {
        setTimeout(() => { slash.animate({ opacity: 0 }, 300, translateToOrigin()) }, 500)
      }
      function translateToOrigin () {
        setTimeout(() => {
          left.animate({ transform: 'translate(0, 0)' }, 500, mina.easeinout)
          right.animate({ transform: 'translate(0, 0)' }, 500, mina.easeinout)
          top.animate({ transform: 'translate(0, 0)', opacity: 1 }, 500, mina.easeinout)
          bottom.animate({ transform: 'translate(0, 0)', opacity: 1 }, 500, mina.easeinout, fadeInText())
        }, 300)
      }
      function fadeInText () {
        setTimeout(() => { text.animate({ opacity: 1 }, 500, mina.easeinout) }, 500)
      }
    }
  }
}
</script>

<template>
  <div id="banner">
    <svg viewBox="0 0 500 500" class="logo">
      <g>
        <path class="left" d="M237.91,250.01l-24.97-20.96l-76.24-63.97c-6.5,8.66-12.02,18.08-16.42,28.12l67.7,56.8l-67.7,56.81c4.4,10.03,9.92,19.46,16.42,28.12l76.24-63.97L237.91,250.01z"/>
        <path class="right" d="M379.72,193.2c-4.4-10.03-9.92-19.46-16.42-28.12l-76.24,63.97l-24.97,20.93l24.97,20.97l76.24,63.97c6.5-8.66,12.02-18.09,16.42-28.12l-67.7-56.81L379.72,193.2z"/>
        <path class="top" d="M249.99,237.91l20.96-24.97l63.97-76.24c-8.66-6.5-18.08-12.02-28.12-16.42l-56.8,67.7l-56.81-67.7c-10.03,4.4-19.46,9.92-28.12,16.42l63.97,76.24L249.99,237.91z"/>
        <path class="bottom" d="M250.02,262.09l-20.97,24.97l-63.97,76.24c8.66,6.5,18.09,12.02,28.12,16.42l56.81-67.7l56.8,67.7c10.03-4.4,19.46-9.92,28.12-16.42l-63.97-76.24L250.02,262.09z"/>
      </g>

      <path class="slash" d="M217.53,334.17h-30.65L287.8,165.83h30.05L217.53,334.17z"/>

      <g class="text" opacity="0">
        <path d="M202.87,441.14l8.94,12.6h-8.7l-4.92-6.9l-5.46,6.9h-8.1l8.94-12.6l-9.48-13.26h8.7l5.4,7.62l5.46-7.62h8.7L202.87,441.14z"/>
        <path d="M235.32,441.14l8.94,12.6h-8.7l-4.92-6.9l-5.46,6.9h-8.1l8.94-12.6l-9.48-13.26h8.7l5.4,7.62l5.46-7.62h8.7L235.32,441.14z"/>
        <path d="M249.3,453.74V409.1h7.68v44.64H249.3z"/>
        <path d="M285.6,449.66c-2.46,2.94-6.24,4.8-10.38,4.8c-7.56,0-13.74-6.18-13.74-13.74c0-7.62,6.18-13.74,13.74-13.74s13.74,6.12,13.74,13.74c0,0.84-0.06,1.62-0.24,2.46H269.4c0.36,0.96,0.84,1.8,1.5,2.52c1.26,1.38,2.88,2.1,4.62,2.1c1.62,0,3.24-0.72,4.44-1.92L285.6,449.66z M281.7,438.62c-0.3-1.08-0.84-2.1-1.62-2.94c-1.2-1.32-2.88-2.04-4.56-2.04c-1.74,0-3.36,0.72-4.62,2.04c-0.72,0.84-1.26,1.86-1.62,2.94H281.7z"/>
        <path d="M317.28,449.66c-2.46,2.94-6.24,4.8-10.38,4.8c-7.56,0-13.74-6.18-13.74-13.74c0-7.62,6.18-13.74,13.74-13.74s13.74,6.12,13.74,13.74c0,0.84-0.06,1.62-0.24,2.46h-19.32c0.36,0.96,0.84,1.8,1.5,2.52c1.26,1.38,2.88,2.1,4.62,2.1c1.62,0,3.24-0.72,4.44-1.92L317.28,449.66z M313.38,438.62c-0.3-1.08-0.84-2.1-1.62-2.94c-1.2-1.32-2.88-2.04-4.56-2.04c-1.74,0-3.36,0.72-4.62,2.04c-0.72,0.84-1.26,1.86-1.62,2.94H313.38z"/>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
  #banner{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: #000;
    transition: 1s;

    &.hide{
      transform: translateY(-100%);
    }

    .logo{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;

      path{
        fill: #fff;
      }
    }
  }
</style>
