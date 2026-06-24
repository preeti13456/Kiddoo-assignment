// types/payload.d.ts

export type ComponentType =
  | 'BANNER_HERO'
  | 'PRODUCT_GRID_2X2'
  | 'DYNAMIC_COLLECTION'
  | 'FULL_SCREEN_OVERLAY'
  | 'UNKNOWN';

export interface BaseBlock {
  id: string;
  type: ComponentType;
  theme?: ThemeOverride;
  action?: Action;
}

export interface BannerHeroBlock extends BaseBlock {
  type: 'BANNER_HERO';
  imageUrl: string;
  title?: string;
  subtitle?: string;
}

export interface ProductGrid2x2Block extends BaseBlock {
  type: 'PRODUCT_GRID_2X2';
  products: Product[];
}

export interface DynamicCollectionBlock extends BaseBlock {
  type: 'DYNAMIC_COLLECTION';
  title: string;
  themeContext: string;
  items: Product[];
}

export interface FullScreenOverlayBlock extends BaseBlock {
  type: 'FULL_SCREEN_OVERLAY';
  animationUrl: string;
}

export type Block =
  | BannerHeroBlock
  | ProductGrid2x2Block
  | DynamicCollectionBlock
  | FullScreenOverlayBlock;

export interface Action {
  type: 'ADD_TO_CART' | 'DEEP_LINK' | 'APPLY_MYSTERY_GIFT_COUPON' | 'NAVIGATE';
  payload: Record<string, any>;
}

export interface Theme {
  primary: string;
  background: string;
  
}

export interface CampaignConfig {
  id: 'back_to_school' | 'summer_playhouse' | 'mystery_gift';
  theme: Theme;
  overlay?: {
    animationUrl: string;
    pointerEvents?: 'none' | 'auto';
  };
}

export interface Payload {
  theme: Theme;
  blocks: Block[];
  campaign?: CampaignConfig | null;
}
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export interface DynamicCollectionBlock extends Block {
  title?: string;
  items: Product[];
}