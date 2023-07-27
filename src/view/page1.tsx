import { useSelector, useDispatch } from 'react-redux'

function View() {
    //通过 useSelector 获取v仓库数据
    const { num } = useSelector((state:{num:number}) => ({
        num: state.num
    }))
    //修改仓库数据

    const dispath = useDispatch()
    const changeNum = () => {
        dispath({ type: "add2",value:10 })
    }
    return (
        <div>
            <p>page1</p>
            <p>{num}</p>
            <button onClick={changeNum}>ANNIU</button>
        </div>
    )
}
export default View