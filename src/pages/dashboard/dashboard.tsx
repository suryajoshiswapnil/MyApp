import React, { FC } from 'react';

import { Text } from 'src/ui/atom';
import { View, StyleSheet } from 'react-native';

export interface DashboardProps {}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * Dashboard - contains the main UI for the dashboard page.
 * @param {DashboardProps} props - props for the dashboard component
 */
const Dashboard: FC<DashboardProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Hey there</Text>
    </View>
  );
};

export default Dashboard;
