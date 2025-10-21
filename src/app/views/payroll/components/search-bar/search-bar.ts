import { Component, inject, signal } from '@angular/core';
import { PayrollService } from '../../../../core/services/payroll.service';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  private readonly payrollService = inject(PayrollService);
  private readonly filterTerm = signal('');

  onFilter(term: string) {
    this.payrollService.setFilter(term);
  }
}
