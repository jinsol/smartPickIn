import React from "react";
import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa6";

const Section = styled.section`
  border-top: 2px solid var(--black);
`;

const AccordionHeader = styled.h3`
  button {
    display: flex;
    width: 100%;
    align-items: center;
    cursor: pointer;
    padding: 1em 0;
    span {
      display: inline-block;
      display: flex;
      align-items: center;
      &.HeaderTitle {
        flex-basis: 80%;
        font-size: 1.4em;
      }
      &.HeaderIcon {
        flex-basis: 10%;
        justify-content: flex-end;
        svg {
          transition: all 0.3s ease-in-out;
        }
      }
    }

    &.active {
      span {
        &.HeaderTitle {
          color: var(--blue);
        }
        &.HeaderIcon svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

const Question = styled.span`
  color: var(--blue);
  font-size: 1.6em;
  font-weight: 800;
  flex-basis: 10%;
`;

const Answer = styled.span`
  color: var(--yellow);
  font-size: 1.6em;
  font-weight: 800;
  flex-basis: 10%;
`;

const AccordionCollapse = styled.div`
  background-color: var(--light-blue);
  overflow: hidden;
  height: 0;
  padding: 0;
  opacity: 0;
  transition: all 0.3s ease-in;
  .accordion-body {
    .accordion-answer {
      opacity: 0;
      transition: all 0.5s ease-in 0.3s;
      div {
        p {
          padding: 1em 0;
          span {
            display: block;
          }
        }
      }
    }
  }
  &.active {
    padding: 2% 0;
    opacity: 1;
    height: auto;
    .accordion-body {
      .accordion-answer {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  .accordion-body {
    display: flex;
    .accordion-answer {
      flex-basis: 90%;
      font-size: 1em;
      line-height: 180%;

      color: var(--black);
    }
  }
`;

const QnASection = () => {
  const onClickAccordion = (e) => {
    e.currentTarget.classList.toggle("active");
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("active");
  };

  const QnAList = [
    {
      Question: "검색결과에서 우위를 확신할 수 있나요?",
      Answer: (
        <div>
          <p>
            <span>
              우리가 사용하는 검색포탈 사이트에서 검색 결과에 대한 순위는 누구도
              확신할 수 없습니다.
            </span>
            <span>
              순위를 보증하는 회사로부터 현혹되시 마시길 권장드립니다. 다만,
              우위에 랭크되기 위해서는 공통적으로 필요한 SEO(Search Engine
              Optimazation)작업들이 존재합니다.
            </span>
          </p>

          <p>
            글(키워드)의 퀄리티와 관련된 영역들은 ON페이지 작업이라하며 타
            사이트에서 내 사이트를 어떻게 평가하고 신뢰하는지에 관한 OFF페이지
            작업이라하여 웹페이지가 검색 엔진에 잘 확인되도록 기술적인 토대를
            마련하는 테크니컬 SEO라고 하는데 이 모든 작업들이 병행이 되어야지만
            좋은 순위를 가져갈 수 있게 되는 것입니다.
          </p>

          <p>
            단순 사이트 수집 제출만 한다고 랭크되는 것은 아니며 단계별
            프로세스를 통해서 언급 된 작업들을 진행하셔야 함을 참고해 주시기
            바랍니다. 스마트픽인의 정확한 분석 시스템을 활용하여 고객님의 사이트
            수준을 먼저 확인해 보시길 바랍니다.
          </p>
        </div>
      ),
    },
    {
      Question: "검색엔진 최적화의 목적은 무엇인가요?",
      Answer: (
        <div>
          <p>
            최적화 작업의 목적은 여러분의 사이트 내 콘텐츠 정보를 검색엔진이 잘
            이해할 수 있게 정리하는 작업이라 할 수 있습니다. 또한, 해당 작업을
            통해서 검색포털의 검색 결과값이 누락되지 않도록 조치할 수도 있으며
            무엇보다 다수의 검색엔진 사용자들에게 브랜드를 알릴 수 있는 방안으로
            많이 사용되고 있습니다.
          </p>

          <p>
            실제로 SEO 최적화 작업이 진행되면 사이트의 방문자 유입이 증가될 수
            밖에 없으며 콘텐츠의 확산은 이미지, 동영상, 웹문서 영역 등을 통해서
            검색반영이 되기도 합니다. 현재 국내 포탈사이트의 경우 솔리드
            프로젝트를 진행한 이후로 E-A-T 알고리즘이 점차 적용이 되고 있습니다.
          </p>

          <p>
            즉 Experise(전문성) + Authoritativeness(권위) +
            Trustworthiness(신뢰성)을 보기 시작한 것으로 검색시에 자기
            브랜드명도 나오지 않는 경우들이 이 경우에 속합니다. 궁극적인
            목적으로는 광고라고 생각할 수 있으나 내 사이트 콘텐츠를 검색 엔진에
            보다 많이 반영될 수 있도록 하는 것이 SEO 검색엔진 최적화의 본질이라
            할 수 있습니다.
          </p>
        </div>
      ),
    },
    {
      Question: "작업 이후 효과는 언제 볼 수 있을까요?",
      Answer: (
        <div>
          <p>
            기간은 사이트의 수준과 키워드마다 다른 것이 사실이나 통상적으로는
            1개월 이내 10페이지 내로 올라오는 것을 확인 하실 수 있습니다. 물론,
            10페이지 내로 들어오는데는 사이트구조에 대한 변경 및
            백링크(링크빌딩) 작업이 선행이 되어야 합니다.
          </p>

          <p>
            SEO 최적화 작업을 모두 진행 후 첫 페이지에 반영되기까지 통상 2~3개월
            정도의 기간이 필요합니다. 이는 모든 검색엔진 사항마다 동일한
            사항이며 사이트 등록이 되어 있는 기준임을 참고해 주시길 바랍니다.
          </p>

          <p>
            사이트 등록 대행도 진행해드리고 있으니 진행 전 사이트 등록 유/무를
            꼭 확인하여 정보를 기재해 주시길 바랍니다.
          </p>
        </div>
      ),
    },
    {
      Question: "작업된 현황 및 효과를 어떻게 확인할 수 있습니까?",
      Answer: (
        <div>
          <p>
            Google Search Console에서는 기본적으로 백링크 확인이 가능합니다.
            웹사이트의 접속자 수 혹은 백링크된 문서를 추적할 수도 있습니다.
            다만, 모든 문서를 추적이 되는 것은 아니오니 이 점 유의해주시길
            바랍니다.
          </p>

          <p>
            고객의 요청시 리스트를 정리하여 전달드리오니 필요하신 분들은
            고객센터 1:1 문의 시스템을 활용하여 문의남겨주시길 바라겠습니다.
          </p>
        </div>
      ),
    },
    {
      Question: "지도플레이스 관련하여 작업은 어떻게 진행되나요?",
      Answer: (
        <div>
          <p>
            자체 시스템인 키워드리서치를 통해 브랜드와 관련된 키워드를 색출하며
            해당 키워드를 플레이스 센터를 통해 등록하게 됩니다. 형태소 및
            로컬키워드 중심으로 타당성 및 정확도를 높여 플레이스의 반영도를
            높이는 것이 가장 우선적으로 진행되는 작업입니다.
          </p>

          <p>
            다음으로 로직 및 알고리즘에 맞춰 SEO최적화 작업이 진행되며 가입시
            제공되는 마이페이지에서 실시간으로 순위변동 사항을 체크하실 수
            있습니다. 또한, 스마트플레이스센터에서 제공하는 통계시스템을 통해서
            변화된 유입수를 지켜보실 수 있을 것입니다.
          </p>

          <p>
            실제 사람들에게 홍보를 진행하는 방식으로 진행되며 이는 어뷰징 행위에
            속하지 않는 작업으로 플레이스에 있어 어떠한 악영향이 없음을
            참고바라겠습니다.
          </p>
        </div>
      ),
    },
    {
      Question: "불법프로그램 혹은 인위적인 방식으로 진행되는건 아닌가요?",
      Answer: (
        <div>
          <p>
            모든 SEO 최적화에 있어서 필수적으로 중요하게 여겨지는 것은 방문자
            유입수(Unique Vistors)입니다. 자사 시스템은 실제 사용자에게 광고
            집행되어 안전성과 정확도를 지닙니다.
          </p>

          <p>
            프로그램과 인위적인 방법이 아닌 자사 시스템의 앱과 SNS를 통한
            홍보방식으로 중복된 방문을 최대한 피하고 있으며 중요히 여겨지는 체류
            시간에 대해서도 문제 없이 진행될 수 있도록 CPC(Cost Per Click)형
            광고방안을 채택하여 진행 중에 있습니다.
          </p>
        </div>
      ),
    },
    {
      Question: "상품 및 서비스 결제수단이 궁금합니다.",
      Answer: (
        <div>
          <p>
            상품과 서비스 결제수단은 무통장입금과 카드결제를 사용하고 있습니다.
          </p>

          <p>
            단, 결제 하시기 전에 채널톡 및 상담 시스템을 통해서 사전에 고객님의
            상황을 먼저 알려주시길 바랍니다. 여러 상황에 있어서 먼저 분석하는
            것이 가장 중요한 부분이기 때문입니다. (불법/유흥/도박 관련된
            사이트의 경우 진행 불가)
          </p>

          <p>
            1:1 문의하기를 통해서 결제 전 사이트, 플레이스, 쇼핑 관련한 정보
            등을 남겨 가능 유/무 및 프로세스 안내를 받아보시길 바랍니다.
          </p>
        </div>
      ),
    },
    {
      Question: "취소 및 환불 규정에 대해서 알고 싶습니다.",
      Answer: (
        <div>
          <p>
            SEO 최적화 작업이 진행된 시점부터는 업무 특성상 환불이 불가합니다.
            다만. 작업이 전혀 이행이 되지 않은 경우에는 전액 환불이 가능함을
            참고바라겠습니다.
          </p>

          <p>
            이는 작업 특성상 공고가 나가게 되면 작업에 바로 착수되는 부분으로
            백링크와 플레이스 및 쇼핑 모두가 동일한 상황임을
            참고부탁드리겠습니다. 충분한 검토 이후 결제를 진행해주시길 바라며
            상품 설명을 잘 참고하여 진행주시길 바라겠습니다.
          </p>

          <p>
            단, 관리콘솔 시스템 등을 통해 작업된 내역이 확인되지 않는 경우는
            환불이 가능하며 경우를 따져 취소 가능한 상황은 부분 환불을 진행이
            가능합니다.
          </p>
        </div>
      ),
    },
    {
      Question: "진행이 불가한 경우는 어떤 경우인가요?",
      Answer: (
        <div>
          <p>
            SEO(Search Engine Optimazation)와 관련한 모든 작업들은 검색엔진
            가이드를 준수해야 합니다. 사이트로 이야기한다면 html 표준코딩을
            준수하여 만들어졌는지 사이트구조가 제대로 만들어졌는지가 중요한데
            기본적인 작업 수행이 안되어있는 경우 진행이 불가합니다.
          </p>

          <p>
            대부분 사이트의 경우 제작시 표준코딩으로 진행이 되기도 하지만 그렇지
            않은 경우가 많이 있으며 이 경우는 제작을 다시 하시는 것이 좋습니다.
            실제 사례로 사이트 제작 이후 3~6개월 동안 홈페이지 등록 조차 안되는
            경우들이 이에 해당합니다.
          </p>

          <p>
            또한, 불법/유흥/도박 관련 사이트 들의 경우 등록이 불가하며 등록을
            편법으로 진행하였다 하더라도 신고 및 검색엔진 AI를 통해 언제든
            삭제될 수 있다는 점을 참고바라겠습니다.
          </p>
        </div>
      ),
    },
    {
      Question: "웹접근성 인증마크나 최적화 홈페이지 제작도 가능한가요?",
      Answer: (
        <div>
          <p>
            웹접근성 인증마크(Web Accessibility Certification Mark)의 작업은
            지능정보화기본법 제 47조(장애인, 고령자 등 정보통신접근성 품질인증)
            및 동법 시행령 제3조 등에 의거하여 과학 기술정보통신부로부터 공인된
            인증기관인 (사)한국장애인단체총연합회&한국웹접근성인증평가원에서
            인증한 사이트를 말하고 있습니다.
          </p>

          <p>
            심사비용을 제외한 사이트 구조 조정 및 웹접근성 처리는 페이지 수에
            따라 다르며 필수적인 요소들을 사이트마다 고려해야하는 부분들이
            존재합니다. 시각, 이동성, 청각 및 인지 부분이 이에 속하며
            보조과학기술인 스크린리더 소프트웨어, 화면 확대 도구, 음성 인식,
            키보드 오버레이 등의 작업도 필요합니다.
          </p>

          <p>
            해당 작업의 경우는 지정해둔 가이드에 따라 모든 홈페이지의 구조변경이
            일어나야 하는 부분으로 페이지수에 따라 비용이 측정되고 있습니다.
            최적화 홈페이지의 경우도 마찬가지로 모든 페이지에 ON페이지 및
            태크니컬 SEO 작업이 동반되어 제작이 되어야 합니다.
          </p>
          <p>
            이는 전문성이 짙은 영역으로 국내 기술자(Sw사업기준)의 등급에서
            고급기술 인력자 분들에 해당하는 분들이 작업하는 부분으로 일반
            홈페이지 제작과는 수준이 다른 영역이기에 상담을 사전에 충분히
            받아보셔야 합니다.
          </p>
          <p>
            1:1 문의 시스템을 통해서 현재 홈페이지의 주소나 혹은 제작하고 싶은
            벤치마킹 사이트 주소를 보내주시면 검토 후 메일로 하여금 가견적을
            보내드리도록 하겠습니다.
          </p>
        </div>
      ),
    },
    {
      Question: "네이버 사이트 등록 절차가 어떻게 되나요?",
      Answer: (
        <div>
          <p>
            <span>
              네이버는 국내 최대 검색 엔진으로 많은 사용자들이 검색을 통해
              정보를 얻고 있습니다.
            </span>
            <span>
              따라서 사업자분들에게는 네이버에 등록하여 검색 결과에 반영하는
              것은 선택이기보단 필수에 가깝다 생각합니다.
            </span>
          </p>

          <p>
            <span>
              하지만 네이버 사이트 등록 절차가 어렵게 느껴지는 분들이 아직도
              많다고 합니다..
            </span>
            <span>
              가이드를 제공하고는 있으나 광고주 입장에서는 다소 어려울 수 있는
              영역이기도 합니다..
            </span>
          </p>
        </div>
      ),
    },
    {
      Question: "네이버 사이트 등록을 하려면 어떻게 해야 하나요?",
      Answer: (
        <div>
          <p>
            네이버 사이트 등록은 네이버 웹마스터 도구(현재는 서치어드바이저)를
            이용하여 가능합니다.
          </p>
          <p>
            <span>
              먼저 네이버 웹마스터 계정을 만드시고 해당 사이트의 소유자인지 인증
            </span>
            <span>
              (스크립트 적용 혹은 파일 업로드 대처가능)을 받은 후에 등록이
              가능합니다.
            </span>
          </p>
          <p>
            네이버 웹마스터 도구에서 사이트 등록을 누르고 사이트 주소를 입력하여
            등록절차에 맞춰 진행하시면 됩니다.
          </p>
        </div>
      ),
    },
    {
      Question:
        "네이버 사이트 등록 후 어떻게 검색 결과에 좋은 반영을 노릴 수 있나요?",
      Answer: (
        <div>
          <p>
            <span>
              네이버 사이트 등록 후 검색 결과에 좋은 반영이 되기 위해서는 검색
              엔진 최적화(SEO)를 필수적으로 진행 해야 합니다.
            </span>
            <span>
              이를 위해서는 웹사이트의 내용을 보다 풍부하게 할 필요가 있으며
              유용한 정보를 제공해야 하며 검색어에 대한 연구를 통해 적절한
              키워드를 색출 및 활용하여 컨텐츠를 작성하는 것이 중요 합니다.
            </span>
          </p>

          <p>
            ld json과 같은 데이터구조화 작업부터 표준 가이드에서 안내하는
            요소들을 파악하여 처리하는 것이 매우 중요합니다.
          </p>

          <p>
            스마트픽인에 있는 SEO테크니컬 작업
            <span>
              (https://site-high.com/server/shop/item.php?it_id=1661242608)에
              대한 안내를 참고해보시길 바랍니다.
            </span>
          </p>
        </div>
      ),
    },
    {
      Question: "네이버 사이트 등록에는 비용이 발생하나요?",
      Answer: (
        <div>
          <p>
            <span>네이버 사이트 등록은 당연히 무료 서비스 입니다.</span>
            <span>
              다만 테크니컬 SEO를 어떻게 하냐에 따라 정확도는 달라지고
              검색반영되는 랭킹순도 달라질 수 있습니다.
            </span>
          </p>

          <p>
            <span>
              SEO관련한 부분은 제작사와 무관하게 전문적인 영역이기도 하며 SW사업
              대가산정표에 있는 초급 중급 기술자분들조차도 모를 수 있습니다.
            </span>
            <span>
              검색엔진 최적화 영역은 제작보다는 광고영역에 가깝다 할 수 있기
              때문이며 수요에 비해 공급이 매우 부족한 것이 현실입니다.
            </span>
          </p>
        </div>
      ),
    },
    {
      Question: "SERP란 무엇인가요?",
      Answer: (
        <div>
          <p>
            <span>
              SERP란 Search Engine Result Page의 약자로 검색 엔진에서 검색
              결과를 보여주는 페이지를 말합니다.
            </span>
            <span>
              일반적으로 사용자는 첫 페이지에 노출되는 검색 결과 중에서 원하는
              정보를 찾아보게 됩니다.
            </span>
            <span>
              따라서, SERP 상위에 노출되는 것은 해당 검색어와 관련된 정보를
              제공하는 웹 사이트에게 매우 중요합니다.
            </span>
          </p>

          <p>*SERP 작업이 왜 중요한가요?</p>

          <p>
            <span>
              SERP 작업은 검색 결과 페이지에서 상위에 노출되기 위해 검색 엔진
              최적화(SEO)를 수행하는 것입니다.
            </span>
            <span>
              검색 엔진에서 상위에 반영되기위해서는 필수적인 요소로 중요한
              작업입니다.
            </span>
            <span>
              해당 웹 사이트의 노출 빈도가 높아지며 방문자 수도 늘어납니다
            </span>
            <span>
              SERP 작업은 회사나 개인 블로그 등 모든 웹 사이트에게 중요하게
              여겨지고 있습니다.
            </span>
          </p>

          <p>*SERP 작업을 어떻게 해야하나요?</p>

          <p>
            <span>
              SERP 작업은 검색 엔진이 해당 웹 사이트를 노출할 수 있도록
              최적화하는 것입니다.
            </span>
            <span>
              검색 엔진은 다양한 요소를 고려하여 웹 사이트를 평가합니다.
            </span>
            <span>
              예를 들어 본다면 웹 사이트의 콘텐츠 품질이나 내부 링크 구조 외
              외부 링크의 수와 품질 그리고검색어의 빈도 등이 해당 요소에
              해당합니다.
            </span>
          </p>

          <p>
            <span>
              SERP 작업을 하기 위해서는 이러한 요소들을 고려하여 검색 엔진이
            </span>
            <span>해당 웹 사이트를 노출하기 좋도록 최적화해야합니다.</span>
            <span>
              이를 위해 검색 엔진 최적화(SEO) 전문가의 도움을 받거나 다양한SEO
              도구를 이용하여
            </span>
            <span>직접 SERP 작업을 수행할 수도 있습니다</span>
          </p>
        </div>
      ),
    },
  ];

  return (
    <Section>
      {QnAList.map((item, index) => {
        return (
          <div key={index} className="accordion-item">
            <AccordionHeader className="accordion-header">
              <button
                type="button"
                aria-controls="accordionCollapseSample01"
                onClick={onClickAccordion}
              >
                <Question>Q.</Question>
                <span className="HeaderTitle">{item.Question}</span>
                <span className="HeaderIcon">
                  <FaAngleUp />
                </span>
              </button>
            </AccordionHeader>
            <AccordionCollapse
              aria-expanded="false"
              aria-labelledby="accordionHeaderSample01"
            >
              <div className="accordion-body">
                <Answer>A.</Answer>
                <div className="accordion-answer">{item.Answer}</div>
              </div>
            </AccordionCollapse>
          </div>
        );
      })}
    </Section>
  );
};

export default QnASection;
