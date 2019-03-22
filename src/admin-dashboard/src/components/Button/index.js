import React from 'react';
import styled from 'styled-components';
import { space, width, fontSize, color,  } from 'styled-system';

const StyledButton = styled.button`
  border: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

// export default function Button(props) {
//   return <StyledButton width='50%' p='0.5rem' fontSize='1rem' color={props.color} bg={props.bg}>{props.children}</StyledButton>
// };

// export default function Button({ width = '50%', p = '0.5rem', fontSize = '1rem', color = 'black', bg = 'pink', children }) {
//   return <StyledButton width={width} p={p} fontSize={fontSize} color={color} bg={bg}>{children}</StyledButton>
// };

export default function Button(props) {
  return <StyledButton
            width={props.width || '100%'}
            p={props.p || '0.5rem'}
            fontSize={props.fontSize || '1rem'}
            color={props.color || 'black'}
            bg={props.bg || 'pink'}>
      {props.children}
    </StyledButton>
};