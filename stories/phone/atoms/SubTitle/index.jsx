import styled from "@emotion/styled";

const Container = styled.div`
  line-height: 1rem /* 16px */;
  font-size: 0.5rem /* 8px */;
  margin-left: 0.5rem /* 8px */;
  color: rgb(163 163 163);
  text-align: start;
  ${(props) => (props.style ? props.style : null)}
`;

// eslint-disable-next-line react/prop-types
const SubTitle = ({ children, style }) => {
  return (
    <Container style={style} id="display_subTitle">
      {children}
    </Container>
  );
};

export default SubTitle;