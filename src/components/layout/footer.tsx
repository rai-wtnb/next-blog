import styled from '@emotion/styled';

// css
const GridFooter = styled.footer`
  grid-area: footer;
`;
const FooterRight = styled.div`
  color: #115c79;
  font-size: 12.8px;
  float: right;
`;
// css

export const Footer = () => {
  return (
    <GridFooter>
      <FooterRight>
        <span>
          &#169;
          {`${new Date().getFullYear()} muku.`}
        </span>
      </FooterRight>
    </GridFooter>
  );
};

Footer.displayName = 'Footer';
