import {
  Dimensions,
  NativeModules,
  PixelRatio,
  Platform,
  StyleSheet,
} from 'react-native';

// import { Header } from '@react-navigation/stack';
import { useHeaderHeight } from '@react-navigation/elements';
import Constants from 'expo-constants';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');
const isIPhoneX =
  Platform.OS === 'ios' && (D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH);

let windowDimensions = Dimensions.get('window');
let isSmallDevice = windowDimensions.width <= 320;

const notchHeight = isIPhoneX ? 20 : 0;

let Layout = {
  isSmallDevice,
  pixel: 1 / PixelRatio.get(),
  narrowSeparator: StyleSheet.hairlineWidth,
  separator: 1,
  tabBarHeight: 49,
  navigationBarDisplacement: 0,
  notchHeight,
  footerHeight: 49,
  marginHorizontal: isSmallDevice ? 10 : 15,
  statusBarHeight: Constants.statusBarHeight,
  timestampWidth: 35,
  window: windowDimensions,
  navigationBarHeight: 44,
  softButtonHeight: 48,
  navigationBarDisplacement: 25,
//   headerHeight: ()=>{
//     return Platform.OS === 'android'
//         ? useHeaderHeight() + Constants.statusBarHeight
//         : useHeaderHeight() + notchHeight;
//   }
};

// Layout.headerHeight =
//   Platform.OS === 'android'
//     ? useHeaderHeight() + Constants.statusBarHeight
//     : useHeaderHeight() + notchHeight;

export default Layout;
