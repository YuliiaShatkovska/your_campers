import { useState } from 'react';
import { Tab, TabsContentBox, TabsList } from './Tabs.styled';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';
import { BookingForm } from '../BookingForm/BookingForm';

export const Tabs = ({ camper }) => {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <>
      <TabsList>
        <li>
          <Tab
            className={activeTab === 'features' ? 'active' : ''}
            type="button"
            onClick={() => setActiveTab('features')}
          >
            Features
          </Tab>
        </li>
        <li>
          <Tab
            className={activeTab === 'reviews' ? 'active' : ''}
            type="button"
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </Tab>
        </li>
      </TabsList>

      <TabsContentBox>
        {activeTab === 'features' ? (
          <Features camper={camper} />
        ) : (
          <Reviews camper={camper} />
        )}
        <BookingForm />
      </TabsContentBox>
    </>
  );
};
