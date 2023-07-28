//类型声明文件不然直接使用引入
// import store from '@/store' 错误

type RootState = ReturnType<typeof import('@/store').getState>


interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:function
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function
}