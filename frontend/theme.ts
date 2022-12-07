const calcRem = (size: number) => `${size / 16}rem`;

const colors = {
  red: "#F0305E",
  blue: "#164AFF",
  softBlue: "#DDE1F2",
};

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const verticalContainer = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const theme = {
  colors,
  fontSizes,
  margins,
  verticalContainer,
};

export default theme;
