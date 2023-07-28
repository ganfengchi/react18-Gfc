const store = {
    state: {
        num: 20,
    },
    actions: {
        //只放同步的方法
        add1(newState: { num: number }) {
                newState.num++
        },
        add2(newState: { num: number }, action: { value: number }) {
            newState.num += action.value
        },
        add3(newState: { num: number }, action: { value: number }) {
            newState.num += action.value
        }
    },
    //名字统一管理
    actionsName: {} as any
}

let actionsNames: any = {}
for (let key in store.actions) {
    actionsNames[key] = key
}
store.actionsName = actionsNames

export default store


// 优化写法