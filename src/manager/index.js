import React from 'react';
import addons from '@storybook/addons';
import {
  ADDON_ID,
  PANEL_ID,
  ADDON_NAME,
} from '../constants';
import UASwitcher from './components';

export const addChannel = (api) => {
  const channel = addons.getChannel();

  addons.addPanel(PANEL_ID, {
    title: ADDON_NAME,
    render: ({ active }) => (
      <UASwitcher channel={channel} api={api} active={active} />
    ),
  });
};

export const register = () => addons.register(ADDON_ID, addChannel);
