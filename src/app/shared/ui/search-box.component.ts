import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngrx-search-box',
  standalone: true,
  imports: [FormsModule],
  template: '<input placeholder="Search..." [(ngModel)]="query" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  readonly query = model('');
}
