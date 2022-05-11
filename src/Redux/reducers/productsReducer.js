import { ADD_PRODUCT, EDIT_PRODUCT } from '../actions/actionsTypes'

const PRODUCTS_DATA = [
  {
    category: 'Owoce',
    objects: [
      {
        pol: 'Jabłko',
        eng: 'Apple'
      },
      {
        pol: 'Banan',
        eng: 'Banana'
      },
      {
        pol: 'Ananas',
        eng: 'Pineapple'
      },
    ]
  },
  {
    category: 'Warzywa',
    objects: [
      {
        pol: 'Marchew',
        eng: 'Carrot'
      },
      {
        pol: 'Seler',
        eng: 'Celery'
      },
      {
        pol: 'Ziemiak',
        eng: 'Potato'
      },
    ]
  },
  {
    category: 'Napoje',
    objects: [
      {
        pol: 'Pepsi',
        eng: 'Pepsi'
      },
      {
        pol: 'Sok pomarańczowy',
        eng: 'Orange juice'
      },
      {
        pol: 'Woda',
        eng: 'Water'
      },
    ]
  },
  {
    category: 'Alkohol',
    objects: [
      {
        pol: 'Piwo',
        eng: 'Beer'
      },
      {
        pol: 'Wódka',
        eng: 'Vodka'
      },
      {
        pol: 'Amaretto',
        eng: 'Amaretto'
      },
    ]
  },
  {
    category: 'Pieczywo',
    objects: [
      {
        pol: 'Bułka',
        eng: 'Roll'
      },
      {
        pol: 'Chleb tostowy',
        eng: 'Toasted bread'
      },
      {
        pol: 'Chleb pełnoziarnisty',
        eng: 'Whole grain bread'
      },
    ]
  },
  {
    category: 'Nabiał',
    objects: [
      {
        pol: 'Ser żółty',
        eng: 'Cheese'
      },
      {
        pol: 'Mozzarella',
        eng: 'Mozzarella'
      },
      {
        pol: 'Mleko',
        eng: 'Milk'
      },
    ]
  },
  {
    category: 'Słodycze',
    objects: [
      {
        pol: 'Czekolada gorzka',
        eng: 'Dark chocolate'
      },
      {
        pol: 'Czekolada mleczna',
        eng: 'Chocolate'
      },
      {
        pol: 'Żelki',
        eng: 'Jelly'
      },
    ]
  },
  {
    category: 'Przyprawy',
    objects: [
      {
        pol: 'Papryka ostra',
        eng: 'Hot pepper'
      },
      {
        pol: 'Papryka słodka',
        eng: 'Sweet pepper'
      },
      {
        pol: 'Bazylia',
        eng: 'Basil'
      },
    ]
  },
]

let productsCounter = PRODUCTS_DATA.reduce((a,b) => a += b.objects.length,0);

const initialState = {
  products: PRODUCTS_DATA,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = { id: ++productsCounter,  ...action.product};
      return {
        // tasks: [...state.tasks, newTask],
      }
    case EDIT_PRODUCT:
      const index = state.tasks.findIndex(task => task.id === action.id);
      const tasks = [...state.tasks];
      tasks[index] = {...action.task};
      return {
        // tasks: tasks,
      }
    default:
      break;
  }
  return state;
}

export default productsReducer;