import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];
//登录到请求到数据之后就可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        label: '栏目 1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目 2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目 3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目 301',
                key: '/page3/page301',
            },
            {
                label: '栏目 302',
                key: '/page3/page302',
            },
            {
                label: '栏目 303',
                key: '/page3/page303',
            },
        ]
    },
    {
        label: '栏目 4',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目 401',
                key: '/page4/page401',
            },
            {
                label: '栏目 302',
                key: '/page4/page402',
            },
            {
                label: '栏目 303',
                key: '/page4/page403',
            },
        ]
    },
    {
        label: '栏目 5',
        key: '/page5',
        icon: <FileOutlined />
    },
]
const Comp: React.FC = () => {

    const navigateTo = useNavigate()
    const currentRoute = useLocation()
    const menuClick = (e: { key: string }) => {
        //点击跳转到对应的路由 编程式导航跳转
        navigateTo(e.key)
    }

    let firstOpenKey: string = ""
    function findKey(obj) {
        return obj.key === currentRoute.pathname
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children']?.lemgth > 0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]?.key as string
            break
        }

    }
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const handleOpenChange = (keys: string[]) => {
        //什么时候执行函数里面的代码  ? 展开和回收某些菜单的时候执行
        console.log(keys, 'keys')//keys是个数组记录了那一项是展开的
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            //展开和回收事件
            onOpenChange={handleOpenChange}
            //当前展开乡的key数组
            openKeys={openKeys}
        />
    )
}

export default Comp