import H1 from "stories/page/atoms/H1/index";
import SubTitle from "stories/page/atoms/SubTitle/index";
import PostitDescriptions from "stories/page/organisms/PostitDescriptions/index";

// const Container = styled.section`
//   margin: 0rem auto 10rem auto;
//   text-align: center;
//   padding: 8rem 3rem;

//   @media (max-width: 500px) {
//     padding: 8rem 0rem;
//     min-width: 300px;
//   }
//   @media (max-width: 350px) {
//     min-width: 100%;
//   }
// `;
const style = {
  margin: "0rem auto 10rem auto",
  textAlign: "center",
  padding: "8rem 3rem",

  "@media (max-width: 500px) ": {
    padding: "8rem 0rem",
    minWidth: "300px",
  },
  "@media (max-width: 350px)": {
    minWidth: "100%",
  },
};

const IndexIntro = () => {
  return (
    <section style={style}>
      <H1>
        안녕하세요 💁🏻‍♀️ <br />
        디지털쏙 페이지 입니다.
      </H1>
      <SubTitle>
        사용중인 스마트 기기로 무엇을 할 수 있는지 알고 계시나요?
      </SubTitle>
      <PostitDescriptions />
    </section>
  );
};

export default IndexIntro;
