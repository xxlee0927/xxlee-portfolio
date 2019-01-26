<script>
export default {
  props: {
    data: Object,
  },
  filters: {
    formatTags (val) {
      return val.join(' / ')
    }
  },
  mounted () {
    const target = this.$refs.projectItem
    const deviceHeight = window.innerHeight
    window.addEventListener('scroll', e => {
      if (target.getBoundingClientRect().top < deviceHeight * 0.5) {
        target.classList.add('loaded')
      }
    })
  },
  computed: {
  }
}
</script>

<template>
  <div class="projects__item" ref="projectItem">
    <a :href="data.link" target="_blank">
      <div class="text-wrapper">
        <p class="tags">{{ data.tags | formatTags }}</p>
        <h3 class="name">{{ data.name }}</h3>
      </div>
      <img class="image" :src="data.img" :alt="data.name" />
      <div class="background" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .projects__item{
    position: relative;
    overflow: hidden;
    margin-bottom: 20%;
    @media (max-width: $xs){
      margin-bottom: 10px;
    }

    .text-wrapper{
      z-index: 3;
      width: 80%;
      position: absolute;
      right: 20px;
      bottom: 20px;
      text-align: right;
      transform: translateY(100%);
      opacity: 0;

      .name{
        margin: 0;
        color: #fff;
        font-size: 60px;
        font-family: Jaapokki;
        @media (max-width: $md){
          font-size: 48px;
        }

      }
      .tags{
        margin-bottom: 5px;
        font-size: 18px;
        color: #fff;
      }
    }
    .image{
      z-index: 2;
      position: relative;
      width: 66%;
      filter: grayscale(100%) brightness(.7);
      transition: .5s;

      transform: translateX(-101%);
    }
    .background{
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding-bottom: 66%;
      background-color: $primary-color;

      transform: translateX(-101%);
    }

    &:hover .image{
      filter: grayscale(0) brightness(.9);
      transition-delay: 0;
      transition-duration: .3s;
    }

    &.loaded{
      .text-wrapper{
        animation-name: slideup;
        animation-delay: 1s;
        animation-duration: .3s;
        animation-fill-mode: forwards;
      }
      .image{
        animation-name: slideright;
        animation-delay: .5s;
        animation-duration: .3s;
        animation-fill-mode: forwards;
      }
      .background{
        animation-name: slideright;
        animation-duration: .3s;
        animation-fill-mode: forwards;
      }
    }

    @keyframes slideright{
      from{
        transform: translateX(-101%);
      }
      to{
        transform: translateX(0);
      }
    }
    @keyframes slideup{
      from{
        transform: translateY(101%);
        opacity: 0;
      }
      to{
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
