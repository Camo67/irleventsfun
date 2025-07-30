import React, { useState } from 'react';
import { Homepage } from './components/Homepage';
import { RestaurantStartPage } from './components/restaurant/RestaurantStartPage';
import { PrivateEventStartPage } from './components/private/PrivateEventStartPage';
import { WorkplaceStartPage } from './components/workplace/WorkplaceStartPage';
import { CustomQuotePage } from './components/CustomQuotePage';
import { WeddingInABoxPage } from './components/WeddingInABoxPage';
import { BirthdayInABoxPage } from './components/BirthdayInABoxPage';
import { ReunionInABoxPage } from './components/ReunionInABoxPage';
import { ContactPage } from './components/ContactPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { ProgramDetailPage } from './components/ProgramDetailPage';

export type PageType = 
  | 'home' 
  | 'restaurant-start'
  | 'private-event-start'
  | 'workplace-start'
  | 'custom-quote'
  | 'wedding-in-a-box'
  | 'birthday-in-a-box'
  | 'reunion-in-a-box'
  | 'contact'
  | 'service-detail'
  | 'program-detail'
  | 'restaurant-calendar-quote'
  | 'workplace-healthcare-start'
  | 'workplace-corporate-start'
  | 'workplace-healthcare-senior'
  | 'workplace-healthcare-provider'
  | 'workplace-corporate-watercooler'
  | 'workplace-corporate-expo'
  | 'workplace-corporate-marketing';

export interface AppState {
  currentPage: PageType;
  selectedService?: string;
  selectedProgram?: string;
  funnelData?: Record<string, any>;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>({ 
    currentPage: 'home',
    funnelData: {}
  });

  const navigateTo = (page: PageType, options?: { 
    service?: string; 
    program?: string;
    funnelData?: Record<string, any>;
  }) => {
    setAppState({
      currentPage: page,
      selectedService: options?.service,
      selectedProgram: options?.program,
      funnelData: { ...appState.funnelData, ...options?.funnelData }
    });
  };

  const updateFunnelData = (data: Record<string, any>) => {
    setAppState(prev => ({
      ...prev,
      funnelData: { ...prev.funnelData, ...data }
    }));
  };

  const renderCurrentPage = () => {
    switch (appState.currentPage) {
      case 'home':
        return <Homepage navigateTo={navigateTo} />;
      case 'restaurant-start':
        return <RestaurantStartPage navigateTo={navigateTo} funnelData={appState.funnelData} updateFunnelData={updateFunnelData} />;
      case 'private-event-start':
        return <PrivateEventStartPage navigateTo={navigateTo} funnelData={appState.funnelData} updateFunnelData={updateFunnelData} />;
      case 'workplace-start':
        return <WorkplaceStartPage navigateTo={navigateTo} />;
      case 'custom-quote':
        return <CustomQuotePage navigateTo={navigateTo} funnelData={appState.funnelData} updateFunnelData={updateFunnelData} />;
      case 'wedding-in-a-box':
        return <WeddingInABoxPage navigateTo={navigateTo} />;
      case 'birthday-in-a-box':
        return <BirthdayInABoxPage navigateTo={navigateTo} />;
      case 'reunion-in-a-box':
        return <ReunionInABoxPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      case 'service-detail':
        return <ServiceDetailPage service={appState.selectedService!} navigateTo={navigateTo} />;
      case 'program-detail':
        return <ProgramDetailPage program={appState.selectedProgram!} navigateTo={navigateTo} />;
      default:
        return <Homepage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentPage()}
    </div>
  );
}