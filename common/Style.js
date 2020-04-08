import {StyleSheet, Platform} from 'react-native';
import {
  isIphoneX,
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const iphoneTopPadding = isIphoneX() ? getStatusBarHeight() + 8 : 20;
export const iphoneBottomPadding = isIphoneX() ? getBottomSpace() : 1;

export default StyleSheet.create({
  elevation: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  container: {
    paddingBottom: Platform.OS === 'ios' ? iphoneBottomPadding : 0,
    paddingTop: Platform.OS === 'ios' ? iphoneTopPadding : 0,
    flex: 1,
  },
  modalContainer: {
    paddingBottom: Platform.OS === 'ios' ? iphoneBottomPadding : 0,
    paddingTop: Platform.OS === 'ios' ? iphoneTopPadding : 0,
  },
});
