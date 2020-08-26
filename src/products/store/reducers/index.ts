import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducers';

export interface ProductsState {
  // pizzas === a slice of state
  // exporting a property called the PizzaState
  // we've composed a new interface that use another interface further down our state tree
  pizzas: fromPizzas.PizzaState
}

// register our reducers
// actionreducermap describing what the reducers look like
// and how they are composed
export const reducers: ActionReducerMap<ProductsState> = {
  // a slice of state (pizzas) is managed by a reducer fn
  pizzas: fromPizzas.reducer

};

// Create base level of our state Obj
// const that holds a selector for our entire lazyloaded module
// 'products' comes from the feature module
export const getProductsState = createFeatureSelector<ProductsState>('products');

// another selector to compose our ProductsState
// pizza state
// returns the products dot pizzas
// creates a selector starting from prodcuts
export const getPizzaState = createSelector(
  getProductsState, 
  (state: ProductsState) => state.pizzas
  );

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);


// 3 different selectors
// selectors are asking for different properties at different levels