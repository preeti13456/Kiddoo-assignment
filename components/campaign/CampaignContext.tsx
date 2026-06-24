import React, { ReactNode } from 'react';
import { CampaignConfig, Theme } from '../../types/payload';

interface CampaignProviderProps {
  children: ReactNode;
  campaignConfig: CampaignConfig | null;
  baseTheme: Theme;
}

export const CampaignProvider = ({
  children,
  campaignConfig,
  baseTheme,
}: CampaignProviderProps) => {
  return <>{children}</>;
};