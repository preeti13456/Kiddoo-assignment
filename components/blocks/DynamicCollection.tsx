// components/blocks/DynamicCollection.tsx

import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import ProductCard from '../shared/ProductCard';
import { DynamicCollectionBlock, Product } from '../../types/payload';

const DynamicCollection = React.memo(
  ({ title, items }: DynamicCollectionBlock) => {
  const renderItem = useCallback(
  ({ item }: { item: Product }) => {
    return <ProductCard product={item} />;
  },
  []
);

  const keyExtractor = useCallback(
  (item: Product) => item.id,
  []
);

  return (
    <View style={{ paddingVertical: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 16, marginBottom: 8 }}>
        {title}
      </Text>
      <FlashList
        horizontal
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        removeClippedSubviews={true}
        // disable paging if needed
      />
    </View>
  );
});

export default DynamicCollection;