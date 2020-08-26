import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models/pizza.model';
// import { PizzasService } from '../../services/pizzas.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas$ | async)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas$ | async)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;
  // async pipe allows us to subscribe to our observable

  constructor(
    // private pizzaService: PizzasService
    private store: Store<fromStore.ProductsState>
    ) {}

  ngOnInit() {
    // this.pizzaService.getPizzas().subscribe(pizzas => {
    //   this.pizzas = pizzas;
    // });


    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    // this.store.select(fromStore.getAllPizzas).subscribe(state => {
    //   this.pizzas = state;
    //   console.log(state);
    // });
  }
}

// async pipe allows observable to be passed straight to our template