export const texts = {
  en: {
    beerInfo: {
      callToAction: 'If you want taste new sort of beer - click the bottom',
      brand: brand => `by ${brand}`,
      info: (ibu, alcohol, blg) => `${ibu}, alcohol: ${alcohol}, ${blg}`,
      title: 'New beer is...',
      button: 'Generate new beer'
    },
    userInfo: {
      years: years => `${years} years`
    },
    header: { logo: 'Beer generator' }
  },
  ru: {
    beerInfo: {
      callToAction: 'Если вы хотите сгенерировать новый сорт пива - нажмите кнопку',
      brand: brand => `от ${brand}`,
      info: (ibu, alcohol, blg) => `${ibu}, содержание спирта: ${alcohol}, ${blg}`,
      title: 'Новое пиво...',
      button: 'Новый сорт пива'
    },
    userInfo: {
      years: years => `${years} лет`
    },
    header: { logo: 'Генератор пива' }
  }
}
