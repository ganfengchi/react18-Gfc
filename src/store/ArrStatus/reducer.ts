import handleArr from "./index";

let reducer = (
    state = { ...handleArr.state },
    action: { type: string; value: number }
) => {
    console.log("执行了reducer");
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'sarrpush':
            handleArr.actions.sarrpush(newState, action)
            break
        default:
            break;
    }
    return newState;
};

export default reducer;
