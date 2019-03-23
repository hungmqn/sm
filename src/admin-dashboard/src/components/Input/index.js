import React from 'react';
import styled from 'styled-components';
import { space, width, fontSize, color,  } from 'styled-system';

const StyledInput = styled.input`
  border: none;
  border-bottom: 0.5px white solid;
  outline: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
export default function Input({ autoComplete = 'auto-complete', type = 'text', placeholder = '...', width = '100%', p = '0.5rem', fontSize = '1rem', color = 'black', bg = 'transparent' }) {
  return <StyledInput autoComplete={autoComplete} type={type} placeholder={placeholder} width={width} p={p} fontSize={fontSize} color={color} bg={bg} />
};