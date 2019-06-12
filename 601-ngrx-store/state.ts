import { Action } from '@ngrx/store';

const pickBerry = 'PICK_BERRY';
export class PickBerryAction implements Action {
  type = pickBerry;
}

const pickApples = 'PICK_APPLES';
export class PickApplesAction implements Action {
  type = pickApples;
  constructor(public payload: number) {}
}

const emptyCart = 'EMPTY_CART';
export class EmptyCartAction implements Action {
  type = emptyCart;
}

export interface AppState {
  berryCounter: number;
  appleCounter: number;
}

export function berryCounterReducer(
  value: number = 0,
  action: Action
): number {
  switch (action.type) {
    case pickBerry:
      return value + 1;

    case emptyCart:
      return 0;

    default:
      return value;
  }
}

export function appleCounterReducer(
  value: number = 0,
  action: Action
): number {
  switch (action.type) {
    // If you have too many apples, they spill and you lose them all.
    case pickApples:
      const y = value + (action as PickApplesAction).payload;
      return y > 10 ? 0 : y;

    case emptyCart:
      return 0;

    default:
      return value;
  }
}
