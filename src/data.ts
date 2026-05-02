import gwonyulImg from './assets/images/regenerated_image_1777748650055.png';
import gwakdoImg from './assets/images/gwakdo.png';
import paengImg from './assets/images/paeng.png';
import meiImg from './assets/images/mei.png';
import yanghoImg from './assets/images/yangho.png';
import jinsabuImg from './assets/images/jinsabu.png';

import baekrangImg from './assets/images/baekrang.png';
import doksaImg from './assets/images/doksa.png';
import bulgomImg from './assets/images/bulgom.png';
import jeokhoImg from './assets/images/jeokho.png';
import wrenchImg from './assets/images/wrench.png';
import ppiyagiImg from './assets/images/ppiyagi.png';

import haewonImg from './assets/images/haewon.png';
import sihyunImg from './assets/images/sihyun.png';
import hongranImg from './assets/images/hongran.png';
import chunbaeImg from './assets/images/chunbae.png';

export const worldData = {
  title: "2005 월성 차이나타운",
  description: "시대: 2005년, 초고속 인터넷과 슬라이드폰이 보급된 디지털 시대. 치외법권 자치 구역으로 낮엔 평범, 밤엔 범죄가 일어난다. 금룡회는 '도시의 질서와 돈'을, 해조파는 '물류와 흐름'을 장악하며 서로 의존적인 권력 균형 형성하고 있으며, 이들의 갈등 본질은 영역 다툼이 아닌 '흐름과 통제권'을 둘러싼 권력 싸움이다.",
  coreRelationship: {
    title: "권력의 균형과 공생",
    description: "금룡회 두목 '권율'과 해조파 두목 '백랑'은 10대 시절 밑바닥부터 함께 구른 동갑내기 불알친구이자 찐친. 대외적으로는 구역과 이권을 두고 피 터지게 싸우는 앙숙이지만 실제로는 서로 없으면 조직이 굴러가지 않는 공생 관계다. 극단적으로 충돌하면서도 개인 간에는 '직접 죽이지 않는다'는 암묵적 룰이 존재한다. 밤에는 포장마차에서 술을 마시며 서로에게 쌍욕을 박는 유일한 관계."
  },
  places: [
    { name: "금룡대반점(金龍大飯店)", desc: "금룡회 본진. 1, 2층은 고급 식당, 3층은 금룡회 사무실." },
    { name: "제1부두 폐창고 & 바이크 게러지", desc: "해조파 본진. 기름 냄새와 엔진 굉음이 울리는 거친 항구." },
    { name: "홍명(紅明) PC방", desc: "서해원 거점이며 중앙 교차로. 정보 거래소이자 중립 구역." },
    { name: "관할서 강력반", desc: "강시현 거점. 치외법권의 경계선." },
    { name: "화양다방(花樣茶房)", desc: "홍란 거점. 붉은 등이 켜진 전통 찻집 겸 밀회 장소." }
  ],
  factions: [
    {
      id: "geumryong",
      name: "금룡회 (金龍會)",
      type: "전통파",
      theme: "dragon-red",
      description: "도시의 질서와 돈을 장악하는 보수 세력. 위장 사업인 고급 식당 운영으로 합법적 외피를 유지하며, 차이나타운 내 상권 분쟁을 조정하고 정보와 자금을 통제한다.",
      leader: {
        name: "권율",
        role: "금룡회 두목 / 1인자",
        image: gwonyulImg,
        age: "34세",
        mbti: "INTJ",
        bloodType: "미상",
        duty: "조직 통제, 상권 분쟁 조정 및 자금 관리 총괄"
      },
      businesses: [
        { name: "상권 장악", desc: "차이나타운 내 식당, 술집, 상점 보호비(자릿세) 징수 및 분쟁 조정" },
        { name: "유통 & 도매", desc: "밀수품 포함 식자재, 주류, 전자기기 등 도심 유통망 관리" },
        { name: "자금 관리", desc: "현금 회수, 자금 세탁, 장부 관리 및 조직 재정 운영" },
        { name: "정보 통제", desc: "상인, 업주, 중개인을 통한 지역 정보 수집 및 통제" },
        { name: "해결사 업무", desc: "문제 상인, 배신자, 외부 조직에 대한 정리 작업" },
        { name: "위장 사업", desc: "금룡대반점 중심 고급 식당 운영으로 합법적 외피 유지" }
      ],
      members: [
        { name: "곽도", role: "행동대장", image: gwakdoImg, age: "33세", mbti: "ISTJ", bloodType: "A형", duty: "조직원 통솔 및 현장 진압" },
        { name: "팽 실장", role: "회계 총괄", image: paengImg, age: "42세", mbti: "ESTJ", bloodType: "AB형", duty: "자금 세탁 및 장부 관리" },
        { name: "메이", role: "암살자", image: meiImg, age: "27세", mbti: "ISTP", bloodType: "B형", duty: "배신자 및 위험 인물 처리" },
        { name: "양호", role: "운전수 겸 호위", image: yanghoImg, age: "25세", mbti: "ESFJ", bloodType: "O형", duty: "간부 운전 및 철벽 호위" },
        { name: "진 사부", role: "주방장", image: jinsabuImg, age: "53세", mbti: "ISFJ", bloodType: "A형", duty: "금룡대반점 총괄 주방장 및 비상 시 전투 지원" }
      ]
    },
    {
      id: "haejo",
      name: "해조파 (海潮派)",
      type: "신흥파",
      theme: "wave-blue",
      description: "물류와 흐름을 장악하는 항구 거점의 신흥 세력. 룰을 깨부수고 이권을 탐하며, 거칠고 통제되지 않는 폭력적인 에너지를 뿜어낸다.",
      leader: {
        name: "백랑",
        role: "해조파 두목 / 1인자",
        image: baekrangImg,
        age: "34세",
        mbti: "ESTP",
        bloodType: "미상",
        duty: "항구 점거, 밀수 라인 및 유통 통제"
      },
      businesses: [
        { name: "밀수 & 물류", desc: "컨테이너 조작, 세관 회피, 불법 수입품 유통" },
        { name: "무기 & 차량", desc: "밀수 무기, 개조 차량 및 바이크" },
        { name: "항구 장악", desc: "하역 인부 통제, 작업 순서 개입, 보호비 갈취" },
        { name: "불법 운송", desc: "밀항, 인신 밀수, 도주 루트 제공" },
        { name: "유흥 & 세탁", desc: "항구 기반 룸살롱 및 사창가 운영, 자금 세탁" },
        { name: "정보", desc: "선박 입출항 및 밀수 정보 거래" }
      ],
      members: [
        { name: "독사", role: "브레인", image: doksaImg, age: "31세", mbti: "ENTJ", bloodType: "A형", duty: "밀수 라인 및 돈 관리 담당" },
        { name: "불곰", role: "돌격대장", image: bulgomImg, age: "28세", mbti: "ESTP", bloodType: "B형", duty: "항구 현장 통제" },
        { name: "적호", role: "포주", image: jeokhoImg, age: "33세", mbti: "ESTJ", bloodType: "O형", duty: "해조파 자금줄인 불법 유흥과 자금 세탁 관리" },
        { name: "렌치", role: "정비 / 무기 밀수", image: wrenchImg, age: "26세", mbti: "INTP", bloodType: "AB형", duty: "무기, 차량, 밀수품 개조 기술자" },
        { name: "삐약이", role: "막내", image: ppiyagiImg, age: "20세", mbti: "ESFP", bloodType: "O형", duty: "심부름 전담 및 사고 트리거" }
      ]
    }
  ],
  neutrals: [
    { name: "서해원", role: "천재 해커 / PC방 사장", image: haewonImg, age: "29세", mbti: "INTP", bloodType: "AB형", duty: "CCTV 해킹을 통한 퇴로 확보 및 정보 수집" },
    { name: "강시현", role: "관할서 강력반 형사", image: sihyunImg, age: "34세", mbti: "ENTP", bloodType: "B형", duty: "양쪽 세력에서 뒷돈을 챙기는 비리 경찰" },
    { name: "홍란", role: "화양다방 마담", image: hongranImg, age: "33세", mbti: "ENFJ", bloodType: "O형", duty: "정재계 로비스트 및 고급 정보 중개" },
    { name: "춘배", role: "동네 바보", image: chunbaeImg, age: "27세", mbti: "ENFP", bloodType: "AB형", duty: "이곳저곳을 배회하며 비밀을 노래로 발설" }
  ]
};
