export const texts = {
  en: {
    beerInfo: {
      title: 'New beer is...',
      brand: brand => `by ${brand}`,
      params: 'Params:',
      alcohol: alcohol => `Alcohol: ${alcohol}`,
      ibu: ibu => `IBU:  ${ibu}`,
      color: ebc => {
        if (ebc < 6) return 'Color: Very light'
        if (ebc < 12) return 'Color: Golden'
        if (ebc < 25) return 'Color: Amber'
        if (ebc < 45) return 'Color: Copper'
        if (ebc < 60) return 'Color: Brown'
        if (ebc < 80) return 'Color: Dark brown'
        return 'Color: Black'
      },
      pairing: 'Good pairing with:',
      pairingList: pairing => `${pairing}`
    },
    callToAction: 'If you want taste new sort of beer - click the bottom',
    generateBeer: 'Generate new beer',
    header: { logo: 'Beer generator' }
  },
  ru: {
    beerInfo: {
      title: 'Ваше пиво...',
      brand: brand => `от ${brand}`,
      params: 'Параметры:',
      alcohol: alcohol => `Cодержание спирта: ${alcohol}`,
      ibu: ibu => `Горечь (IBU):  ${ibu}`,
      color: ebc => {
        if (ebc < 6) return 'Цвет: Белое'
        if (ebc < 12) return 'Цвет: Светлое'
        if (ebc < 25) return 'Цвет: Янтарное'
        if (ebc < 45) return 'Цвет: Медное'
        if (ebc < 60) return 'Цвет: Коричневое'
        if (ebc < 80) return 'Цвет: Тёмное'
        return 'Цвет: Чёрное'
      },
      pairing: 'Хорошо сочетается с:',
      pairingList: pairing => `${pairing}`
    },
    callToAction: 'Говорят, что знания - сила, но на самом деле сила это пиво',
    generateBeer: 'Новый сорт пива',
    header: { logo: 'Генератор пива' }
  }
}
