/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React from 'react';

//TODO: Find another way to get type information
import config from '../config';

const ConfigContext = React.createContext(config);

// TODO: Make Provider as component and have ability to update config
export const ConfigProvider = ConfigContext.Provider;
export const ConfigConsumer = ConfigContext.Consumer;

export default ConfigContext;
