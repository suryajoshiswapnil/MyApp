import React, { FC, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../../ui/atom';
import ThemeContext from '../../context/theme';

export interface DashboardProps {}

/**
 * Dashboard - contains the main UI for the dashboard page.
 * @param {DashboardProps} props - props for the dashboard component
 */
const Dashboard: FC<DashboardProps> = props => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Hello, Swapnil{'\n'}
        <Text style={styles.subtitle}>
          We'd like to welcome to our world of react-native. Enjoy hacking.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Dashboard;
