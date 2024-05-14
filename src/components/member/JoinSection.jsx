import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components'
import { memberDB } from '@/assets/firebase.js'
import {useNavigate} from 'react-router-dom'
import { fetchMembers } from '@/store/member'
import { useDispatch, useSelector } from 'react-redux'
import AutoInput from '@/components/member/AutoInput'
import { IoPersonAddOutline } from "react-icons/io5";

const JoinSectionBlock = styled.div`
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
        button { padding:15px 40px; background:var(--blue); color:#fff; font-size:1.5em; border-radius:20px; 
            transition: all 0.3s ease;
            &:hover{background:var(--blue-hover)}
        }
    }
    .table03{
        input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #DFEFFE;
  border-radius: 2px;
  cursor: pointer;
  height: 25px;
  outline: 0;
  width: 25px; 
}
input[type="checkbox"]::after {
  border: solid var(--white);
  border-width: 0 3px 3px 0;
  content: '';
  display: none;
  height: 50%;
  left: 37%;
  position: relative;
  top: 10%;
  transform: rotate(45deg);
  width: 15%;
}
input[type="checkbox"]:checked {
  background: var(--blue);
}
input[type="checkbox"]:checked::after {
  display: block;
}
.table03{
    display: flex;
}
    }
`

const JoinSection = () => {
    const [checking, setChecking] = useState(false)
    const dispatch = useDispatch()
    const members = useSelector(state=>state.members.members)

    const navigate = useNavigate()
    const userIdRef = useRef("")
    const userPwRef = useRef("")
    const userPwOkRef = useRef("")
    const userNameRef = useRef("")
    const userCompanyRef = useRef("")
    const userEmailRef = useRef("")
    const userTelRef = useRef("")

    // const [userId, setUserId] = useState("")
    // const [userPw, setUserPw] = useState("")
    // const [userPwOk, setUserPwOk] = useState("")
    // const [userName, setUserName] = useState("")
    // const [userCompany, setUserCompany] = useState("")
    // const [userEmail, setUserEmail] = useState("")
    // const [userTel, setUserTel] = useState("")

    const [userInfo, setUserInfo] =useState({
        userId:"",
        userPw:"",
        userPwOk:"",
        userName:"",
        userCompany:"",
        userEmail:"",
        userTel:"",
    })

    const register = async (e) =>{
        e.preventDefault()
        const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (!userInfo.userId) {
            alert("이메일을 입력하세요.")
            userIdRef.current.focus()
            return
        }
        if(specialCharacters.test(userInfo.userId)){
            alert("특수문자 사용이 불가합니다.")
            userIdRef.current.focus();
            return
        }
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

        if (!idCheck(userId)) {
            return false;
        }
        if(userInfo.userName.length === 1){
            alert("이름을 2글자 이상 입력하세요.")
            userNameRef.current.focus()
            return false;
        }
        if(userInfo.userCompany.length === 1){
            alert("업체명을 2글자 이상 입력하세요.")
            userCompanyRef.current.focus()
            return false;
        }
        if(!checking){
            alert('자동입력방지를 확인하세요.')
            return false;
        }

        const addMember = {userId:userInfo.userId, userPw:userInfo.userPw, userName:userInfo.userName, userCompany:userInfo.userCompany, userEmail:userInfo.userEmail, userTel:userInfo.userTel}
        try {
            await memberDB.push(addMember)
            alert("회원가입이 성공했습니다.")
            navigate('/login')
        } catch(error){
            console.log("오류 : ", error)
        }
    }
    
    const idCheck = (value)=>{
        let duplicate = members.find(item=>item.userId==value)
        
        console.log(duplicate)
        if (duplicate) {
            alert("중복된 아이디입니다.");
            userIdRef.current.focus();
            return false
        } else {
            return true
        }
    }

    useEffect(()=>{
        dispatch(fetchMembers())
    }, [])
    const changeAuto = (value)=>{
        setChecking(value)
    }

    const [acountOpen, setAcountOpen] = useState(false)

    useEffect(()=>{
        setAcountOpen(true)
    },[])

    const handleChange = (e)=>{
        const {value, name } = e.target
        setUserInfo(userInfo=>({...userInfo, [name]:value}))
    }

    return (
        <JoinSectionBlock>
            <form onSubmit={register} className={acountOpen && 'on'}>
            <div className="agreeTitle01">
                <h1><IoPersonAddOutline /></h1>
                <h1>회원가입</h1>
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
                            <td colSpan={3}><input type="text"  name="userId" id="userId" ref={userIdRef} value={userInfo.userId} onChange={(e)=>{handleChange(e); idCheck(e.target.value)}}  placeholder="'@' 를 포함한 모든 특수문자 사용이 불가합니다." /></td>
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
                            <td><input type="text" name="userName" id="userName" ref={userNameRef} value={userInfo.userName} onChange={handleChange} placeholder='공백문자 및 특수문자는 입력 금지입니다.' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userCompany">업체명 : </label></td>
                            <td><input type="text" name="userCompany" id="userCompany" ref={userCompanyRef} value={userInfo.userCompany} onChange={handleChange} placeholder='공백문자 및 특수문자는 입력 금지입니다.' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userEmail">E-mail : </label></td>
                            <td><input type="email" name="userEmail" id="userEmail" ref={userEmailRef} value={userInfo.userEmail} onChange={handleChange} placeholder='이메일을 입력하세요.' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userTel">휴대폰번호 : </label></td>
                            <td><input type="tel" maxLength='11' name="userTel" id="userTel" ref={userTelRef} value={userInfo.userTel} onChange={handleChange} placeholder="-  를 제외하고 입력해주세요." /></td>
                        </tr>
                       
                        </tbody>
                       
                </table>
                </div>
                <div className="table03">
                <table border="0">
                <caption>기타 개인설정</caption>
                    <colgroup>
                        <col />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td><label htmlFor="userName">정보 메일을 받겠습니다. </label></td>
                        </tr>
                        <tr>
                        <td><input type="checkbox"/></td>
                            <td><label htmlFor="userName">휴대폰 문자메세지를 받겠습니다. </label></td>
                        </tr>
                      
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td><label htmlFor="userName">다른분들이 나의 정보를 볼 수 있도록 합니다. </label></td>
                        </tr>
                        </tbody>
                </table>
                <div className="auto" style={{marginLeft:'65px', marginTop:'30px'}}>
                    <h2 style={{textAlign:'left', paddingBottom:'20px', color:'var(--black)', fontWeight:'400'}}>자동입력방지</h2>
                <AutoInput changeAuto={changeAuto} checking={checking}/>
                </div>
                </div>
                <div className="btn">
                    <button type="submit">회원가입</button>
                </div>
            </form>
        </JoinSectionBlock>
    );
};

export default JoinSection;