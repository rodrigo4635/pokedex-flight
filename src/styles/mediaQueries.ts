const breakpoints = {
  huge: '1440px',
  large: '1024px',
  medium: '768px',
  small: '450px',
};

const mediaQueries = (bp: "small" | "medium" | "large" | "huge", type = "min") => `
  @media screen and (${ type }-width: ${ breakpoints[bp] })
`

export default mediaQueries