export const PRODUCTS_DATA = [
  {
    pol: 'Jabłko',
    eng: 'Apple',
    id : 0,
    category: 'Owoce/Fruits'
  },
  {
    pol: 'Banan',
    eng: 'Banana',
    id : 1,
    category: 'Owoce/Fruits'
  },
  {
    pol: 'Ananas',
    eng: 'Pineapple',
    id : 2,
    category: 'Owoce/Fruits'
  },
  {
    pol: 'Marchew',
    eng: 'Carrot',
    id : 3,
    category: 'Warzywa/Vegetables'
  },
  {
    pol: 'Seler',
    eng: 'Celery',
    id : 4,
    category: 'Warzywa/Vegetables'
  },
  {
    pol: 'Ziemiak',
    eng: 'Potato',
    id : 5,
    category: 'Warzywa/Vegetables'
  },
  {
    pol: 'Pepsi',
    eng: 'Pepsi',
    id : 6,
    category: 'Napoje/Drinks',
  },
  {
    pol: 'Sok pomarańczowy',
    eng: 'Orange juice',
    id : 7,
    category: 'Napoje/Drinks',
  },
  {
    pol: 'Woda',
    eng: 'Water',
    id : 8,
    category: 'Napoje/Drinks',
  },
  {
    pol: 'Piwo',
    eng: 'Beer',
    id : 9,
    category: 'Alkohol/Alcohol',
  },
  {
    pol: 'Wódka',
    eng: 'Vodka',
    id : 10,
    category: 'Alkohol/Alcohol',
  },
  {
    pol: 'Amaretto',
    eng: 'Amaretto',
    id : 11,
    category: 'Alkohol/Alcohol',
  },
  {
    pol: 'Bułka',
    eng: 'Roll',
    id : 12,
    category: 'Pieczywo/Bread',
  },
  {
    pol: 'Chleb tostowy',
    eng: 'Toasted bread',
    id : 13,
    category: 'Pieczywo/Bread',
  },
  {
    pol: 'Chleb pełnoziarnisty',
    eng: 'Whole grain bread',
    id : 14,
    category: 'Pieczywo/Bread',
  },
  {
    pol: 'Ser żółty',
    eng: 'Cheese',
    id : 15,
    category: 'Nabiał/Dairy',
  },
  {
    pol: 'Mozzarella',
    eng: 'Mozzarella',
    id : 16,
    category: 'Nabiał/Dairy',
  },
  {
    pol: 'Mleko',
    eng: 'Milk',
    id : 17,
    category: 'Nabiał/Dairy',
  },
  {
    pol: 'Czekolada gorzka',
    eng: 'Dark chocolate',
    id : 18,
    category: 'Słodycze/Sweets',
  },
  {
    pol: 'Czekolada mleczna',
    eng: 'Chocolate',
    id : 19,
    category: 'Słodycze/Sweets',
  },
  {
    pol: 'Żelki',
    eng: 'Jelly',
    id : 20,
    category: 'Słodycze/Sweets',
  },
  {
    pol: 'Papryka ostra',
    eng: 'Hot pepper',
    id : 21,
    category: 'Przyprawy/Spices',
  },
  {
    pol: 'Papryka słodka',
    eng: 'Sweet pepper',
    id : 22,
    category: 'Przyprawy/Spices',
  },
  {
    pol: 'Bazylia',
    eng: 'Basil',
    id : 23,
    category: 'Przyprawy/Spices',
  },
];

export const CATEGORIES = ['Owoce/Fruits','Warzywa/Vegetables','Przyprawy/Spices','Słodycze/Sweets','Nabiał/Dairy','Pieczywo/Bread','Alkohol/Alcohol','Napoje/Drinks', 'Inne/Others'];

export const API_KEY = '19yzIl1VTUeDcJ2lI+Vucg==gOeJidsoibjzCyny';

export const propertiesLangMap = new Map([
  ['calories', 'kalorie (kcal)'],
  ['cholesterol', 'cholesterol (mg)'],
  ['fat', 'tłuszcze (g)'],
  ['fiber', 'błonnik (g)'],
  ['potassium', 'potas (mg)'],
  ['protein', 'białko (g)'],
  ['sodium', 'sód (mg)'],
  ['sugar', 'cukier (g)']
]);

// function is verifying that products are in local storage
export const checkLS = array => {
  const productsArray = JSON.parse(JSON.stringify(array));
  const LS = JSON.parse(localStorage.getItem('PRODUCTS')) || [];
  if (LS.length) {
    return LS;
  } else {
    localStorage.setItem('PRODUCTS', JSON.stringify(productsArray));
    return productsArray;
  }
}

// add new or update existing product in local storage
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

export const firstLetterUpperCase = string => {
  return string[0].toUpperCase().concat(string.slice(1,string.length))
}

export const ALERT_TYPES = {
  DOWNLOADED_PRODUCT_DATA: {
    variant: 'success',
    closeFunction: 'handleSetShowAlert',
    heading: 'Sukces!',
    body: 'Poprawnie pobrano właściwości produktu. W razie potrzeby zastosuj zmiany wedle uznania.',
  },
  NOT_DOWNLOADED_PRODUCT_DATA : {
    variant: 'danger',
    closeFunction: 'handleSetShowAlert',
    heading: 'O nie!',
    body: 'Nie znaleziono takiego produktu. Sprawdź pisownie i spróbuj ponownie.',
  },
  PRODUCT_EXIST_IN_STORE : {
    variant: 'danger',
    closeFunction: 'handleSetShowAlert',
    heading: 'Produkt istnieje!',
    body: 'Taki produkt już istnieje w bazie.',
  },
  PRODUCT_INPUTS_ERROR : {
    variant: 'danger',
    closeFunction: 'handleSetShowAlert',
    heading: 'Niepoprawnie wprowadzone dane!',
    body: 'Sprawdź, czy zostały dodane nazwy produktu lub wybrana kategoria.',
  },
  PRODUCT_ADD_TO_STORE : {
    variant: 'success',
    closeFunction: 'handleSetShowAlert',
    heading: 'Dobra robota!',
    body: 'Produkt został poprawnie dodany do bazy produktów.',
  },
}