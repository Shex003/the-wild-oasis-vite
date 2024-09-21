import styledComponent from "styled-components";

const StyledLogo = styledComponent.div`
  text-align: center;
`;

const Img = styledComponent.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
