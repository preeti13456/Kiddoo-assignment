// components/registry/ComponentRegistry.ts

import React from 'react';
import { ComponentType } from '../../types/payload';
import BannerHero from '../blocks/BannerHero';
import ProductGrid2x2 from '../blocks/ProductGrid2x2';
import DynamicCollection from '../blocks/DynamicCollection';
import FallbackComponent from '../blocks/FallbackComponent';

type ComponentMap = Map<ComponentType, React.ComponentType<any>>;

class ComponentRegistry {
  private registry: ComponentMap = new Map();

  register(type: ComponentType, component: React.ComponentType<any>) {
    this.registry.set(type, component);
  }

  getComponent(type: ComponentType): React.ComponentType<any> {
    return this.registry.get(type) || FallbackComponent;
  }
}

// Singleton instance
export const componentRegistry = new ComponentRegistry();

// Register all known components
componentRegistry.register('BANNER_HERO', BannerHero);
componentRegistry.register('PRODUCT_GRID_2X2', ProductGrid2x2);
componentRegistry.register('DYNAMIC_COLLECTION', DynamicCollection);
// Overlay is handled separately by Campaign engine, but we could also register it.