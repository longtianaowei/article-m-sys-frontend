import { userGetInfoService } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
// 用户模块
export const useUserStore = defineStore(
  'big-user',
  () => {
    // 用户token
    const token = ref('')
    // 设置token的方法
    const setToken = (t) => {
      token.value = t
    }
    const user = ref({})
    const getUser = async () => {
      // 请求获取数据
      const res = await userGetInfoService()
      user.value = res.data.data
    }
    const removeToken = () => (token.value = '')
    const setUser = (obj) => (user.value = obj)
    return { token, setToken, user, getUser, setUser, removeToken }
  },
  {
    persist: true //持久化
  }
)
