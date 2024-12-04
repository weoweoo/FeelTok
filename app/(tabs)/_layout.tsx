import React from 'react';
import { View } from 'react-native';
import { TopBar } from './topBar';
import { BottomBar } from './bottomBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <BottomBar />
    </View>
  );
}
