import React, { ReactNode } from 'react';
import { Text as BaseComp, TypographyProps as BaseProps } from 'react-native-paper';

export interface TextProps extends BaseProps {
  children: ReactNode;
}

export function Text(props: TextProps) {
  return <BaseComp {...props} />
}
