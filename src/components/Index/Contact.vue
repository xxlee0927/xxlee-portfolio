<script>
export default {
  data: () => ({
    platforms: [
      {
        name: 'Medium',
        icon: require('@/assets/images/Index/medium-logo.png'),
        link: 'https://medium.com/@chinghunglee',
      },
      {
        name: 'Github',
        icon: require('@/assets/images/Index/github-logo.png'),
        link: 'https://github.com/xxlee0927',
      },
      {
        name: 'Mail',
        icon: require('@/assets/images/Index/mail.png'),
        link: 'mailto:leechinghon@gmail.com',
      },
    ]
  })
}
</script>

<template>
  <div id="contact">
    <div class="title-block">
      <h1 class="text-center text-white h1 margin-none">Get Connected</h1>
      <p class="text-center text-white">Find me on the platforms below.</p>
    </div>

    <div class="social-block text-center">
      <span>
        <div v-for="item of platforms" :key="item.name" class="platform-button">
          <a :href="item.link" target="_blank">
            <img :src="item.icon" :alt="item.name" class="full-width">
          </a>
        </div>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contact{

  .title-block{
    background: $primary-color;
    padding: 50px 0;
  }

  .social-block{
    padding: 10px 0;
    background-color: #333;

    .platform-button{
      display: inline-block;
      padding: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;

      &:hover{
        background-color: #555;
      }
    }
  }

}
</style>
