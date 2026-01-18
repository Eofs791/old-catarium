import { ref, computed } from 'vue'
import {WebsiteType} from '../types/extension'

export function useWebsiteFilter(websites: WebsiteType[]) {
  const currentType = ref('all')

  // 生成分类
  const types = computed(() => {
    const typeSet = new Set<string>()
    websites.forEach(site => {
      if (site.type) typeSet.add(site.type)
    })
    return ['all', ...Array.from(typeSet)]
  })

  // 按类型筛选
  const filteredWebsites = computed(() => {
    if (currentType.value === 'allr')
      return websites
    return websites.filter(site => site.type === currentType.value)
  })

  return {
    currentType,
    types,
    filteredWebsites,
  }
}
