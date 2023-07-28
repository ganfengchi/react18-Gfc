import { useSelector, useDispatch } from 'react-redux'

//TS 中提供了 ReturnType ,用来获取函数类型的返回值
function View() {
    //通过 useSelector 获取v仓库数据
    const { num ,sarr} = useSelector((state:RootState) => ({
        num: state.handleNum.num,
        sarr:state.handleArr.sarr
    }))
    //修改仓库数据

    const dispath = useDispatch()
    const changeNum = () => {
        //通过 useDispatch 获取仓库数据
        dispath({ type: "add2", value: 10 })
    }
    return (
        <div>
            <p>page1</p>
            <p>{num}</p>
           <p>{sarr}</p>
            <button onClick={changeNum}>ANNIU</button>
        </div>
    )
}
export default View