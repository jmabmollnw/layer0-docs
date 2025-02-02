import * as React from 'react';
import styled from 'styled-components';

interface InlineCodeProps {
  isLink: boolean;
}

const StyledCodeWrap = styled.code`
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  text-decoration: none;
  padding: 0 4px;
  border-radius: 4px;
  background: var(--code-bgColor);
  border: 1px solid var(--code-borderColor);
  font-variant-ligatures: none;
  margin: 0;
  text-align: left;
  box-decoration-break: clone;

  &.link {
    color: #2993e0;
  }
`;

function InlineCode({
  isLink,
  children,
}: JSX.IntrinsicElements['code'] & InlineCodeProps) {
  return (
    <StyledCodeWrap className={isLink ? 'link' : ''}>{children}</StyledCodeWrap>
  );
}

InlineCode.displayName = 'InlineCode';

export default InlineCode;
