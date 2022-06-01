export function changeCssRootVariables(theme) {
  const backgroundColor = `var(--background-color-${theme})`
  const fontColor = `var(--font-color-${theme})`

  document.body.style.setProperty('--background-color', backgroundColor)
  document.body.style.setProperty('--font-color', fontColor)
}
