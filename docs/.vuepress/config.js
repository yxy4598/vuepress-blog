module.exports = {
    theme: 'reco',
    themeConfig: {
        // 博客配置
        type: 'blog',
        author: 'coderyxy',
        logo: '/img/logo.png',
        authorAvatar: '/img/logo.png',
        head: [
            ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
        ],
        nav: [
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
        ],
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
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