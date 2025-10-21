import { Component, input } from '@angular/core';

@Component({
  selector: 'app-table-heading',
  imports: [],
  templateUrl: './table-heading.html',
  styleUrl: './table-heading.scss'
})
export class TableHeading {
  name = input<string>();
  selected = input<boolean>();
  desc = input<boolean>();
}
