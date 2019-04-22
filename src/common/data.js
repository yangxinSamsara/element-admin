module.exports = {
    menuList: [
        {
            icon: 'fa fa-home',
            index: 'index',
            title: '系统首页'
        },
        {
            icon: 'fa fa-table',
            index: 'table',
            title: '基础表格'
        },
        {
            icon: 'fa fa-bars',
            index: 'tabs',
            title: '消息选项卡'
        },
        {
            icon: 'fa fa-file-text-o',
            index: '3',
            title: '表单相关',
            subs: [
                {
                    index: 'form',
                    title: '基本表单'
                },
                {
                    index: '3-2',
                    title: '三级菜单',
                    subs: [
                        {
                            index: 'editor',
                            title: '富文本编辑器'
                        },
                        {
                            index: 'markdown',
                            title: 'markdown编辑器'
                        },
                    ]
                },
                {
                    index: 'upload',
                    title: '文件上传'
                }
            ]
        },
        {
            icon: 'fa fa-random',
            index: 'icon',
            title: '自定义图标'
        },
        {
            icon: 'fa fa-bar-chart',
            index: 'charts',
            title: '图表系列'
        },
        {
            icon: 'fa fa-crosshairs',
            index: '6',
            title: '拖拽组件',
            subs: [
                {
                    index: 'drag',
                    title: '拖拽列表',
                },
                {
                    index: 'dialog',
                    title: '拖拽弹框',
                }
            ]
        },
        {
            icon: 'fa fa-exclamation-circle',
            index: '7',
            title: '错误处理',
            subs: [
                {
                    index: 'permission',
                    title: '权限测试'
                },
                {
                    index: '404',
                    title: '404页面'
                }
            ]
        }
    ],
    tableData: {
        "list": [{
            "date": "1997-11-11",
            "name": "林丽",
            "address": "吉林省 辽源市 龙山区"
        }, {
            "date": "1987-09-24",
            "name": "文敏",
            "address": "江西省 萍乡市 芦溪县"
        }, {
            "date": "1996-08-08",
            "name": "杨秀兰",
            "address": "黑龙江省 黑河市 五大连池市"
        }, {
            "date": "1978-06-18",
            "name": "魏强",
            "address": "广东省 韶关市 始兴县"
        }, {
            "date": "1977-07-09",
            "name": "石秀兰",
            "address": "江苏省 宿迁市 宿豫区"
        }, {
            "date": "1994-09-20",
            "name": "朱洋",
            "address": "海外 海外 -"
        }, {
            "date": "1980-01-22",
            "name": "傅敏",
            "address": "海外 海外 -"
        }, {
            "date": "1985-10-10",
            "name": "毛明",
            "address": "内蒙古自治区 包头市 九原区"
        }, {
            "date": "1975-09-08",
            "name": "何静",
            "address": "西藏自治区 阿里地区 普兰县"
        }, {
            "date": "1970-06-07",
            "name": "郭秀英",
            "address": "四川省 巴中市 恩阳区"
        }]
    }
}