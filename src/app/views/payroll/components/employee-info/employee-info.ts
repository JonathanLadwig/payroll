import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PayrollService } from '../../../../core/services/payroll.service';

@Component({
  selector: 'app-employee-info',
  imports: [CurrencyPipe],
  templateUrl: './employee-info.html',
  styleUrl: './employee-info.scss'
})
export class EmployeeInfo {
  private readonly payrollService = inject(PayrollService);
  employee = this.payrollService.employeeBasicInfo;
  summary = this.payrollService.employeeSummary;

}
