import React from 'react';
import { Block } from '../types/payload';
import { componentRegistry } from './registry/ComponentRegistry';

interface Props {
  block: Block;
}

export const BlockRenderer: React.FC<Props> = ({ block }) => {
  const Component = componentRegistry.getComponent(block.type);
  return <Component {...block} />;
};