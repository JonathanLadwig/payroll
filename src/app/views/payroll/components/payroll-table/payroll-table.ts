import { Component, computed, inject } from '@angular/core';
import { Earning } from '../../../../core/models/employee';
import { PayrollService } from '../../../../core/services/payroll.service';
import { TableHeading } from "../table-heading/table-heading";

@Component({
  selector: 'app-payroll-table',
  imports: [TableHeading],
  templateUrl: './payroll-table.html',
  styleUrl: './payroll-table.scss'
})
export class PayrollTable {
  payrollService = inject(PayrollService);

  earnings = this.payrollService.employeeEarnings;
  sort = this.payrollService.sortColumn;
  isDescending = computed(() => this.payrollService.sortDirection() === 'desc');

  onSort(column: keyof Earning | 'name') {
    this.payrollService.setSort(column);
  }
}
