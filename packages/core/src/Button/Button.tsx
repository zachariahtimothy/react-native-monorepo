import React from 'react';
import { Button as BaseComp, ButtonProps as BaseProps } from 'react-native-paper';

export interface ButtonProps extends BaseProps {}

export function Button(props: ButtonProps) {
  return <BaseComp {...props} />
}
