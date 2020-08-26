import * as fromPizzas from '../actions/pizzas.actions';
import { Pizza } from '../../models/pizza.model';

// selector is used to compose state
// we can use the selector alongside store.select in our component

// introducing async events into the reducer is the wrong apprroach
// reducer is a pure function (synchronous)

export interface PizzaState {
  // 3 slices of state
  data: Pizza[];
  loaded: boolean,
  loading: boolean,
}

// APLICATION STATE
export const initialState: PizzaState = {
  data: [
    {
      "name": "Blazin' Inferno",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 4,
          "name": "chili"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        }
      ],
      "id": 1
    }
  ],
  loaded: false,
  loading: false,
};

// REDUCER
export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction,
): PizzaState {

  switch(action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  // we need to return the state
  // helps when our reducer binds our initialState object to the store
  // when it's initialized
  return state;
}

// can be passed into a create selector fn
// a function that accepts the state and retruns state.
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;