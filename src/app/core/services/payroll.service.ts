import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Earning, Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  private readonly http: HttpClient = inject(HttpClient);

  private readonly filterTerm = signal('');

  readonly sortColumn = signal<keyof Earning>('name');
  readonly sortDirection = signal<'asc' | 'desc'>('asc');

  employeeData = rxResource<Employee, unknown>({
    stream: () =>
      this.http.get<{ employee: Employee }>('assets/employee.json').pipe(
        map(response => response.employee)
      )
  });

  employeeBasicInfo = computed(() => {
    const employee = this.employeeData.value();
    if (!employee) {
      return null;
    }

    return {
      name: employee.name,
      id: employee.id,
      team: employee.team
    };
  });

  employeeSummary = computed(() => {
    const employee = this.employeeData.value();
    return employee ? employee.summary : null;
  });

  employeeEarnings = computed<Earning[]>(() => {
    const employee = this.employeeData.value();
    if (!employee) {
      return [];
    }

    let earnings = [...employee.earnings];

    const term = this.filterTerm();
    if (term) {
      earnings = earnings.filter(earning =>
        earning.name.toLowerCase().includes(term.toLowerCase()) ||
        earning.description.toLowerCase().includes(term.toLowerCase()) ||
        earning.type.toLowerCase().includes(term.toLowerCase())
      );
    }

    const sortCol = this.sortColumn();
    const sortDir = this.sortDirection();
    earnings.sort((a, b) => {
      const aValue = a[sortCol];
      const bValue = b[sortCol];

      if (aValue < bValue) {
        return sortDir === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return sortDir === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });

    return earnings;
  });

  setFilter(term: string) {
    this.filterTerm.set(term);
  }

  setSort(column: keyof Earning | 'name') {
    if (this.sortColumn() === column) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }
  }
}
