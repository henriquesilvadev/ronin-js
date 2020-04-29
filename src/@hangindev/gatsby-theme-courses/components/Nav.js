import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

const OuterWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary900};
`;

const Wrapper = styled.nav`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-betwee;
  align-items: center;
  color: '#FFF';
`;

const List = styled.ul`
  li {
    list-style-type: none;
    span {
      &:first-child {
        display: inline-block;
        width: 30px;
        text-align: center;
      }
    }
  }
`;

function Nav({ children, className, ...props }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <OuterWrapper style={{ height: '50px', opacity: '0.8'}}>
      <Wrapper>
        <List style={{ marginTop: '5px' }}>
          <li>
            <Link to="/" style={{ color: '#FFF' }}>
              <span role="img" aria-label="memo">
                <img src="http://tiny.cc/javascript-logo" alt="lamp" />
              </span>{' '}
              <b>Ronin</b> JavaScript
            </Link>
          </li>
        </List>
      </Wrapper>
    </OuterWrapper>
  );
}

export default Nav;
