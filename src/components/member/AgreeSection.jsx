import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'
import { CiCircleList } from "react-icons/ci";
import cn from 'classnames'

const AgreeSectionBlock = styled.div`
    padding: 150px 30px;
    max-width: 1100px;
    margin: 0 auto;
   

.agreeWrap{
    margin: 0 auto;
  transform: translateY(-250px);
  opacity: 0;
  transition: all 0.9s ease;
  &.on{
    transform: translateY(0px);
  opacity: 1;
  }
    
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
.agreeTitle{
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
//인풋타입 공통
    .agSection01,.agSection02,.agSection03{
            border: 1px solid var(--gray06);
            border-radius: 20px;
            margin-bottom: 50px; 
            
    } //공통 스타일
        h2:nth-child(1), h2:nth-child(2){
            font-size:1.3em;
            display: flex;
            color: var(--blue);
            border-bottom: 1px solid var(--gray06);
            justify-content: space-between;
            /* background: var(--blue); */
            padding: 17px;
            line-height: 25px;
            border-top-left-radius: 20px ;
            border-top-right-radius: 20px ;
        } 
        //공통 style
        .agSection01{
            label{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid var(--gray06);
                width: 100%;
                padding: 0 10px;
                cursor: pointer;

            }
            /* input{
            }
            input, checkbox{
                accent-color:white;

                
            } */

            .agreeText{
                overflow-y: scroll;
                overflow-x: hidden;
                font-size: 1em;
                padding: 20px;
                height: 150px;
                line-height: 30px;
                text-align: center;
                &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--blue-hover);
    height: 50px;
    padding: 0 10px;
    border-radius: 20px;
    margin: 0 10px;

  }
  &::-webkit-scrollbar-track {
    background-color: #DFEFFE;

  }
            }
        }
        .agSection02{
            label{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid var(--gray06);
                width: 100%;
                padding: 0 10px;
                cursor: pointer;

            }
            table{
                border:none;
                width: 100%;
                tr{
                    td{
                        padding: 10px 0;
                        text-align: center;
                        @media (max-width:550px){
                            font-size: 0.9em;
                        }
                    }
                   
                }
                thead{
                    border-bottom: 1px solid var(--gray06);
                }
                tbody{
                        tr:nth-child(1){
                            border-bottom: 1px solid var(--gray06);
                        }
                    }
            }
        }
        .agSection03{
            label{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
                cursor: pointer;
            }
            h2{
                color: var(--gray02);
                font-weight: 400;
                border-bottom: none;
            }
        }

        .btn{
            display: flex;
            width: 100%;
            button{
                width: 100%;
                text-align: center;
                padding: 20px;
                margin: 5px;
                border-radius: 20px;
                font-size: 1.2em;
                font-weight: 600;
                &:nth-child(1){
                    color: var(--gray02);
                    background: var(--gray06);
                    transition: all 0.5s ease;
                    &:hover{
                        background: var(--gray05)
                    }
                }
                &:nth-child(2){
                    background:var(--blue);
                    color: var(--white);
                    transition: all 0.5s ease;
                    &:hover{
                        background: var(--blue-hover)
                    }
                }
            }
        }
     
    }
           
`

const AgreeSection = () => {
    const [viewOpen, setViewOpen] = useState(false)
    const [personalInfoAgreed, setPersonalInfoAgreed] = useState(false);
    const [collectionAgreed, setCollectionAgreed] = useState(false);
    const [allAgreed, setAllAgreed] = useState(false);
    const navigate = useNavigate()
  
    const handleAllAgreeChange = () => {
      const newAllAgreed = !allAgreed;
      setAllAgreed(newAllAgreed);
      setPersonalInfoAgreed(newAllAgreed);
      setCollectionAgreed(newAllAgreed);
    };
  
    const handlePersonalInfoChange = () => {
      setPersonalInfoAgreed(!personalInfoAgreed);
    };
  
    const handleCollectionChange = () => {
      setCollectionAgreed(!collectionAgreed);
    };
    const submit = ()=>{
        if(collectionAgreed && personalInfoAgreed){
            alert('회원가입 페이지로 이동합니다.')
            navigate('/join')
        } else if(!collectionAgreed && !personalInfoAgreed) {
            alert("회원가입 약관 및 개인정보 수집 및 이용에 동의해주세요.")
        } else if(collectionAgreed && !personalInfoAgreed){
            alert("회원가입 약관에 동의해주세요.")
        }else if(!collectionAgreed && personalInfoAgreed){
            alert("개인정보 수집 및 이용에 동의해주세요.")
        }
    }

    useEffect(()=>{
        setViewOpen(true)
    },[])

   

    return (
        <AgreeSectionBlock>
           <div className={cn("agreeWrap", viewOpen && 'on')}>
           {/* <div className={cn("menu-wrap", isOpen ? "open" : '')}  onClick={toggleMenu}  > */}
            <div className="agreeTitle">
                <h1><CiCircleList /></h1>
                <h1>약관동의</h1>
            </div>
            <div className="agSection01">
            <label htmlFor="personalInfoCheckbox" style={{ display: 'flex', alignItems: 'center' }}>
    <h2 style={{ cursor: 'pointer', marginRight: '10px', marginBottom: '0' }}>회원가입 약관</h2>
    <input 
        type="checkbox" 
        id="personalInfoCheckbox"
        checked={personalInfoAgreed} 
        onChange={handlePersonalInfoChange} 
        style={{ marginRight: '5px', marginBottom: '0' }} // 스타일 조정
    />
</label>
<p className='agreeText'>
                제1조 (목적)
이 약관은 스마트픽인 회사(광고대행)이 운영, 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)의 이용에 관한 스마트픽인과 이용자의 권리·의무 및 책임사항 등을 규정함을 목적으로 합니다.
※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」

제2조 (정의)
본 약관에서 사용하는 용어의 정의는 다음의 각 호와 같습니다.
1. “이용자”: “해당사이트”에 접속하여 이 약관에 따라 스마트픽인이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
2. ‘회원’: 스마트픽인에 개인정보를 제공하여 회원등록을 한 자로서 정보를 지속적으로 제공받으며 스마트픽인이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
3. ‘비회원’: 회원에 가입하지 않고 스마트픽인이 제공하는 서비스를 이용하는 자를 말합니다.

제3조 (약관 등의 명시와 설명 및 개정)
1. 스마트픽인은 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호ㆍ모사전송번호ㆍ전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보관리책임자 등을 사이트 초기 서비스화면(전면)에 게시하여 사용자가 쉽게 알 수 있도록 합니다. 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 합니다.
2. 스마트픽인은 이용자가 약관에 동의하기에 앞서 스마트픽인이 정한 약관에 정하여져 있는 내용 중 환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
3. 스마트픽인은 전자상거래등에서의소비자보호에관한법률, 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
4. 스마트픽인은 약관을 개정할 경우에는 적용일자 및 개정사유를 사용자들이 알 수 있게 현행약관과 함께 사이트 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다.
단, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우도 스마트픽인은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 사이트 초기화면에 공지합니다.
5. 스마트픽인은 약관을 개정할 경우, 개정 후 약관은 적용일자 이후에 체결되는 계약에만 적용합니다. 단, 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 밝혔을 경우, 제3항에 의한 개정약관의 공지기간 내에 스마트픽인에 의사를 표하여 동의를 받은 경우에 한정해 개정약관 조항이 적용됩니다.
6. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다.

제4조 (서비스의 제공 및 변경)
1. 스마트픽인은 다음과 같은 업무를 수행합니다.
1) 마케팅상품에 대한 정보 제공 및 구매계약의 체결
2) 기타 스마트픽인이 정하는 업무
마케팅은 마케팅상품의 서비스 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 마케팅상품을 변경할 수 있습니다. 이 경우에는 내용 및 제공일자를 명시하여 현재의 마케팅상품 내용을 게시한 곳에 즉시 공지합니다.
2. 스마트픽인이 제공하는 마케팅상품의 서비스 변경 등의 사유가 발생할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.
3. 제4조 2항의 경우 스마트픽인은 이로 인하여 이용자가 입은 손해를 배상합니다. 단, 스마트픽인의 서비스 변경 사유가 고의적 행위가 아니거나 과실이 없음을 입증한다면 그러하지 않습니다.

제5조 (서비스의 중단)
1. 스마트픽인은 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 서버 상의 문제 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
2. 스마트픽인은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자가 입은 손해에 대하여 배상합니다. 단, 스마트픽인이 고의적 행위가 아니거나 과실이 없음을 입증한다면 그러하지 않습니다.
3. 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 스마트픽인은 제8조에 정한 방법으로 이용자에게 통지하고 기존에 제시한 조건에 따라 소비자에게 보상합니다. 단, 보상기준 등이 정확하게 고지되지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 스마트픽인에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.

제6조 (회원가입)
1. 이용자는 스마트픽인이 정한 가입 양식에 따라 회원정보를 기입 완료한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입 신청을 할 수 있습니다.
2. 스마트픽인은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다.
1) 가입신청자가 이 약관 제7조 3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우.
단, 회원자격 상실 후 3년이 경과했으며 스마트픽인의 회원재가입 승낙을 얻은 경우에 한 해 회원으로 등록합니다.
2) 등록 내용에 허위, 기재 누락, 오기가 있는 경우
3) 기타 회원으로 등록하는 것이 스마트픽인의 기술상 현저히 지장이 있다고 판단되는 경우
3. 회원가입계약의 성립시기는 스마트픽인의 승낙이 회원에게 도달한 시점으로 합니다.
4. 회원은 제15조 1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편 기타 방법으로 스마트픽인에 그 변경사항을 알려야 합니다.

제7조 (회원 탈퇴 및 자격 상실 등)
1. 회원은 언제든지 스마트픽인에 회원 탈퇴를 요청할 수 있으며, 스마트픽인은 요청에 대한 문제가 없다는 사실을 확인한 즉시 회원탈퇴 처리합니다.
2. 회원이 다음 각호의 사유에 해당하는 경우, 스마트픽인은 회원자격을 제한 및 정지시킬 수 있습니다.
1) 가입 신청시에 허위 내용을 등록한 경우
2) 다른 사람의 스마트픽인 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
3) 스마트픽인을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
3. 스마트픽인이 회원 자격을 제한·정지에 대한 1차적인 경고 이후, 동일한 행위가 2회 이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 회원으로서의 자격을 상실시킬 수 있습니다.
4. 스마트픽인이 회원자격을 상실시키는 경우에는 회원 정보에 대한 기록을 말소시킵니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.

제8조 (회원에 대한 통지)
1. 스마트픽인이 회원에 대한 통지를 하는 경우, 회원이 직접 작성한 회원 등록 정보에 쓰인 전자우편 주소로 할 수 있습니다.
2. 스마트픽인은 불특정다수 회원에 대한 통지의 경우 제3조에 의거하여 1주일이상 게시판에 게시하여 개별 통지에 갈음할 수 있습니다. 단, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 하는 것을 원칙으로 합니다.

제9조 (구매신청)
스마트픽인 이용자는 사이트에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다. 단, 회원인 경우 제2호부터 제4호의 적용을 제외할 수 있습니다.
1. 마케팅상품의 검색 및 선택
2. 약관내용, 청약철회권이 제한되는 서비스의 비용부담과 관련한 내용에 대한 확인
3. 이 약관에 동의하고 위 3호의 사항을 확인하거나 거부하는 표시(예, 마우스 클릭)
4. 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호) 등의 입력
5. 마케팅상품의 구매신청 및 이에 관한 확인 또는 스마트픽인의 확인에 대한 동의
6. 결제방법의 선택

제10조 (계약의 성립)
1. 스마트픽인은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하면 승낙하지 않을 수 있습니다.
1) 신청 내용에 허위, 기재누락, 오기가 있는 경우
2) 기타 구매신청에 승낙하는 것이 스마트픽인 기술상 현저히 지장이 있다고 판단하는 경우
다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 사전에 고지함을 원칙으로 합니다.
2. 스마트픽인의 승낙이 제12조 1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.
3. 스마트픽인의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및 판매가능 여부, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야 합니다.

제11조 (지급방법)
스마트픽인 사이트에서 구매한 마케팅 상품 대금 지급은 다음 각 호에 제시된 방법들을 사용합니다. 단, 스마트픽인은 이용자가 정한 지급방법에 대하여 어떠한 명목의 수수료도 추가로 징수할 수 없습니다.
1) 폰뱅킹, 인터넷뱅킹 등의 각종 계좌이체
2) 선불카드, 직불카드, 신용카드 등의 각종 카드 결제 – 개인결제에 한함.
3) 온라인 무통장입금

제12조 (마케팅상품의 공급)
스마트픽인은 이용자와 마케팅상품의 공급시기에 관하여 상호간의 날짜를 지정하고 그렇지 않은 경우에도 청약을 한 날부터 업무진행을 할 수 있도록 조치를 취합니다. 이 때 스마트픽인은 이용자가 진행 사항을 확인할 수 있도록 별도의 조치를 취합니다.

제13조 (환급)
스마트픽인은 이용자가 마케팅 상품 등이 변경 등의 사유로 제공을 할 수 없을 때에는 그 사유를 이용자에게 통지하고 사전에 대금을 받은 경우에는 서비스 제공할 수 없음을 밝힌 날부터 영업일 기준으로 3일 이내에 환급하거나 환급에 필요한 조치를 진행합니다.

제14조 (청약철회 등)
1. 마케팅과 상품의 구매에 관한 계약을 체결한 이용자는 수신확인의 통지를 받은 날부터 24시간 이내에 한하여 청약철회를 진행할 수 있습니다.
2. 이용자는 제1항 및 제2항의 규정에 불구하고 상품의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 마케팅서비스를 공급받은 날부터 7일 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회를 신청할 수 있습니다.
3. 제4조 2항에 따라 서비스 변경에 관한 고지를 하지 않았을 경우는 이용자의 청약철회 등이 제한되지 않습니다.

제15조 (청약철회 등의 효과)
1. 이용자로부터 청약철회 요청이 들어왔을 경우 영업일 기준으로 3일 이내에 이미 지급받은 상품 등의 대금을 환급합니다. 이 경우 스마트픽인이 이용자에게 상품 등의 환급을 지연한 때에는 그 지연기간에 대하여 공정거래위원회가 정하여 고시하는 지연이자율을 곱하여 산정한 지연이자를 지급함을 원칙으로 합니다.
2. 스마트픽인은 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 상품의 대금을 지급한 때에는 지체없이 당해 결제수단을 제공한 사업자로 하여금 상품 등의 대금의 청구를 정지 또는 취소하도록 요청합니다.
3. 스마트픽인은 이용자에게 청약철회 등을 이유로 위약금 또는 손해배상을 청구할 수 없습니다. 또한 상품의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행되어 청약철회 등을 진행하는 경우 반환에 필요한 비용은 전액 스마트픽인에서 부담합니다.

제16조 (개인정보보호)
1. 스마트픽인은 이용자의 정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 다음 사항을 필수사항으로 하며 그 외 사항은 선택사항으로 합니다.
(1) 성명
(2) 주민등록번호 또는 외국인등록번호 (회원의 경우)
(3) 주소
(4) 전화번호
(5) 희망ID(회원의 경우)
(6) 비밀번호(회원의 경우)
(7) 전자우편주소
2. 스마트픽인이 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 이용자의 동의를 받습니다.
3. 제공된 개인정보는 이용자의 동의없이 제3자에게 제공할 수 없으며 다른 목적을 위해 사용할 수 없습니다. 위 사항을 지키지 않을 경우 모든 책임은 스마트픽인에 있습니다.
단, 다음의 경우에는 예외로 합니다.
1) 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우.
2) 상품 등의 거래에 따른 대금정산을 위하여 필요한 경우.
3) 도용방지를 위하여 본인확인에 필요한 경우.
4) 법률의 규정 또는 법률에 의하여 필요한 불가피한 사유가 있는 경우.
5) 스마트픽인 계열사 정보 제공 목적으로 활용되는 경우 (스팸성 광고가 아닌 정보공유 목적)
4. 스마트픽인이 제3자에게 개인정보 제공을 위해 제2항에 의거 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은 자, 제공목적 및 제공할 정보의 내용) 등 정보통신망이용촉진등에관한법률 제22조 2항이 규정한 사항을 미리 명시하거나 고지해야 합니다. 또한, 이용자는 언제든지 이 동의를 철회할 수 있습니다.
5. 이용자는 언제든지 스마트픽인이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.
6. 스마트픽인은 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.
7. 스마트픽인 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기함을 원칙으로 하며, 개인정보의 보관기관은 동의일로 최대 2년으로 한정합니다.

제17조 (스마트픽인의 의무)
1. 스마트픽인은 법령과 본 약관이 금지하는 행위를 하지 않으며 본 약관이 정한 바를 따라 지속적이고, 안정적으로 상품 · 용역을 제공하는데 최선을 다해야 합니다.
2. 스마트픽인은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 하며, 개인정보보호에 최선을 다해야 합니다.
3. 스마트픽인이 상품이나 용역에 대하여 「표시 · 광고의공정화에관한법률」 제3조 3항에 의거하여 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.
4. 스마트픽인은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.

제18조 (회원의 ID 및 비밀번호에 대한 의무)
1. 제17조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다.
2. 회원은 자신의 ID 및 비밀번호를 제3자에게 제공하지 않는 것을 원칙으로 합니다.
3. 회원이 자신의 ID 및 비밀번호를 도난당한 경우, 즉, 제3자가 사용하고 있음을 인지한 경우에는 바로 스마트픽인에 통보하고 안내가 있는 경우에는 그에 따라야 합니다.

제19조 (이용자의 의무)
이용자는 다음 행위를 해서는 안됩니다.
(1) 신청 또는 변경 시 허위 내용의 등록
(2) 타인의 정보 도용
(3) 스마트픽인에 부적절한 정보의 게시
(4) 스마트픽인이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
(5) 스마트픽인 기타 제3자의 저작권 등 지적재산권에 대한 침해
(6) 스마트픽인 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
(7) 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 스마트픽인에 공개 또는 게시하는 행위

제20조 (저작권의 귀속 및 이용제한)
1. 스마트픽인이 작성한 저작물에 대한 저작권 및 기타 지적재산권은 스마트픽인에 귀속합니다.
2. 이용자는 스마트픽인을 이용함으로써 얻은 정보 중 스마트픽인에 지적재산권이 귀속된 정보를 스마트픽인의 사전 승인없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
3. 스마트픽인이 이용자의 저작물을 사용하는 경우 약정에 따라 이용자에게 통보하여야 합니다.
제21조(분쟁해결)
1. 스마트픽인은 이용자가 서비스 이용 관련하여 정당한 의견이나 불만을 적극 반영하고 그 피해를 관리하기 위하여 피해보상처리기구를 설치·운영합니다.
2. 스마트픽인은 이용자가 서비스 이용 관련하여 제출한 불만사항 혹은 의견에 대하여 최우선적으로 해당 사항을 처리합니다. 단, 즉각적인 처리가 불가할 경우 이용자에게 사유와 처리일정을 즉시 통보합니다.
3. 스마트픽인과 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.

제22조(재판권 및 준거법)
1. 스마트픽인과 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.
2. 스마트픽인과 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다
                </p>
            </div>
            <div className="agSection02">
            <label htmlFor="collectionCheckbox">
    <h2 style={{ cursor: 'pointer' }}>개인정보 수집 및 이용</h2>
    <input 
        type="checkbox" 
        id="collectionCheckbox"
        checked={collectionAgreed} 
        onChange={handleCollectionChange} 
    />
</label>

                <table>
                    <thead style={{textAlign:'center'}}>
                        <tr>
                            <td>목적</td>
                            <td>항목</td>
                            <td>보유기간</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>이용자 식별 및 본인여부 확인</td>
                            <td>아이디, 이름, 비밀번호</td>
                            <td>회원 탈퇴 시까지</td>
                        </tr>
                        <tr>
                            <td>고객서비스 이용에 관한 통지,<br /> CS대응을 위한 이용자 식별</td>
                            <td>연락처 (이메일, 휴대전화번호)</td>
                            <td>회원 탈퇴 시까지</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="agSection03">
            <label htmlFor="allAgreedCheckbox">
    <h2 style={{ cursor: 'pointer' }}>회원약관의 모두 동의합니다</h2>
    <input 
        type="checkbox" 
        id="allAgreedCheckbox"
        checked={allAgreed} 
        onChange={handleAllAgreeChange} 
    />
</label>
            </div>
            <div className="btn">
                <button type='button'>취소</button>
                <button type='button' onClick={submit}>확인</button>
            </div>
           </div>
        </AgreeSectionBlock>
    );
};

export default AgreeSection;