import React from 'react';
import { View, Text } from 'react-native';
import { Product } from '../../types/payload';

interface ProductCardProps {
  product: Product;
}

const ProductCard = React.memo(
  ({ product }: ProductCardProps) => {
    return (
      <View>
        <Text>{product.name}</Text>
      </View>
    );
  }
);

export default ProductCard;