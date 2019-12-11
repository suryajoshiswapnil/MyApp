/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { FC } from 'react';
import { View } from 'react-native';

import { withStyle } from '../../util';
import { Text, Button } from '../../ui';

export interface DashboardProps {
  styles: any;
}

/**
 * Dashboard - contains the main UI for the dashboard page.
 * @param {DashboardProps} props - props for the dashboard component
 */
const Dashboard: FC<DashboardProps> = ({ styles }) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>
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

export default withStyle(Dashboard, ({ colors, fonts }) => {
  return {
    container: {
      flex: 1,
      paddingVertical: 25,
      paddingHorizontal: 20,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      color: colors.text,
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
