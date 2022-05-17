type Theme = {
  backgroundColor: string;
  text: string;
  borderColor: string;
  backgroundColorWebSmall?: string;
};

const lightTheme: Theme = {
  backgroundColor: '#E5E5E5',
  text: '#000000',
  borderColor: '#2D5BFF',
  backgroundColorWebSmall: '#D6E3F1',
};

const DarkTheme: Theme = {
  backgroundColor: '#141414',
  text: '#ffffff',
  borderColor: '#00FFFF',
};

export default {
  lightTheme,
  DarkTheme,
};
