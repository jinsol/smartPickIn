import { createSlice } from '@reduxjs/toolkit';
import { memberDB } from '@/assets/firebase'

const memberSlice = createSlice({
    name:"member",
    initialState : {
        members : [],  // [{ key, userId, userPw }, ...]
        user : null,    // { key, userId, usePw }
    },
    reducers : {
        initMembers(state, action){
            state.members = action.payload
            const loggedInUser = JSON.parse(localStorage.getItem('loging'))
            if(loggedInUser){
                const findUser = state.members.find(item=>item.key==loggedInUser.key)
                state.user=findUser
            }
        },
        userLogin(state, action){
            const { key, userId, userPw,userPwOk, userName, userCompany, userEmail, userTel} = action.payload.findUser
            state.user = {key, userId, userPw,userPwOk, userName, userCompany, userEmail, userTel}
            localStorage.loging = JSON.stringify({key:key, userId:userId}) 
        },

      
        localUser(state, action){
            const findUser = state.members.find(item=>item.key==action.payload.key)
            state.user = findUser
        },
        userLogout(state, action){
            state.user = null
            localStorage.clear()
        }
    }
})

export const { initMembers, userLogin, userLogout, localUser } = memberSlice.actions;
export const fetchMembers = ()=> async dispatch => {
    try {
        memberDB.on('value', (snapshot)=>{
          const membersObj = snapshot.val()
          const membersArr = Object.entries(membersObj).map(([key, value]) => {
              return { key:key, ...value }; // 키와 값 모두 포함한 객체 생성
          });
          dispatch(initMembers(membersArr))
        })
      } catch (error) {
          console.error('오류:', error);
      }
}
export default memberSlice.reducer;