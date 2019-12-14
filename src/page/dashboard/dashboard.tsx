/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { FC, useState } from 'react';

import { View } from 'react-native';
import { Text, Button, Dot } from '../../ui';

import styles from './styles';

export interface DashboardProps {}
/**
 * Dashboard - contains the main UI for the dashboard page.
 * @param {DashboardProps} props - props for the dashboard component
 */
const Dashboard: FC<DashboardProps> = props => {
  const [animating, setAnimating] = useState(true);

  return (
    <View style={[styles.container, styles.content]}>
      <Text style={[styles.text, styles.title]}>
        Hello, Swapnil{'\n'}
        <Text style={styles.subtitle}>
          We'd like to welcome to our world of react-native. Enjoy hacking.
        </Text>
      </Text>
      <View style={[styles.centered, styles.container]}>
        <Dot animating={animating} size={400} />
        <Text style={[styles.text, styles.contentText]}>
          My name is Swapnil Suryajoshi. I am software developer, having
          experience in react.js, react-native and node.js.
        </Text>
      </View>
      <Button
        style={[styles.centered, styles.buttonContainer]}
        onPress={() => {
          setAnimating(!animating);
        }}>
        <Text style={[styles.text, styles.buttonLabel]}>Get started now</Text>
      </Button>
    </View>
  );
};

export default Dashboard;
