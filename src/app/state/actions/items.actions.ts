import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction(`[Items List] load Items`);

export const loadItemsButton = createAction(`[Items List Button] load Items`);

export const loadedItems = createAction(
  `[Items List] loaded success`,
  props<{ items: ItemModel[] }>()
);
