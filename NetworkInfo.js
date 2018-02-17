'use strict';

import { NativeModules } from 'react-native';
const { RNNetworkInfo } = NativeModules;

const NetworkInfo = {
  getSSID(ssid) {
    RNNetworkInfo.getSSID(ssid);
  },

  getBSSID(bssid) {
    RNNetworkInfo.getBSSID(bssid);
  },

  getIPAddress(ip) {
    RNNetworkInfo.getIPAddress(ip);
  },

  getPPP0IPAddress(ip) {
    RNNetworkInfo.getPPP0IPAddress(ip);
  },

  getIPV4Address(ip) {
    RNNetworkInfo.getIPV4Address(ip);
  }
}

module.exports = { NetworkInfo }
