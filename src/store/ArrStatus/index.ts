export default {
    state: {
        sarr: [10, 20, 30, 40, 50],
    },
    actions: {
        sarrpush(newState:{sarr:number[]},action: { value: number, type: string }) {
            newState.sarr.push(action.value)
        },

    },
    //名字统一管理
    sarrpush:"sarrpush"

}


//普通写法