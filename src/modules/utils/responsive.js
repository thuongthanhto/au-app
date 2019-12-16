import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // width and height of current device
const guidelineBaseWidth = 375; // width of standard device (iphone 6)
const guidelineBaseHeight = 667; // height of standard device (iphone 6)

/**
 * responsive screen base on params
 * @param {number} horizontalScale: dp for standard device, use to: padding/margin Horizontal, width, height of icon or button
 * @param {number} verticalScale: dp for standard device, use to: height of component or layout, height of button, padding/margin Vertical
 * @param {number} moderateScale: dp for standard device, use scale value by horizontal base on factor
 * @param {number} factor: scale factor 
 */
class Responsive {
  // return value scale by horizontal
  static h = (horizontalScale) => (width / guidelineBaseWidth * horizontalScale);

  // return value scale by vertical
  static v = (verticalScale) => (height / guidelineBaseHeight * verticalScale);

  // return value scale by horizontal base on factor
  static m = (moderateScale, factor = 0.5) => (moderateScale + ((height / guidelineBaseWidth * moderateScale) - moderateScale) * factor); 
}

export default Responsive;
