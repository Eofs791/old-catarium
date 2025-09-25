import { defineCollection } from 'valaxy'

export default defineCollection({
  key: 'test1',
  title: '仓鼠',
  cover: 'https://cover.sli.dev',
  description: 'The story of I and She',
  items: [
    {
      title: '第一章 仓鼠的笼子',
      // 文章唯一索引，对应路径为 `pages/collections/hamster/1.md`
      key: '1',
    },
    {
      title: '第二章 白昼之光，岂知夜色之深。',
      key: '2',
    },
    {
      title: '第三章 作茧自缚',
      key: '3',
    },
  ]
})