module.exports = {
    theme: 'reco',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        // 博客配置
        type: 'blog',
        author: 'coderyxy',
        logo: '/img/logo.png',
        authorAvatar: '/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
                items: [
                    // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
                    {
                        text: '前端文章',
                        items: [
                            { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
                        ],
                    },
                    {
                        text: '学习笔记',
                        items: [
                            { text: '《JavaScript教程》', link: '/note/javascript/' },
                            { text: '《JavaScript高级程序设计》', link: '/note/js/' },
                            { text: '《ES6 教程》', link: '/note/es6/' },
                            { text: '《Vue》', link: '/note/vue/' },
                            { text: '《React》', link: '/note/react/' },
                            {
                                text: '《TypeScript 从零实现 axios》',
                                link: '/note/typescript-axios/',
                            },
                            {
                                text: '《Git》',
                                link: '/note/git/',
                            },
                            {
                                text: 'TypeScript',
                                link: '/pages/51afd6/',
                            },
                            {
                                text: 'JS设计模式总结',
                                link: '/pages/4643cd/',
                            },
                        ],
                    },
                ],
            },
            {
                text: '页面',
                link: '/ui/',
                items: [
                    { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
                    { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
                ],
            },
            {
                text: '技术',
                link: '/technology/',
                items: [
                    { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
                    { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
                    { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
                    { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
                ],
            },
            {
                text: '更多',
                link: '/more/',
                items: [
                    { text: '学习', link: '/pages/f2a556/' },
                    { text: '面试', link: '/pages/aea6571b7a8bae86/' },
                    { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
                    { text: '实用技巧', link: '/pages/baaa02/' },
                    { text: '友情链接', link: '/friends/' },
                ],
            },
            { text: '关于', link: '/about/' },
            {
                text: '收藏',
                link: '/pages/beb6c0bd8a66cea6/',
                // items: [
                //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
                //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
                //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
                // ],
            },
            {
                text: '索引',
                link: '/archives/',
                items: [
                    { text: '分类', link: '/categories/' },
                    { text: '标签', link: '/tags/' },
                    { text: '归档', link: '/archives/' },
                ],
            },
        ],
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/yxy4598' },
            ]
        },
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
            // ...
        ],

        record: 'ICP 备案文案',
        recordLink: 'ICP 备案指向链接',
        cyberSecurityRecord: '公安部备案文案',
        cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2020'
    }
}