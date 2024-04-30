import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Modal = styled.article`
  display: none;
  width: 50%;
  height: 80%;
  position: fixed;
  inset: 10% 25%;
  z-index: 100000;
  background-color: white;
  border-radius: 20px;
  /* overflow: hidden; */
  &.on {
    display: block;
  }
  .ModalHeader {
    height: 10%;
  }
  .ModalContent {
    height: 90%;
  }
`;

const ModalHeader = styled.div`
  background-color: var(--blue);
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.4rem;
    font-weight: 800;
  }
`;

const ModalContent = styled.div`
  overflow-y: scroll;
  p {
    font-size: 1rem;
    color: var(--gray02);
    line-height: 180%;
  }
`;

const Eng = styled.span`
  letter-spacing: 0;
`;

const ContentsTitle = styled.span`
  color: black;
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 2% 0;
`;

const ContentsSubTitle = styled.span`
  color: black;
  font-weight: 600;
  font-size: 1rem;
`;

const LineBreak = styled.span`
  display: block;
`;

const BtnClose = styled.button`
  font-size: 1.4rem;
  font-weight: 800;
`;

const ModalOveray = styled.div`
  &.on {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const ModalPrivacyNotice = () => {
  const onClickClose = (e) => {
    e.preventDefault();
    document.querySelector(".Modal").classList.remove("on");
    document.querySelector(".ModalOveray").classList.remove("on");
  };

  return (
    <>
      <Modal className="Modal">
        <ModalHeader className="ModalHeader">
          <h3>개인정보처리방침</h3>
          <BtnClose className="btn-close" onClick={onClickClose}>
            <MdClose />
          </BtnClose>
        </ModalHeader>
        <ModalContent className="ModalContent">
          <p>
            스마트픽인은 웹사이트<Eng>(https://site-high.com)</Eng> 이용 및 제반
            서비스 제공시 개인정보보호법령에 따라 이용자의 개인정보 보호 및
            권익을 보호하고 이용자의 고충을 원활하게 처리할 수 있도록 다음과
            같은 처리방침을 두고 있습니다.
            <ContentsTitle>1. 개인정보 수집에 대한 동의</ContentsTitle>
            <LineBreak>
              스마트픽인은 이용자가 개별 서비스 신청시 개인정보 수집 및 이용에
              동의할 수 있는 절차를 마련하고 있습니다.
            </LineBreak>
            <LineBreak>
              이용자는 동의를 거부할 수 있으며 동의를 거부하는 경우 해당 서비스
              이용이 제한될 수 있습니다.
            </LineBreak>
            <ContentsTitle>2. 개인정보 수집에 대한 동의</ContentsTitle>
            <LineBreak>
              스마트픽인은 수집한 개인정보를 다음의 목적을 위해 활용합니다.
            </LineBreak>
            <LineBreak>
              1. 서비스 이용에 따른 본인식별, 실명확인, 가입의사 확
            </LineBreak>
            <LineBreak>2. 고지사항 전달, 의사소통 경로 확보 </LineBreak>
            <LineBreak>
              3. 신규 서비스 등 최신정보 개인 맞춤 서비스 제공을 위한 자료
            </LineBreak>
            <LineBreak>
              4. 불량회원 부정 이용 방지 및 비인가 사용 방지{" "}
            </LineBreak>
            <LineBreak>5. 기타 원활한 양질의 서비스 제공</LineBreak>
            <ContentsTitle>3. 개인정보 수집 항목 및 방법</ContentsTitle>
            <LineBreak>
              스마트픽인은 기본적인 서비스 제공을 위한 필수 정보만을 수집하고
              있으며, 선택 정보의 경우 입력하지 않더라도 서비스 이용이 제한되지
              않습니다.
            </LineBreak>
            <LineBreak>
              스마트픽인은 수집한 정보를 이용 목적 외의 목적으로 사용하지
              않습니다.
            </LineBreak>
            <ContentsSubTitle>[회원가입 수집항목]</ContentsSubTitle>
            <LineBreak>이름, 휴대전화번호, 이메일, 업체명</LineBreak>
            <ContentsSubTitle>[문의하기 수집항목]</ContentsSubTitle>
            <LineBreak>기업명, 연락처, 이메일, 사이트</LineBreak>
            <ContentsTitle>4. 개인정보의 보유 및 이용기간</ContentsTitle>
            <LineBreak>회원가입을 탈퇴하거나 회원에서 제명된 때 까지</LineBreak>
            <LineBreak>
              (다만, 수집목적 또는 제공받은 목적이 달성된 경우에도 상법 등
              법령의 규정에 의하여 보존할 필요성이 있는 경우에는 귀하의
              개인정보를 보유할 수 있습니다.)
            </LineBreak>
            <ContentsTitle>5. 동의철회 / 회원탈퇴 방법</ContentsTitle>
            <LineBreak>
              귀하는 회원가입 시 개인정보의 수집 · 이용 및 제공에 대해 동의하신
              내용을 언제든지 철회하실 수 있습니다.
            </LineBreak>
            <LineBreak>
              회원탈퇴는 개인정보관리책임자로 서면, 전화 또는 Fax 등으로
              연락하시면 지체 없이 귀하의 개인정보를 파기하는 등 필요한 조치를
              하겠습니다.
            </LineBreak>
            <ContentsTitle>
              6. 개인정보 자동 수집 장치의 설치/운영 및 그 거부에 관한 사항
            </ContentsTitle>
            <LineBreak>
              스마트픽인은 귀하의 정보를 수시로 저장하고 찾아내는
              &apos;쿠키(cookie)&apos;를 운용합니다.
            </LineBreak>
            <LineBreak>
              쿠키란 스마트픽인의 웹사이트를 운영하는데 이용되는 서버가 귀하의
              브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
              하드디스크에 저장됩니다.
            </LineBreak>
            <LineBreak>
              스마트픽인은 다음과 같은 목적을 위해 쿠키를 사용합니다.
            </LineBreak>
            <LineBreak>
              귀하는 쿠키 설치에 대한 권한을 가지고 있습니다. 따라서, 귀하는 웹
              브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가
              저장될 때마다 확인을 거치거나,
            </LineBreak>
            <LineBreak>
              아니면 모 쿠키의 저장을 거부할 수도 있습니다. 회원님께서 쿠키
              설치를 거부하셨을 경우 일부 서비스 제공에 어려움이 있을 수
              있습니다.
            </LineBreak>
            <ContentsTitle>7. 개인정보관리책임자</ContentsTitle>
            <LineBreak>
              귀사의 개인정보를 보호하고 개인정보와 관련된 불만을 처리하기
              위하여 스마트픽인은 아래와 같이 개인정보관리책임자를 두고
              있습니다.
            </LineBreak>
            <ContentsSubTitle>[개인정보 관리책임자]</ContentsSubTitle>
            <LineBreak>이름 : 임연정</LineBreak>
            <LineBreak>전화번호 : 1588-1815 (내선번호 2번)</LineBreak>
            <LineBreak>이메일 : hlstorycom@daum.net</LineBreak>
            <LineBreak>
              귀하께서는 스마트픽인의 서비스를 이용하시며 발생하는 모든
              개인정보보호 관련 민원을 개인정보관리책임자로 신고하실 수
              있습니다.
            </LineBreak>
            <LineBreak>
              스마트픽인은 이용자들의 신고사항에 대해 신속하게 충분한 답변을
              드릴 것입니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신
              경우에는 아래 기관에 문의하시기 바랍니다.
            </LineBreak>
            <LineBreak>
              개인분쟁조정위원회 (http://www.1336.or.kr / 1336)
            </LineBreak>
            <LineBreak>
              정보보호마크인증위원회 (http://www.eprivacy.or.kr / (02) 580-0533
              ~ 4)
            </LineBreak>
            <LineBreak>
              대검찰청 사이버번죄수사단 (http://www.spo.go.kr / (02) 3480-3573)
            </LineBreak>
            <LineBreak>
              경찰청 사이버테러대응센터 (http://www.ctrc.go.kr / (02) 392-0330)
            </LineBreak>
            <ContentsTitle>8. 개인정보의 안전성 확보조치</ContentsTitle>
            <LineBreak>
              스마트픽인은 이용자의 개인정보보호를 위한 기술적 대책으로서 여러
              보안장치를 마련하고 있습니다.
            </LineBreak>
            <LineBreak>
              이용자께서 보내시는 모든 정보는 방화벽장치에 의해 보호되는
              보안시스템에 안전하게 보관/관리되고 있습니다.
            </LineBreak>
            <LineBreak>
              또한 본원은 이용자의 개인정보보호를 위한 관리적 대책으로서
              이용자의 개인정보에 대한 접근 및 관리에 필요한 절차를 마련하고,
              이용자의 개인정보를 취급하는
            </LineBreak>
            <LineBreak>
              인원을 최소한으로 제한하여 지속적인 보안교육을 실시하고 있습니다.
              또한 개인정보를 처리하는 시스템의 사용자를 지정하여 사용자
              비밀번호를 부여하고
            </LineBreak>
            <LineBreak>이를 정기적으로 갱신하겠습니다.</LineBreak>
            <ContentsTitle>9. 정책 변경에 따른 공지의무</ContentsTitle> 현
            개인정보처리방침 내용의 추가 · 삭제 및 수정이 있을 시에는 변경되는
            개인정보처리방침을 시행하기 최소 7일전에 스마트픽인 홈페이지를 통해
            변경이유 및 내용 등을 공지하도록 하겠습니다.
            <LineBreak>개인정보 시행일자 : 2018. 12</LineBreak>
          </p>
        </ModalContent>
      </Modal>
      <ModalOveray className="ModalOveray" onClick={onClickClose}></ModalOveray>
    </>
  );
};

export default ModalPrivacyNotice;
