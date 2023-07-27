import handleNum from "./NumStates"



const defaultState = {
    ...handleNum.state
}
let reducer = (state = defaultState, action: { type: string, value: number }) => {
    console.log('执行了reducer')
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'add':
            handleNum.actions.add1(newState)
            break;
        case 'add2':
            handleNum.actions.add2(newState,action)
            break;
        default:
            break;
    }
    return newState
}


export default reducer