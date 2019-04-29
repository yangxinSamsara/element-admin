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
                    title: '基础表单'
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
    ]
}