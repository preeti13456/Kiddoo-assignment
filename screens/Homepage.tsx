// screens/Homepage.tsx
import React, { useMemo, useCallback } from 'react';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView, StatusBar } from 'react-native';

import { ThemeProvider } from '../components/shared/ThemeProvider';
import { CampaignProvider } from '../components/campaign/CampaignContext';
import { BlockRenderer } from '../components/BlockRenderer';
import CampaignOverlay from '../components/campaign/CampaignOverlay';
import useTheme  from '../hooks/useTheme'; // ✅ named import

import payload from '../mock/payload.json';
import { Block, Payload } from '../types/payload';

// Assert the payload shape (now campaign is defined)
const typedPayload = payload as Payload;

const Homepage = () => {
  // Use theme if needed for top‑level styling
  // const theme = useTheme();

  const blocks = useMemo(() => typedPayload.blocks ?? [], []);
  const campaignConfig = typedPayload.campaign ?? null; // ✅ no error now
  const baseTheme = typedPayload.theme;

  const renderItem = useCallback(
    ({ item }: { item: Block }) => <BlockRenderer block={item} />,
    []
  );

  const keyExtractor = useCallback((item: Block) => item.id, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <CampaignProvider campaignConfig={campaignConfig} baseTheme={baseTheme}>
        <SafeAreaView style={{ flex: 1, backgroundColor: baseTheme?.background || '#fff' }}>
          <StatusBar barStyle="dark-content" />
          <FlashList
            data={blocks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            removeClippedSubviews={true}
            drawDistance={300}
            onEndReachedThreshold={0.5}
          />
          <CampaignOverlay />
        </SafeAreaView>
      </CampaignProvider>
    </ThemeProvider>
  );
};

export default Homepage;