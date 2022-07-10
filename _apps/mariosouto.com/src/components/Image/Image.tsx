import { StyleSheet } from "@src/theme/StyleSheet";
import React from "react";
import styled from "styled-components";
import { renderCSS } from "../Box/renderCSS/renderCSS";

const StyledImage = styled.img<any>`
  ${({ styleSheet, theme, uniqueId }) => renderCSS(styleSheet, theme, uniqueId)};
`;

interface ImageProps {
  src: string;
  alt?: string;
  styleSheet?: StyleSheet;
}
export default function Image({ src, alt, ...props }: ImageProps) {
  const id = React.useId().replaceAll(':', '');

  return (
    <StyledImage uniqueId={id} className={id} src={src} alt={alt} {...props} />
  );
}
