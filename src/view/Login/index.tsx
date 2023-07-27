import { Input, Space, Button } from 'antd';
import { ChangeEvent, useEffect, useState } from "react"
import style from "./login.module.scss";
import initLogin from "./init.ts"
import "./login.less"
const View = () => {
    useEffect(() => {
        initLogin();
        window.onresize = function () { initLogin() }
    }, [])

    // 获取用户输入的信息
    const [usernameVal,setUsernameVal] = useState("")

    const [passwordVal,setPasswordVal] = useState("")

    const [captchVal,setCaptchVal] = useState("")


    const userNameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // 获取用户的输入的用户名
        console.log(e.target.value);
        setUsernameVal(e.target.value)
    }

    const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // 获取用户的输入的用户名
        console.log(e.target.value);
        setPasswordVal(e.target.value)
    }

    const captchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // 获取用户的输入的用户名
        console.log(e.target.value);
        setCaptchVal(e.target.value)
    }

    const goLogin = ()=>{
        console.log(usernameVal,passwordVal,captchVal);
    }

    // 加载完这个组件之后 
    return (
        <div className={style.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>
            {/* 登录盒子 */}
            <div className={style.loginBox + " loginbox"} >
                {/* 标题部分 */}
                <div className={style.title}>
                    <h1>前端gangan&nbsp;&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: "flex" }}>
                        <Input placeholder="用户名" onChange={userNameChange} />
                        <Input.Password onChange={passwordChange} placeholder="密码" />
                        <div className="capchBox">
                            <Input onChange={captchaChange}  placeholder="验证码" />
                            <div className='cptchImg'>
                                <img height="38px" src="" alt="" />
                            </div>
                        </div>
                        <Button type="primary" className='loginBtn' onClick={goLogin} block>
                            登录
                        </Button>
                    </Space>

                </div>
            </div>

        </div>
    )
}

export default View