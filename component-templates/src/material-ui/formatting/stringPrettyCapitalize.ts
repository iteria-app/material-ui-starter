export const stringPrettyCapitalize = (inputString: string) =>
  inputString.replace(/^\w/, (c) => c.toUpperCase()).replace(/(\.|_)/g, ' ')
