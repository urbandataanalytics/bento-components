import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoMedium from '../fonts/Roboto-Medium.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';

const fontCallback = 'Arial, sans-serif';

const fonts = [
  {
    name: 'Roboto Regular',
    src: RobotoRegular,
    style: 'normal',
    weight: 'normal'
  },
  {
    name: 'Roboto Medium',
    src: RobotoMedium,
    style: 'normal',
    weight: 500
  },
  {
    name: 'Roboto Bold',
    src: RobotoBold,
    style: 'normal',
    weight: 700
  }
];

const breakpoints = ['544px', '768px', '1012px', '1280px'];

const color = {
  charcoal200: '#F8F8F8',
  charcoal300: '#EFF2F7',
  charcoal400: '#DCDFE6',
  charcoal500: '#B6BBC6',
  charcoal600: '#747D93',
  charcoal700: '#363C4B',
  charcoal800: '#212632',
  emerald100: '#EEF8F6',
  emerald500: '#55BAA9',
  emerald600: '#299B9A',
  primary100: '#EFF7FB',
  primary300: '#5FAEDA',
  primary500: '#1778FB',
  primary700: '#0C1B7A',
  redclay100: '#FAEDEC',
  redclay500: '#CD4C41',
  white: '#FFFFFF'
};

const spacings = {
  small1: '4px',
  small2: '8px',
  small3: '16px',
  small4: '24px',
  medium1: '32px',
  medium2: '40px',
  medium3: '48px',
  medium4: '56px',
  medium5: '64px',
  large1: '80px',
  large2: '96px',
  large3: '128px',
  large4: '200px'
};

const global = {
  bgColor: 'white',
  fontColor: '#333',
  fontFamilyBold: `"Roboto Bold", ${fontCallback}`,
  fontFamilyMedium: `"Roboto Medium", ${fontCallback}`,
  fontFamilyRegular: `"Roboto Regular", ${fontCallback}`,
  fontSize: '14px'
};

const headings = [
  {
    fontFamily: global.fontFamilyMedium,
    size: '3.4rem'
  },
  {
    fontFamily: global.fontFamilyMedium,
    size: '2.5rem'
  },
  {
    fontFamily: global.fontFamilyMedium,
    size: '1.7rem'
  },
  {
    fontFamily: global.fontFamilyMedium,
    size: '1.1rem'
  },
  {
    fontFamily: global.fontFamilyMedium,
    size: '0.8rem'
  }
];

const texts = {
  p2: {
    fontFamily: global.fontFamilyRegular,
    fontSize: '12px',
    color: color.charcoal800,
    lineHeight: '1.5'
  }
};

const shapes = {
  borderRadiusLarge: '8px',
  borderRadiusMedium: '4px',
  borderRadiusSmall: '2px',
  borderWidthMedium: '2px',
  borderWidthSmall: '1px'
};

const components = {
  /*Button Theme props*/
  buttonFontSizeLarge: '14px',
  buttonFontSizeMedium: '12px',
  buttonMinWidthLarge: '140px',
  buttonMinWidthMedium: '120px',
  buttonPaddingLarge: '17px 32px',
  buttonPaddingMedium: '11px 32px',
  buttonPrimaryBackgroundColor: color.primary500,
  buttonPrimaryBorderColor: color.primary500,
  buttonPrimaryBorderRadius: shapes.borderRadiusMedium,
  buttonPrimaryColor: color.white,
  buttonPrimaryDisabledBackgroundColor: color.charcoal400,
  buttonPrimaryDisabledBorderColor: color.charcoal400,
  buttonPrimaryHoverBackgroundColor: color.primary300,
  buttonPrimaryHoverBorderColor: color.primary300,
  buttonPrimaryHoverColor: color.white,
  buttonSecondaryBackgroundColor: color.white,
  buttonSecondaryBorderColor: color.charcoal800,
  buttonSecondaryBorderRadius: shapes.borderRadiusMedium,
  buttonSecondaryColor: color.charcoal800,
  buttonSecondaryDisabledBackgroundColor: color.white,
  buttonSecondaryDisabledBorderColor: color.charcoal400,
  buttonSecondaryHoverBackgroundColor: color.charcoal800,
  buttonSecondaryHoverBorderColor: color.primary300,
  buttonSecondaryHoverColor: color.white,

  /* Checkbox Theme props */
  checkboxBackground: color.white,
  checkboxBackgroundChecked: color.primary500,
  checkboxBackgroundDisabled: color.charcoal400,
  checkboxBorderColor: color.charcoal400,
  checkboxBorderRadius: shapes.borderRadiusSmall,
  checkboxBorderWidth: shapes.borderWidthMedium,
  checkboxIconColor: color.white,
  checkboxLabelColor: color.charcoal800,
  checkboxLabelDisabled: color.charcoal400,
  checkboxLabelFontSize: '14px',
  checkboxLabelMargin: spacings.small3,
  checkboxSizeMedium: spacings.small4,
  checkboxSizeSmall: spacings.small3,

  /*FormGroup Theme props*/
  formGroupMarginBottom: spacings.small3,

  /* Icon Theme props */
  iconSizeLarge: '32px',
  iconSizeMedium: spacings.small4,
  iconSizeSmall: spacings.small3,
  iconPrimaryColor: color.primary500,
  iconSecondaryColor: color.charcoal600,

  /*InputField Theme props*/

  inputFieldBackgroundColor: color.white,
  inputFieldBorderColor: color.charcoal400,
  inputFieldBorderRadius: shapes.borderRadiusMedium,
  inputFieldDisabledBackgroundColor: color.charcoal200,
  inputFieldDisabledBorderColor: color.charcoal400,
  inputFieldDisabledColor: color.charcoal400,
  inputFieldDisabledLabelColor: color.charcoal400,
  inputFieldErrorBackgroundColor: color.redclay100,
  inputFieldErrorBorderColor: color.redclay500,
  inputFieldErrorHelpColor: color.redclay500,
  inputFieldErrorPlaceholderColor: color.redclay500,
  inputFieldFocusBackgroundColor: color.primary100,
  inputFieldFocusBorderColor: color.primary300,
  inputFieldFocusLabelColor: color.primary300,
  inputFieldFontSize: '14px',
  inputFieldHelpColor: color.charcoal800,
  inputFieldHelpFontSize: '12px',
  inputFieldLabelColor: color.charcoal700,
  inputFieldLabelFontSize: '12px',
  inputFieldLineHeight: '48px',
  inputFieldPlaceholderColor: color.charcoal400,
  inputFieldTextIndent: spacings.small4,

  /* Notification Theme Props */
  notificationBorderRadius: shapes.borderRadiusLarge,
  notificationCloseButtonColor: color.charcoal800,
  notificationErrorBackgroundColor: color.redclay100,
  notificationErrorColor: color.redclay500,
  notificationNormalBackgroundColor: color.primary100,
  notificationNormalColor: color.charcoal800,
  notificationPadding: spacings.small3,
  notificationSuccessBackgroundColor: color.emerald100,
  notificationSuccessColor: color.emerald600,

  /*TextLink Theme props*/
  textLinkDisabledColor: color.charcoal400,
  textLinkFontSizeLarge: '14px',
  textLinkFontSizeMedium: '12px',
  textLinkPrimaryColor: color.primary500,
  textLinkPrimaryHoverColor: color.primary300,
  textLinkSecondaryColor: color.charcoal600,
  textLinkSecondaryHoverColor: color.primary300
};

export default {
  breakpoints,
  color,
  components,
  fonts,
  global,
  headings,
  spacings,
  shapes,
  texts
};
