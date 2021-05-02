interface AppTheme {
  appPrimaryColor: string;
  appSecondaryColor: string;
  logoSrc: string;
  contentColor: string;
}

const LightTheme: AppTheme = {
  appPrimaryColor: '#ffffff',
  appSecondaryColor: '#F5F5F5',
  logoSrc: '/logo-dark.svg',
  contentColor: '#000000',
};

const DarkTheme: AppTheme = {
  appPrimaryColor: '#22242c',
  appSecondaryColor: '#16181D',
  logoSrc: '/logo-white.svg',
  contentColor: '#ffffff',
};

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

const appThemes: { [index: string]: AppTheme } = {
  light: LightTheme,
  dark: DarkTheme,
};

export default appThemes;
