import heroCover from './Lab_04/dish.png'
import logoPink from './Lab_04/chefify.png'
import logoWhite from './Lab_04/white_chefify.png'
import avatar from './Lab_04/avatar.png'
import iconEmptyState from './Lab_02/nothing.png'

import foodAvocadoSalad from './Lab_03/avacador_salad.png'
import foodCornSalad from './Lab_03/corn_salad.png'
import foodCucumberSalad from './Lab_03/cucumber_salad_charry_tomatoes.png'
import foodFiveColorSalad from './Lab_03/five_color_salad.png'
import foodItalianTomato from './Lab_03/italian_style_tomato_salad.png'
import foodLotusSalad from './Lab_03/lotus_delight_salad.png'
import foodCabbageShrimp from './Lab_03/salad_with_cabbage_and_shrimp.png'
import foodSpaghettiShrimp from './Lab_02_b/Vegetable and shrimp spaghetti.png'

import rating1 from './Lab_03/Rating 11.png'
import rating2 from './Lab_03/Rating 12.png'
import rating3 from './Lab_03/Rating 13.png'
import rating4 from './Lab_03/Rating 14.png'
import rating5 from './Lab_03/Rating 15.png'

export const chefifyAssets = {
  logos: {
    primaryPink: logoPink,
    primaryWhite: logoWhite,
  },
  profile: {
    avatar,
  },
  hero: {
    cover: heroCover,
  },
  icons: {
    emptyState: iconEmptyState,
  },
  foods: {
    featured: [
      foodAvocadoSalad,
      foodCornSalad,
      foodCucumberSalad,
      foodFiveColorSalad,
      foodItalianTomato,
      foodLotusSalad,
      foodCabbageShrimp,
      foodSpaghettiShrimp,
    ],
    detailFallback: foodLotusSalad,
  },
  ratings: {
    oneStar: rating1,
    twoStar: rating2,
    threeStar: rating3,
    fourStar: rating4,
    fiveStar: rating5,
  },
}

export function getFoodImageByIndex(index) {
  const list = chefifyAssets.foods.featured
  if (!list.length) {
    return chefifyAssets.foods.detailFallback
  }
  return list[index % list.length]
}
