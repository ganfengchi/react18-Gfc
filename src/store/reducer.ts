

const defaultState = {
    num: 20
}
let reducer = (state = defaultState, action: { type: string, value: number }) => {
    console.log('执行了reducer')
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'add':
            newState.num++
            break;
        case 'add2':
            newState.num += action.value
            break;
        default:
            break;
    }
    return newState
}


export default reducer