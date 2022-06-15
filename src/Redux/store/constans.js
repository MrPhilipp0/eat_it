export const PRODUCTS_DATA = [
  {
    category: 'Owoce/Fruits',
    objects: [
      {
        pol: 'Jabłko',
        eng: 'Apple',
        id : 0
      },
      {
        pol: 'Banan',
        eng: 'Banana',
        id : 1
      },
      {
        pol: 'Ananas',
        eng: 'Pineapple',
        id : 2
      },
    ]
  },
  {
    category: 'Warzywa/Vegetables',
    objects: [
      {
        pol: 'Marchew',
        eng: 'Carrot',
        id : 3
      },
      {
        pol: 'Seler',
        eng: 'Celery',
        id : 4
      },
      {
        pol: 'Ziemiak',
        eng: 'Potato',
        id : 5
      },
    ]
  },
  {
    category: 'Napoje/Drinks',
    objects: [
      {
        pol: 'Pepsi',
        eng: 'Pepsi',
        id : 6
      },
      {
        pol: 'Sok pomarańczowy',
        eng: 'Orange juice',
        id : 7
      },
      {
        pol: 'Woda',
        eng: 'Water',
        id : 8
      },
    ]
  },
  {
    category: 'Alkohol/Alcohol',
    objects: [
      {
        pol: 'Piwo',
        eng: 'Beer',
        id : 9
      },
      {
        pol: 'Wódka',
        eng: 'Vodka',
        id : 10
      },
      {
        pol: 'Amaretto',
        eng: 'Amaretto',
        id : 11
      },
    ]
  },
  {
    category: 'Pieczywo/Bread',
    objects: [
      {
        pol: 'Bułka',
        eng: 'Roll',
        id : 12
      },
      {
        pol: 'Chleb tostowy',
        eng: 'Toasted bread',
        id : 13
      },
      {
        pol: 'Chleb pełnoziarnisty',
        eng: 'Whole grain bread',
        id : 14
      },
    ]
  },
  {
    category: 'Nabiał/Dairy',
    objects: [
      {
        pol: 'Ser żółty',
        eng: 'Cheese',
        id : 15
      },
      {
        pol: 'Mozzarella',
        eng: 'Mozzarella',
        id : 16
      },
      {
        pol: 'Mleko',
        eng: 'Milk',
        id : 17
      },
    ]
  },
  {
    category: 'Słodycze/Sweets',
    objects: [
      {
        pol: 'Czekolada gorzka',
        eng: 'Dark chocolate',
        id : 18
      },
      {
        pol: 'Czekolada mleczna',
        eng: 'Chocolate',
        id : 19
      },
      {
        pol: 'Żelki',
        eng: 'Jelly',
        id : 20
      },
    ]
  },
  {
    category: 'Przyprawy/Spices',
    objects: [
      {
        pol: 'Papryka ostra',
        eng: 'Hot pepper',
        id : 21
      },
      {
        pol: 'Papryka słodka',
        eng: 'Sweet pepper',
        id : 22
      },
      {
        pol: 'Bazylia',
        eng: 'Basil',
        id : 23
      },
    ]
  },
]

export const API_KEY = '19yzIl1VTUeDcJ2lI+Vucg==gOeJidsoibjzCyny';

// function is verifying that product is in local storage
export const checkLS = array => {
  const productsArray = JSON.parse(JSON.stringify(array));
  const LS = JSON.parse(localStorage.getItem('PRODUCTS')) || [];
  if (LS.length) {
    const listIDsfromLS = LS.map(item => item.id);
    return productsArray.map(category => {
      return {
        ...category,
        objects: category.objects.map(prod => {
          if (listIDsfromLS.includes(prod.id)) {
            return LS.filter(item => item.id === prod.id)[0];
          } else {
            return prod;
          }
        }) 
      }        
    })
  } else return productsArray;
}

// add new or update existing product to local storage
export const updateProductInLS = async newItem => {
  const list = JSON.parse(await localStorage.getItem('PRODUCTS')) || [];
  if (!list.filter(prod => prod.eng === newItem.eng).length) {
    list.push(newItem);
  } else {
    const index = list.findIndex(prod => newItem.id === prod.id);
    list[index] = newItem;
  }
  await localStorage.setItem('PRODUCTS', JSON.stringify(list));
}