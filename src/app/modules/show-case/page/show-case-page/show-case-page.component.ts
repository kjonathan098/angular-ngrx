import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import {
  loadItems,
  loadItemsButton,
} from 'src/app/state/actions/items.actions';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  listItems: ItemModel[] = [];

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }

  fireAction() {
    console.log('firing actions');
    this.store.dispatch(loadItemsButton());
  }
}
