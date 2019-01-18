<script>
import ProjectsItem from './ProjectsItem'

export default {
  data: () => ({
    projects: [
      {
        name: 'SMIS',
        img: require('@/assets/images/Index/smis.jpg'),
        link: '',
      },
      {
        name: 'NTU Challenge',
        img: require('@/assets/images/Index/ntuchallenge.jpg'),
        link: '',
      },
      {
        name: 'College Analysis',
        img: require('@/assets/images/Index/ntu.jpg'),
        link: '',
      },
    ]
  }),
  components: {
    ProjectsItem
  }
}
</script>

<template>
  <div id="projects">
    <div class="container">
      <el-row>
        <!-- <el-col
          v-for="(proj, index) of projects"
          :key="proj.name"
          :span="8"
          :offset="index%2===0 ? 3 : 2"
        >
          <ProjectsItem
            :data="proj"
            :position="index%2===0 ? 'left' : 'right'"
          />
        </el-col> -->

        <el-col :span="7" :offset="2">
          <ProjectsItem :data="projects[0]" style="margin-bottom: 20%"/>
        </el-col>
        <el-col :span="7" :offset="5">
          <ProjectsItem :data="projects[1]" style="margin-top: 20%"/>
        </el-col>
        <el-col :span="7" :offset="4">
          <ProjectsItem :data="projects[2]" style="margin-top: 5%" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
  #projects{
    background-color: #eee;
    min-height: 200vh;
  }
</style>
