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

  getIPAddress(ip, _interface) {
    _interface = typeof _interface !== 'undefined' ? _interface : "en0";
    RNNetworkInfo.getIPAddress(ip, _interface);
  },

  getIPV4Address(ip) {
    RNNetworkInfo.getIPV4Address(ip);
  }
}

module.exports = { NetworkInfo }
