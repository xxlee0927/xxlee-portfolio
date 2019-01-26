<script>
import ProjectsItem from './ProjectsItem'

export default {
  components: {
    ProjectsItem
  },
  data: () => ({
    projects: [
      {
        name: 'SMIS',
        img: require('@/assets/images/Index/smis.jpg'),
        link: 'https://www.behance.net/gallery/75091735/_',
        tags: ['Dev', 'UI'],
      },
      {
        name: 'NTU Challenge',
        img: require('@/assets/images/Index/ntuchallenge.jpg'),
        link: 'https://www.behance.net/gallery/75093011/NTU-Challenge',
        tags: ['Dev', 'Mobile'],
      },
      {
        name: 'College Analysis',
        img: require('@/assets/images/Index/ntu.jpg'),
        link: 'https://www.behance.net/gallery/75091105/SMIS-',
        tags: ['Dev', 'Data Visualization'],
      },
    ]
  }),
}
</script>

<template>
  <div id="projects" ref="projects">
    <div class="container">

      <el-row>
        <el-col :xs="24" :xl="{span: 23, offset: 1}">
          <h1 class="h1 margin-bottom">Recent Projects</h1>
        </el-col>
        <el-col :xs="24" :sm="{span: 10, offset: 12}" :xl="{span: 7, offset: 14}">
          <ProjectsItem :data="projects[0]" class="project-1"/>
        </el-col>
        <el-col :xs="24" :sm="{span: 10, offset: 1}" :xl="{span: 7, offset: 3}">
          <ProjectsItem :data="projects[1]" class="project-2"/>
        </el-col>
        <el-col :xs="24" :sm="{span: 10, offset: 12}" :xl="{span: 7, offset: 14}">
          <ProjectsItem :data="projects[2]" class="project-3"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #projects{
    background-color: #eee;
    padding: 200px 0;
    @media (max-width: $xs){
      padding: 50px 0;
    }
  }
</style>
