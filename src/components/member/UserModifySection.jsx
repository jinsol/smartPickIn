import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import { memberDB} from '@/assets/firebase'
import { useNavigate } from 'react-router-dom'
import { fetchMembers, localUser, userLogout } from '@/store/member'
import { PiPencilSimpleThin } from "react-icons/pi";


const UserModifySectionBlock = styled.div`
     padding: 150px 30px;
    max-width: 1100px;
    margin: 0 auto;
    
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
    .joinTitle{
        text-align: center;
    }
    .agreeTitle01{
    h1{
        font-size: 3em;
        text-align: center;
        font-weight: bold;
        color: var(--blue);
    }
    h1:first-child{
        font-size: 5em;
    }
    margin-bottom: 70px;
  }
    .table01, .table02, .table03{
        border: 1px solid var(--gray06);
        padding: 0 10px 50px;
        margin-bottom: 50px;
        border-radius: 20px;
        
        table { 
            
        caption{
            font-size: 2em;
            font-weight: bold;
            color: var(--blue);
            padding: 30px 10px;
            text-align: left;
            border-bottom: 1px solid var(--gray06);
            margin-bottom: 15px;
        }
        tbody{
            padding: 50px;

        }
        col:nth-child(1) { width:300px}
        col:nth-child(2) {width:100% }
        td { padding:7px; 
            white-space: nowrap;
            &:nth-child(1) { text-align:right }
            input { border:1px solid #fff; height:50px; width:100%;
                border: 1px solid var(--gray06);
                text-indent:1em; 
                transition: border 0.3s ease;
                &:focus{
                    outline: none;
                    border:1px solid var(--blue);
                }
                
                &:hover{
                    border:1px solid var(--blue);
                }
                
            }
          
        }
    }
    }
    
    .btn { text-align:center; margin-top:20px; 
        button{
            padding:15px 40px; color:#fff; font-size:1.5em; border-radius:10px;
            transition: all 0.3s ease;
            &:nth-child(1) {  
            background:var(--blue);
            &:hover{background:var(--blue-hover)}
        }
        &:nth-child(2) {  
            border: 1px solid red;
            color: red;
            &:hover{background:red;  color: white;}
           
        }
        }
       
    }
`

const UserModifySection = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state=>state.members.user)
    const [modAni,setModAni] = useState(false)

    const userIdRef = useRef("")
    const userPwRef = useRef("")
    const userPwOkRef = useRef("")
    const userNameRef = useRef("")
    const userCompanyRef = useRef("")
    const userEmailRef = useRef("")
    const userTelRef = useRef("")

    const [userInfo, setUserInfo] = useState({
        userId :user ? user.userId : "",
        userPw:"",
        userPwOk:"",
        userName :user ? user.userName : "",
        userCompany :user ? user.userCompany : "",
        userEmail :user ? user.userEmail : "",
        userTel :user ? user.userTel : "",
    })
    const numFilter = /[1234567890]+/
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    const handleChange = (e)=>{
        const {value, name} = e.target
        setUserInfo(userInfo=>({...userInfo,[name]:value}))
    }
    const modify = async (e) =>{
        e.preventDefault()
        if (!userInfo.userPw) {
            alert("비밀번호를 입력하세요.")
            userPwRef.current.focus()
            return
        }
        if (!userInfo.userPwOk) {
            alert("비밀번호를 입력하세요.")
            userPwOkRef.current.focus()
            return
        }
        if (userInfo.userPw!=userInfo.userPwOk){
            alert("비밀번호가 일치하지 않습니다.")
            userPwRef.current.focus()
            return
        }
        if(!numFilter.test(userInfo.userTel)){
            alert("숫자만 입력 가능합니다.")
            userTelRef.current.focus()
            return false
       }
       if(specialCharacters.test(userInfo.userTel)){
        alert("특수문자 사용이 불가합니다.")
        userTelRef.current.focus();
        return
    }
        try {
            await memberDB.child(user.key).update(userInfo)
            dispatch(fetchMembers())
            dispatch(localUser(JSON.parse(localStorage.getItem('loging')))) 
            alert("회원정보를 수정했습니다.")
            navigate('/')
        } catch(error){
            console.log("오류 : ", error)
        }
    }
    const memberRemove = async (e)=>{
        e.preventDefault()
        const answer = confirm("정말로 탈퇴하시겠습니까?")
        if (answer) {
            try {
                // await cartDB.child(user.key).remove()
                await memberDB.child(user.key).remove()
                dispatch(userLogout())
                dispatch(fetchMembers())
                navigate('/')
            } catch(error){
                console.log("오류 : ", error)
            }
        } else {
            return 
        }
    }

    useEffect(()=>{
        setModAni(true)
    },[])
    


    return (
        <UserModifySectionBlock>
             <form onSubmit={modify} className={modAni && 'on'}>
            <div className="agreeTitle01">
                <h1><PiPencilSimpleThin /></h1>
                <h1>회원정보수정</h1>
            </div>
                <div className="table01">
                <table border="0">
                    <caption>사이트 정보 입력</caption>
                    <colgroup >
                        <col />
                        <col colSpan={2}/>
                    </colgroup>
                    {/* <thead >
                        <tr>
                            <th colSpan="2">
                          <h1 style={{textAlign:'left'}}>사이트 정보 입력</h1>
                            </th>
                        </tr>
                    </thead> */}
                    <tbody >
                        <tr>
                            <td><label htmlFor="userId">아이디 : </label></td>
                            <td colSpan={3}><input type="text"  name="userId" id="userId" ref={userIdRef} value={userInfo.userId} disabled/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userPw">비밀번호 : </label></td>
                            <td><input type="password" name="userPw" id="userPw" ref={userPwRef} value={userInfo.userPw} onChange={handleChange}  placeholder='비밀번호를 입력하세요.'  /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userPwOk">비밀번호확인 : </label></td>
                            <td><input type="password" name="userPwOk" id="userPwOk" ref={userPwOkRef} value={userInfo.userPwOk} onChange={handleChange} placeholder='비밀번호를 동일하게 입력해주세요.' /></td>
                        </tr>
                        </tbody>
                       
                </table>
                </div>
                <div className="table02">
                <table border="0">
                <caption>개인정보 입력</caption>
                    <colgroup>
                        <col />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><label htmlFor="userName">이름 : </label></td>
                            <td><input type="text" name="userName" id="userName" ref={userNameRef} value={userInfo.userName} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userCompany">업체명 : </label></td>
                            <td><input type="text" name="userCompany" id="userCompany" ref={userCompanyRef} value={userInfo.userCompany} onChange={handleChange} placeholder='공백문자 및 특수문자는 입력 금지입니다.' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userEmail">E-mail : </label></td>
                            <td><input type="email" name="userEmail" id="userEmail" ref={userEmailRef} value={userInfo.userEmail} disabled/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userTel">휴대폰번호 : </label></td>
                            <td><input type="tel" maxLength='11' name="userTel" id="userTel" ref={userTelRef} value={userInfo.userTel} onChange={handleChange} placeholder="-  를 제외하고 입력해주세요." /></td>
                        </tr>
                       
                        </tbody>
                       
                </table>
                </div>
                <div className="btn">
                    <button type="submit">정보수정</button>
                    <button type="button" onClick={memberRemove} style={{marginLeft:"20px"}}>회원탈퇴</button>
                </div>
            </form>
        </UserModifySectionBlock>
    );
};

export default UserModifySection;