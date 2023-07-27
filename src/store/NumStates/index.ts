export default {
    state: {
        num: 20,
    },
    actions: {
        add1(newState: { num: number }) {
            newState.num++
        },
        add2(newState: { num: number }, action: { value: number }) {
            newState.num += action.value
        }
    },
    //名字统一管理
    ADD1: "add1",
    ADD2: "add2",
}
