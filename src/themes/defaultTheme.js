import { keyframes } from 'styled-components';

const fontCallback = 'Arial, sans-serif';

const fonts = [
  {
    name: 'Roboto-Regular',
    style: 'normal',
    weight: 'normal'
  },
  {
    name: 'Roboto Medium',
    style: 'normal',
    weight: 500
  },
  {
    name: 'Roboto Bold',
    style: 'normal',
    weight: 700
  }
];

const breakpoints = ['544px', '768px', '1012px', '1280px'];

const color = {
  charcoal200: '#FAFBFC',
  charcoal300: '#EFF2F7',
  charcoal400: '#DCDFE6',
  charcoal500: '#B6BBC6',
  charcoal600: '#747D93',
  charcoal700: '#363C4B',
  charcoal800: '#212632',
  forest900: '#021512',
  forest800: '#09332C',
  forest700: '#0E504C',
  forest600: '#1B817A',
  forest500: '#24A49B',
  forest400: '#6BB0AC',
  forest300: '#9BCFCC',
  forest200: '#BCDBD9',
  forest100: '#D7ECEA',
  ocean900: '#03045E',
  ocean800: '#023E8A',
  ocean700: '#0077B6',
  ocean600: '#008BC7',
  ocean500: '#48B5E4',
  ocean400: '#90D8EF',
  ocean300: '#ADE8F4',
  ocean200: '#CAF0F8',
  ocean100: '#E4FAFF',
  aubergine900: '#1D0A25',
  aubergine800: '#2C003E',
  aubergine700: '#512B58',
  aubergine600: '#775175',
  aubergine500: '#A888A3',
  aubergine400: '#C2A4B6',
  aubergine300: '#E4C7D0',
  aubergine200: '#EFDDE3',
  aubergine100: '#F4EFF1',
  carrot900: '#934B09',
  carrot800: '#B56820',
  carrot700: '#CC7D34',
  carrot600: '#D99455',
  carrot500: '#E7AA71',
  carrot400: '#EDBE96',
  carrot300: '#F9CDAD',
  carrot200: '#F2DBC8',
  carrot100: '#FFECDD',
  carabinero900: '#732929',
  carabinero800: '#943939',
  carabinero700: '#B85959',
  carabinero600: '#CE7070',
  carabinero500: '#E1897F',
  carabinero400: '#EAA798',
  carabinero300: '#FDC0AC',
  carabinero200: '#FFD5C8',
  carabinero100: '#F7E2D7',
  golden900: '#AF8904',
  golden800: '#CCA009',
  golden700: '#DDAF11',
  golden600: '#F2BF12',
  golden500: '#FAD046',
  golden400: '#FFDE72',
  golden300: '#FAE5A0',
  golden200: '#FDF0C7',
  golden100: '#FEF9E7',
  emerald100: '#EEF8F6',
  emerald500: '#55BAA9',
  emerald600: '#299B9A',
  sangria600: '#972139',
  sangria500: '#B2314A',
  primary100: '#EFF7FB',
  primary300: '#48AAF1',
  primary500: '#1778FB',
  primary700: '#0C1B7A',
  redclay100: '#FAEDEC',
  redclay500: '#CD4C41',
  redvelvet: '#B2314A;',
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
  fontFamily: `"Roboto", ${fontCallback}`,
  fontSize: '14px',
  transitionM: 'all 250ms ease-in-out',
  transitionS: 'all 120ms ease-in-out',
  boxShadowM: 'box-shadow: 0px 8px 24px rgba(54, 60, 75, 0.05)',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700
};

const animations = {
  rotate: keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,
  loading: keyframes`
    0% {
      background-color: rgba(220,223,230,1);
    }
    50% {
      background-color: rgba(220,223,230,.5);
    }
    100% {
      background-color: rgba(220,223,230,1);
    }
  `,
  loader: keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `,
  loaderInner: keyframes`
    0% {
      height: 0%;
    }
    25% {
      height: 0%;
    }
    50% {
      height: 100%;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  `,
  dropDownDisplay: keyframes`
    0% {
      opacity: 0;
      transform: scale(0.98) translateY(-0.6em);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  `
};

const headings = [
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: '3.4rem'
  },
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: '32px'
  },
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: '24px'
  },
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: '1.1rem'
  },
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: '0.8rem'
  }
];

const texts = {
  p1: {
    fontWeight: global.fontWeightRegular,
    fontSize: global.fontSize,
    color: color.charcoal800,
    lineHeight: '1.5'
  },
  p1b: {
    fontWeight: global.fontWeightMedium,
    fontSize: global.fontSize,
    color: color.charcoal800,
    lineHeight: '1.5'
  },
  p2: {
    fontWeight: global.fontWeightRegular,
    fontSize: '12px',
    color: color.charcoal800,
    lineHeight: '1.5'
  },
  p2b: {
    fontWeight: global.fontWeightMedium,
    fontSize: '12px',
    color: color.charcoal800,
    lineHeight: '1.5'
  },
  p3b: {
    fontWeight: global.fontWeightBold,
    fontSize: '10px',
    color: color.charcoal800,
    lineHeight: '1.5'
  }
};

const shapes = {
  borderRadiusLarge: '8px',
  borderRadiusMedium: '4px',
  borderRadiusSmall: '2px',
  borderRadiusFull: '50%',
  borderWidthMedium: '2px',
  borderWidthSmall: '1px'
};

const components = {
  /*Button Theme props*/
  buttonFontSizeLarge: '14px',
  buttonFontSizeMedium: '12px',
  buttonMinWidthLarge: '140px',
  buttonMinWidthMedium: '120px',
  buttonPaddingLarge: '19px 32px',
  buttonPaddingMedium: '11px 32px',
  buttonPrimaryBackgroundColor: color.primary500,
  buttonPrimaryBorderRadius: shapes.borderRadiusMedium,
  buttonPrimaryColor: color.white,
  buttonPrimaryDisabledBackgroundColor: color.charcoal400,
  buttonPrimaryHoverBackgroundColor: color.primary300,
  buttonPrimaryHoverColor: color.white,
  buttonSecondaryBackgroundColor: color.white,
  buttonSecondaryBorderColor: color.charcoal400,
  buttonSecondaryBorderRadius: shapes.borderRadiusMedium,
  buttonSecondaryColor: color.charcoal800,
  buttonSecondaryDisabledBackgroundColor: color.white,
  buttonSecondaryDisabledBorderColor: color.charcoal300,
  buttonSecondaryDisabledColor: color.charcoal400,
  buttonSecondaryHoverBackgroundColor: color.charcoal400,
  buttonSecondaryHoverBorderColor: color.charcoal400,
  buttonSecondaryHoverColor: color.charcoal800,

  buttonLinkPaddingSmall: '3px 4px',
  buttonLinkFontSizeSmall: '12px',
  buttonLinkPaddingMedium: '5px',
  buttonLinkFontSizeMedium: '14px',
  buttonLinkPaddingLarge: '6px',
  buttonLinkFontSizeLarge: '14px',
  buttonLinkPrimaryColor: color.primary500,
  buttonLinkSecondaryColor: color.charcoal600,
  buttonLinkDisabledColor: color.charcoal400,
  buttonLinkHoverBackgroundColor: color.charcoal300,

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

  /* Avatar Theme Props */
  avatarBorderRadius: shapes.borderRadiusFull,
  avatarBackgroundColor: color.charcoal700,
  avatarColor: color.white,
  avatarSizeSmall: spacings.small4,
  avatarSizeMedium: spacings.medium1,
  avatarSizeLarge: spacings.medium2,
  avatarSizeExtralarge: spacings.medium5,
  avatarFontSizeSmall: '12px',
  avatarFontSizeMedium: '12px',
  avatarFontSizeLarge: '12px',
  avatarFontSizeExtralarge: spacings.small3,

  /* Loader Theme Props */
  loaderSizeSmall: spacings.medium1,
  loaderSizeMedium: spacings.medium3,
  loaderSizeLarge: spacings.medium5,

  /* Navigation Theme Props */
  navigationBackgroundColor: 'white',
  navigationBorder: `1px solid ${color.charcoal300}`,

  navigationMenuBackgroundColor: color.charcoal300,
  navigationMenuOpenBackgroundColor: color.primary100,
  navigationMenuHoverBackgroundColor: color.charcoal400,
  navigationContentMargin: `0 ${spacings.small4} 0 0`,
  navigationLinkFontSize: '12px',
  navigationLinkMargin: `0 ${spacings.small4} 0 0`,
  navigationHeaderPadding: '0 17px',
  navigationMinHeight: '40px',
  navigationMaxHeight: '73px',

  /* Notification Theme Props */
  accordionMinHeight: '65px',
  accordionPadding: `${spacings.small3} ${spacings.small4}`,
  accordionBorder: `1px solid ${color.charcoal300}`,
  accordionColor: color.charcoal600,
  accordionSubHeaderColor: color.charcoal400,
  accordionHeaderFontWeight: global.fontWeightMedium,
  accordionHeaderFontSize: '12px',
  accordionSubHeaderFontSize: '10px',
  accordionSubHeaderFontWeight: global.fontWeightBold,

  /* Notification Theme Props */
  notificationBorderRadius: shapes.borderRadiusLarge,
  notificationCloseButtonColor: color.charcoal800,
  notificationErrorBackgroundColor: color.redclay100,
  notificationErrorBorderColor: color.redclay500,
  notificationErrorColor: color.redclay500,
  notificationNormalBackgroundColor: color.primary100,
  notificationNormalBorderColor: color.ocean800,
  notificationNormalColor: color.charcoal800,
  notificationPadding: spacings.small3,
  notificationSuccessBackgroundColor: color.emerald100,
  notificationSuccessBorderColor: color.emerald600,
  notificationSuccessColor: color.emerald600,

  /*TextLink Theme props*/
  textLinkDisabledColor: color.charcoal400,
  textLinkFontSizeLarge: '14px',
  textLinkFontSizeMedium: '12px',
  textLinkPrimaryColor: color.primary500,
  textLinkPrimaryHoverColor: color.primary300,
  textLinkSecondaryColor: color.charcoal600,
  textLinkSecondaryHoverColor: color.primary300,

  /*Drawer Theme props*/
  drawerMaxWidth: '320px',
  drawerBackgroundColor: color.white,
  drawerBorder: `1px solid ${color.charcoal300}`,
  drawerHeaderColor: color.charcoal700,
  drawerHeaderBorder: `1px solid ${color.charcoal300}`,
  drawerHeaderPadding: `12px ${spacings.small4}`,
  drawerHeaderMinHeight: '56px',
  drawerCloseButtonBackground: color.white,
  drawerCloseButtonPadding: '6px',
  drawerCloseButtonBorderRadius: shapes.borderRadiusMedium,
  drawerCloseButtonBorder: `1px solid ${color.charcoal400}`,

  /*Dropdown Theme props*/
  dropdownBorderColor: color.charcoal300,
  dropdownBoxShadow: '0px 16px 32px rgba(54, 60, 75, 0.1)',
  dropdownBorderRadius: shapes.borderRadiusMedium,
  dropdownBackground: color.white,
  dropdownPadding: spacings.small2,

  /*List Theme props*/
  listBackgroundColor: color.white,
  listPadding: spacings.small2,

  /*ListItem Theme props*/
  listItemSeparatorColor: color.charcoal300,
  listItemColorActive: color.primary500,
  listItemColorActiveHover: color.primary100,
  listItemBackgroundColorActiveHover: color.primary100,
  listItemColorDefault: color.charcoal800,
  listItemColorDefaultHover: color.charcoal300,
  listItemBackgroundColorDefaultHover: color.charcoal300,
  listItemColorDisabled: color.charcoal500,
  listItemColorFocused: color.white,
  listItemFontWeightFocused: global.fontWeightMedium,
  listItemBackgroundColorFocused: color.primary500,
  listItemBackgroundColorDisabled: color.charcoal200,
  listItemBackgroundColorHoverDisabled: color.charcoal200,
  listItemMargin: '0 0 4px',
  listItemFontSize: '12px',
  listItemBorderRadius: shapes.borderRadiusSmall,
  listItemPaddingMedium: `3px ${spacings.small3}`,
  listItemPaddingLarge: `8px ${spacings.small3}`,
  listItemFontSizeMedium: '12px',
  listItemFontSizeLarge: '14px',
  listItemFontWeight: global.fontWeightRegular,

  listNavItemColorDefault: color.charcoal600,
  listNavItemColorDisabled: color.charcoal400,
  listNavItemBackgroundColorDisabled: color.white,
  listNavItemColorActive: color.primary500,
  listNavItemColorHover: color.charcoal600,
  listNavItemFontWeight: global.fontWeightMedium,
  listNavItemFontSize: '14px',

  /*Tabs Theme props*/
  tabsBackgroundColor: 'white',
  tabsBorderColor: color.charcoal300,
  tabFontSize: texts.p2b.fontSize,
  tabFontWeight: texts.p2b.fontWeight,
  tabColor: color.charcoal600,
  tabColorHover: color.primary300,
  tabColorActive: color.primary500,
  tabColorDisabled: color.charcoal400,
  tabBorderColor: 'transparent',
  tabBorderColorHover: color.primary300,
  tabBorderColorActive: color.primary500,
  tabBadgeFontSize: texts.p2b.fontSize,
  tabBadgeFontWeight: texts.p2b.fontWeight,
  tabBadgePadding: '2px 8px',
  tabBadgeColor: color.charcoal600,
  tabBadgeColorHover: color.white,
  tabBadgeColorActive: color.white,
  tabBadgeBackground: color.charcoal300,
  tabBadgeBackgroundHover: color.primary300,
  tabBadgeBackgroundActive: color.primary500,

  /* Table Theme props */
  tableHighlightedHeaderBackgroundColor: '#E5E8EE',
  tableHighlightedCellBackgroundColor: '#F8F9FA',

  /* Pagination Theme props */
  paginationLabelColor: color.charcoal800,
  paginationLabelMarginBottom: spacings.small3,
  paginationProgressBackgroundColor: color.charcoal400,
  paginationProgressMarginBottom: spacings.small3,
  paginationProgressActiveBackgroundColor: color.charcoal800,

  /* Slider Theme props */
  sliderRailColor: color.charcoal400,
  sliderRailSize: '2px',
  sliderTrackColor: color.primary500,
  sliderHandleColor: color.primary500,
  sliderHandleDisabledColor: color.charcoal500,
  sliderHandleDraggingColor: color.primary600,
  sliderHandleSize: spacings.small3,
  sliderHandleMarginTop: '-6px',

  /* Carousel Theme props */
  carouselButtonSize: '32px',
  carouselButtonTransition: global.transitionS,
  carouselButtonBackground: 'rgba(255, 255, 255, .6)',
  carouselButtonHoverBackground: 'rgba(255, 255, 255, .8)',
  carouselSlideTransition: global.transitionS
};

export default {
  animations,
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
