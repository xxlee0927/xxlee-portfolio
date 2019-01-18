<script>
export default {
  props: {
    data: Object,
  },
  mounted () {
    const target = this.$refs.projectItem
    window.addEventListener('scroll', e => {
      if (target.getBoundingClientRect().top < 200) {
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
    <h3 class="projects__item__name">{{ data.name }}</h3>
    <img class="projects__item__image" :src="data.img" :alt="data.name" />
    <div class="projects__item__background" />
  </div>
</template>

<style lang="scss" scoped>
  .projects__item{
    position: relative;
    overflow: hidden;

    &__name{
      z-index: 3;
      position: absolute;
      right: 20px;
      bottom: 20px;
      margin: 0;
      color: #fff;
      font-size: 60px;
      text-align: right;

      transform: translateY(100%);
      opacity: 0;
    }
    &__image{
      z-index: 2;
      position: relative;
      width: 66%;
      filter: grayscale(100%) brightness(.7);
      transition: .5s;

      transform: translateX(-101%);
    }
    &__background{
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding-bottom: 66%;
      background-color: #1de9b6;

      transform: translateX(-101%);
    }

    &:hover &__image{
      filter: grayscale(0) brightness(.9);
      transition-delay: 0;
      transition-duration: .3s;
    }

    &.loaded &__name{
      animation-name: slideup;
      animation-delay: 1s;
      animation-duration: .3s;
      animation-fill-mode: forwards;
    }
    &.loaded &__image{
      animation-name: slideright;
      animation-delay: .5s;
      animation-duration: .3s;
      animation-fill-mode: forwards;
    }
    &.loaded &__background{
      animation-name: slideright;
      animation-duration: .3s;
      animation-fill-mode: forwards;
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
