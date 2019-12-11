/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { FC, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Text, Button } from '../../ui/atom';
import ThemeContext from '../../context/theme';

import { withStyles } from '../../lib/with';

export interface DashboardProps {
  styles: any;
}

/**
 * Dashboard - contains the main UI for the dashboard page.
 * @param {DashboardProps} props - props for the dashboard component
 */
const Dashboard: FC<DashboardProps> = ({ styles }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Hello, Swapnil{'\n'}
        <Text style={styles.subtitle}>
          We'd like to welcome to our world of react-native. Enjoy hacking.
        </Text>
      </Text>
      <Button
        label="Go back"
        style={styles.buttonContainer}
        labelStyle={styles.buttonLabel}
      />
    </View>
  );
};

export default withStyles(Dashboard, ({ colors, fonts }) => {
  return {
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
      fontSize: fonts.size.md,
      fontWeight: '500',
    },
    buttonContainer: {
      backgroundColor: colors.surface,
    },
    buttonLabel: {
      color: colors.text,
      fontSize: fonts.size.lg,
    },
  };
});
