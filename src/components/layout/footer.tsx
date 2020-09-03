import styled from '@emotion/styled';
import { Icon } from 'semantic-ui-react';

// css
const GridFooter = styled.footer`
  grid-area: footer;
`;
const FooterRight = styled.div`
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
