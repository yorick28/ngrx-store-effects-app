import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';
// REDUCER allows the actions to be responded by the store

// ACTION CONST
// load pizas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';


// DEFINE ACTION CREATORS
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  // we can pass a msg as a payload property back to the server if there is an error
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {
  }
}

// ACTION TYPES
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess