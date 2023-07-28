import handleNum from "./index";

let reducer = (
    state = {
        ...handleNum.state,
    },
    action: { type: string; value: number }
) => {
    console.log("执行了reducer");
    let newState = JSON.parse(JSON.stringify(state));
    // switch (action.type) {
    //     case handleNum.ADD1:
    //         handleNum.actions["add1"](newState);
    //         break;
    //     case handleNum.ADD2:
    //         handleNum.actions["add2"](newState, action);
    //         break;
    //     default:
    //         break;
    // }
    //优化成这样

    for (let key in handleNum.actionsName) {
        if (action.type === handleNum.actionsName[key]) {
            handleNum.actions[handleNum.actionsName[key]](newState, action)
        }
    }
    return newState;
};

export default reducer;
