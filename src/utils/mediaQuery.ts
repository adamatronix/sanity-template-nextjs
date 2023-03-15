export const breakpoints = {
  small: 768,
  medium: 900,
  large: 1080,
  largeplus: 1200,
  xlarge: 1440,
  xxlarge: 1920
};

export const media = (key: keyof typeof breakpoints) => {
  // ns = not small
  return (style: TemplateStringsArray | String) => 
    `@media screen and (min-width: ${breakpoints[key]}px) { ${style} }`
};
