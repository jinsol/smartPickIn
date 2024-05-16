import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components'
import { fetchMembers, userLogin } from '@/store/member'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CiLock,CiUnlock} from "react-icons/ci";
import { Link } from 'react-router-dom'


const LoginSectionBlock = styled.div`
     padding: 250px 30px;
    max-width: 550px;
    margin:  auto;
    form{
        margin: 0 auto;
  transform: translateY(-250px);
  opacity: 0;
  transition: all 0.9s ease;
  &.on{
    transform: translateY(0px);
  opacity: 1;
  }
    }
    .loginTitle{
        transition: all 0.5s ease;
    h1{
        font-size: 3em;
        text-align: center;
        font-weight: 300;
        color: var(--black);
    }
    h1:first-child{
        font-size: 5em;
        color: var(--blue);

    }
    margin-bottom: 70px;
  }
  form{
  }
  .target{
    text-align: center;
    width: 100%;
   
    fieldset{
        border: none;
        width: 100%;
        label{
        }
        input{
            width:100%;
            padding: 20px;
            margin: 10px 0;
            border: 1px solid var(--gray05);
            transition: all 0.5s ease;
            font-size: 1.2em;
            color: var(--black);
            &:hover{
                border: 1px solid var(--blue);
            }
            &:focus{
                outline: none;
                border: 1px solid var(--blue)
            }
        }
    }
   
  }
   
    .btn { text-align:center; margin:20px 0;
        button { width:100%; padding:20px 0; background:var(--blue); color:#fff;  }
    }
    .acount{
        display: flex;
        justify-content: center;
        align-items: center;
        p{margin-right:15px;}
        a{
            display: inline-block;
            border: 1px solid var(--gray03);
            background: var(--white);
            color: var(--black);
            text-align: center;
            padding: 5px 15px;
            transition: all 0.3s ease;
            &:hover{
                border: 1px solid var(--gray01);
                background: var(--gray01);
                color: var(--white);
            }
        }
        
    }
`

const LoginSection = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const members = useSelector(state=>state.members.members)

    const [userId, setUserId] = useState("")
    const [userPw, setUserPw] = useState("")
    const [lock, setLock] = useState(false)

    const userIdRef = useRef("")
    const userPwRef = useRef("")

    const nextUrl = sessionStorage.getItem("nextUrl")
    const choiceProduct = sessionStorage.getItem("choiceProduct");
    const [loginAni,setLoginAni] = useState(false)

    useEffect(()=>{
        setLoginAni(true)
    },[])
    useEffect(()=>{
        dispatch(fetchMembers())
    }, [])
    const handleLogin = (e)=>{
        e.preventDefault()
        if (!userId) {
            alert("이메일을 입력하세요.")
            userIdRef.current.focus()
            return
        }
        if (!userPw) {
            alert("비밀번호를 입력하세요.")
            userPwRef.current.focus()
            return
        }
        let findUser = members.find(item=>item.userId==userId)
        console.log(findUser)  // { userId:"", userPw:""}
        if (findUser) {
            if (findUser.userPw!=userPw) {
                alert("비밀번호가 틀렸습니다.")
                userPwRef.current.focus()
                return false
            } else {
                setLock(true)
                setTimeout(()=>{
                    alert("환영합니다!")
                    dispatch(userLogin({findUser}))
                    if(nextUrl){
                        navigate(nextUrl, {state:JSON.parse(choiceProduct)})
                    } else{
                    navigate('/')
                    }
                },200)
            }
        } else {
            alert("회원이 아닙니다.")
            userIdRef.current.focus()
            return false
        }
    }

    return (
        <LoginSectionBlock>
            <form onSubmit={handleLogin} className={loginAni && 'on'}>
                <>
            <div className="loginTitle">
                { !lock ?
                <div className='member' >
                    <h1><CiLock /></h1>
                    <h1>로그인</h1>
                </div>
                :
                <div className='member'>
                    <h1><CiUnlock /></h1>
                    <h1>환영합니다!</h1>
                </div>
            }
            </div>
            </>
            <div className="target">
            <fieldset className='field01'>
            <label htmlFor="userId"></label>
            <input ref={userIdRef} type="text" id="userId" name="userId" onChange={ (e)=>setUserId(e.target.value)} placeholder='아이디' />
            </fieldset>
            <fieldset className='field01'>
            <label htmlFor="userPw"></label>
            <input ref={userPwRef} type="password" id="userPw" name="userPw" onChange={ (e)=>setUserPw(e.target.value)  }placeholder='비밀번호'/>
            </fieldset>
        </div>
            <div className="btn">
                    <button type="submit">로그인</button>
                </div>
            <div className="acount">
                <p>회원이 아니십니까?</p>
                <Link to='/agree'>회원가입</Link>
            </div>
                 {/* <label htmlFor="userId">이메일: </label>
                            <input ref={userIdRef} type="text" id="userId" name="userId" onChange={ (e)=>setUserId(e.target.value)} /> */}

                             {/* <td><label htmlFor="userPw">비밀번호: </label></td>
                            <td><input ref={userPwRef} type="password" id="userPw" name="userPw" onChange={ (e)=>setUserPw(e.target.value) } /></td> */}
               
            </form>
        </LoginSectionBlock>
    );
};

export default LoginSection;