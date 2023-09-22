<template>
  <div class="home">
    <el-row class="mb-4">
      <el-input type="text" v-model="keyword"></el-input>
      <el-button type="primary" @click="queryGitUser">查询用户</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { queryUser } from '@/api/user/index';

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    let keyword = ref('');

    async function queryGitUser() {
      const resp = await queryUser(keyword.value);
      console.log(resp);
    }
    return { keyword, queryGitUser };
  }
});
</script>
