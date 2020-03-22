import React from 'react';
import styled from 'styled-components';

const PALETTE = ['#E9ECE5', '#C0DFD9', '#B3C2BF', '#3B3A36'];

export default function Help({ show }) {
  return (
    show ? (
      <HelpContainer showHelp>
        <Bold>Home Page</Bold>
          Click on a board name to enter the board page<br />
          Pin important boards for quick access<br /><br />
        <Bold>Board Page</Bold>
          Click on the board or list name to modify it<br />
          Drag and drop lists and cards to change their positions<br /><br />
        <Bold>Card Page</Bold>
          Coming soon<br />
      </HelpContainer>
    ) : null
  );
}

const HelpContainer = styled.div`
  position: fixed;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  background: ${PALETTE[2]};
  display: block;
  border-radius: 10px;
  font-size: 16px;
  opacity: 0.8;
`;

const Bold = styled.div`
  font-weight: bold;
  text-decoration: underline;
`;