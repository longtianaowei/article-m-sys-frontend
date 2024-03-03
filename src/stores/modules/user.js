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
    return { token, setToken }
  },
  {
    persist: true //持久化
  }
)
