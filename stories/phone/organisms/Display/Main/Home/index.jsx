import styled from "@emotion/styled";
import Phone from "stories/phone/molecules/Phone";
import AppLine from "stories/phone/molecules/AppLine";

const Container = styled.div`
  height: 300px;
  display: grid;
  grid-template-rows: repeat(8, 37px);
  font-size: 0.8rem;
  align-self: center;
  padding: 0 5px;
`;

// eslint-disable-next-line react/prop-types
const Home = ({ kakaotalk, call, message }) => {
  return (
    <Phone>
      <Container>
        <AppLine />
        <AppLine />
        <AppLine />
        <AppLine />
        {/*  */}
        <AppLine />
        <AppLine />
        <AppLine appList={[{ name: "chat-fill", targetOption: kakaotalk }]} />
        <AppLine
          appList={[
            { name: "telephone", targetOption: call },
            { name: "camera", targetOption: false },
            { name: "clock", targetOption: false },
            { name: "browser-chrome", targetOption: false },
            { name: "chat-dots", targetOption: message },
          ]}
        />
      </Container>
    </Phone>
  );
};

export default Home;