import styles from './styles'
// @ts-ignore
import ReactPDF = require('@react-pdf/renderer')

const compose = (classes: string): ReactPDF.Styles => {
  const css: ReactPDF.Styles = {
    //@ts-ignore
    '@import': 'url(https://fonts.bunny.net/css?family=nunito:400,600)',
  }

  const classesArray: string[] = classes.replace(/\s+/g, ' ').split(' ')

  classesArray.forEach((className) => {
    if (typeof styles[className] !== undefined) {
      Object.assign(css, styles[className])
    }
  })

  return css
}

export default compose
