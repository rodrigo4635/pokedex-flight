const breakpoints = {
  xlarge: '1440px',
  large: '1024px',
  medium: '768px',
  small: '450px',
}

const mediaQueries = (bp: "small" | "medium" | "large" | "xlarge", type = "min") => `
  @media screen and (${ type }-width: ${ breakpoints[bp] })
`

export default mediaQueries