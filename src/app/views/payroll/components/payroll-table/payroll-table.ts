import { Component, inject } from '@angular/core';
import { Earning } from '../../../../core/models/employee';
import { PayrollService } from '../../../../core/services/payroll.service';

@Component({
  selector: 'app-payroll-table',
  imports: [],
  templateUrl: './payroll-table.html',
  styleUrl: './payroll-table.scss'
})
export class PayrollTable {
  payrollService = inject(PayrollService);

  earnings = this.payrollService.employeeEarnings;
  sort = this.payrollService.sortColumn;

  onSort(column: keyof Earning | 'name') {
    this.payrollService.setSort(column);
  }
}
