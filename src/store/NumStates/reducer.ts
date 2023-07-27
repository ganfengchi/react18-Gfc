import handleNum from "./index";

let reducer = (
    state = {
        ...handleNum.state,
    },
    action: { type: string; value: number }
) => {
    console.log("执行了reducer");
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case handleNum.ADD1:
            handleNum.actions["add1"](newState);
            break;
        case handleNum.ADD2:
            handleNum.actions["add2"](newState, action);
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;
