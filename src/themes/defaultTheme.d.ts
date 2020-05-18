declare module base {
  export interface Font {
    src: string;
    name: string;
    weight: any;
    style: string;
  }

  export interface Color {
    primary700: string;
    primary500: string;
    primary300: string;
    primary100: string;
    charcoal800: string;
    charcoal700: string;
    charcoal600: string;
    charcoal500: string;
    charcoal400: string;
    charcoal300: string;
    charcoal200: string;
    white: string;
  }

  export interface Global {
    fontFamily: string;
    fontSize: string;
    bgColor: string;
    fontColor: string;
  }

  export interface Heading {
    size: string;
    fontFamily: string;
  }

  export interface Shapes {
    borderRadiusSmall: string;
    borderRadiusMedium: string;
    borderRadiusLarge: string;
    borderWidthSmall: string;
    borderWidthMedium: string;
  }

  export interface Components {
    checkboxBackground: string;
    checkboxBackgroundChecked: string;
    checkboxBackgroundDisabled: string;
    checkboxBorderColor: string;
    checkboxBorderWidth: string;
    checkboxBorderRadius: string;
    checkboxSizeS: string;
    checkboxSizeM: string;
    checkboxLabelColor: string;
    checkboxLabelDisabled: string;
    checkboxLabelMargin: string;
    checkboxLabelFontSize: string;
    checkboxIconColor: string;
    iconSizeS: string;
    iconSizeM: string;
    iconSizeL: string;
  }

  export interface RootObject {
    fonts: Font[];
    breakpoints: string[];
    color: Color;
    global: Global;
    headings: Heading[];
    shapes: Shapes;
    components: Components;
  }

}

