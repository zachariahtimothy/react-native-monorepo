import React, { ComponentProps } from 'react';
import { Button as BaseComp } from 'react-native-paper';

export type ButtonProps = ComponentProps<typeof BaseComp>;

export function Button(props: ButtonProps) {
  return <BaseComp {...props} />
}
