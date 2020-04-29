import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  li {
    margin-bottom: 0.2rem;
    span {
      &:first-child {
        display: inline-block;
        width: 30px;
        text-align: center;
      }
    }
  }
`;

function CoursesHeader() {
  return (
    <header>
      <section style={{ marginTop: '60px' }}>
        <img src="http://tiny.cc/robin-javascript" alt="header" />
      </section>
      <h3>Antes de Iniciar</h3>
      <List>
        <li>
          <span role="img" aria-label="memo">
            <img src="http://tiny.cc/ronin-lanp" alt="lamp" />
          </span>{' '}
          Leio o
          <a href="/bushido-conduct-code/" alt="conduct-course">
            <b>Nosso Código de Conduta</b>
          </a>
          , é seu dever conhecé-lo.
        </li>
        <li>
          <span role="img" aria-label="memo">
            <img src="http://tiny.cc/shinobi-cat" alt="shinobi-cat" />
          </span>{' '}
          Não entende a Lógica da Programação, não se preocupe, vá com o
          <a href="/bushido-conduct-code/" alt="conduct-course">
            <b>Shinobi Cat ao Scratch Dojo</b>
          </a>
          , treiná-lo ele deve.
        </li>
      </List>
    </header>
  );
}

export default CoursesHeader;
