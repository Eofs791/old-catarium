---
title: 猫的友人帐
keywords: 链接
description: 猫的友人帐
friend: /json/friends/friend.json
idol: /json/friends/idol.json
bgm: 
  - name: bangumi
    link: https://bgm.tv
    icon: https://bgm.tv/img/ico/bgm_banner.gif
    color: '#000000'
icon: i-ri-links-fill
random: true
nav: false
---
尝试让箱庭变得稍微热闹一些。      
以下顺序随机，不分先后。        

来自[bgm.tv](bgm.tv)的班友们，现在右上角都有一只可爱的春菜酱啦～   

#### 小伙伴们
感谢你与我交换友链！
<YunLinks :links="frontmatter.friend" :random="frontmatter.random" />

#### 单向链接
不交换友链或者暂时单向的博客站点，很喜欢你们的博客！如果成为双向友链会移至前面。
<YunLinks :links="frontmatter.idol" :random="frontmatter.random" />

#### 友链申请
[关于我](/about) | [关于本站](/about/site)

欢迎来交换友链，下方评论或发送邮件至`791sno@gmail.com`即可，感谢认可 > <    
友链卡片颜色可自定义，如果需要更改随时联系我！  
友链申请的要求与大部分博客相同，一般来者不拒

##### 我的博客信息：
```json
"url": "https://eofs791.github.io",  
"avatar": "https://cdn.jsdelivr.net/gh/Eofs791/catpic@main/img/avatar.ico",  
"name": "见崎美咲",  
"blog": "Catarium",  
"desc": "见崎的猫箱",  
"color": "#f5a9b8"
```

##### 友链交换格式
任意形式提供以下信息即可
```json
"url": "博客URL",  
"avatar": "头像URL",  
"name": "博主名称",  
"blog": "博客名称",  
"desc": "博客描述",  
"color": "友链按钮颜色（不填即为默认颜色）"
```


