// import handleNum from "./NumStates"
// import handleArr from "./ArrStatus"

// const defaultState = {
//     ...handleNum.state,
//     ...handleArr.state
// }
// let reducer = (state = defaultState, action: { type: string, value: number }) => {
//     console.log('执行了reducer')
//     let newState = JSON.parse(JSON.stringify(state))
//     switch (action.type) {
//         case handleNum.ADD1:
//             handleNum.actions['add1'](newState)
//             break;
//         case handleNum.ADD2:
//             handleNum.actions['add2'](newState,action)
//             break;
//         default:
//             break;
//     }
//     return newState
// }


// export default reducer