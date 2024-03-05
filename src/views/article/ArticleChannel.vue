<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { artGetChannelService } from '@/api/article'
import { onMounted, ref } from 'vue'
import ChannelEdit from './components/ChannelEdit.vue'
const channelList = ref([])
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelService()
  channelList.value = res.data.data
  loading.value = false
}
onMounted(() => {
  getChannelList()
})
const onEditChannel = (row) => {
  console.log(row)
}
const onDelChannel = (row) => {
  console.log(row)
}
// 加载
const loading = ref(false)
const dialog = ref()
const onAddChannel = () => {
  // dialog.value.open({})
  dialog.value.open({})
}
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel"> 添加分类 </el-button>
    </template>
    <el-table :data="channelList" style="width: 100%" v-loading="loading">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
  </PageContainer>
  <!-- 弹窗 -->
  <ChannelEdit ref="dialog"></ChannelEdit>
</template>

<style scoped></style>
