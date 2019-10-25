import React, { ComponentProps } from 'react';
import { Text as BaseComp } from 'react-native-paper';

export type TextProps = ComponentProps<typeof BaseComp>;

export function Text(props: TextProps) {
  return <BaseComp {...props} />
}
