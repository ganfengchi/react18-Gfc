import { useCallback, useEffect, useMemo, useState } from "react"

function View() {
    useEffect(() => {
        console.log('父组件的 useEffect')
    }, [])
    const [num, setNum] = useState(0)
    
    const childrenClick = useCallback((value: never) => {
        setNum(value)
        console.log('父组件childrenClick')
    }, [num])
    return (
        <div>
            <p>我是父组件</p>
            <p>{num}</p>
            <Child num={num} childrenClick={childrenClick} />
        </div>
    )
}

function Child(props: { num: number, childrenClick: Function }) {
    const [num, setNum] = useState(5)
    useEffect(() => {
        console.log('子组件的 useEffect')
        // setNum(props.num)
    }, [])
    const handleClick = () => {
        console.log('子组件childrenClick')
        setNum(num + 1)
        props.childrenClick(num)
    }

    //Memo就是vue中的计算属性
    const total = useMemo(() => {
        return num * 5;
    }, [num])
    return (
        <div>
            <div>我是子组件的{num}</div>
            <div>我是父组件传过来数字{props.num}</div>
            <div>Memo {total}</div>
            <button onClick={handleClick}>子组件按钮</button>
        </div>
    )
}
export default View