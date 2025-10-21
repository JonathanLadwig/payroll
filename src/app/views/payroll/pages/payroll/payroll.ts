import { Component } from '@angular/core';
import { EmployeeInfo } from "../../components/employee-info/employee-info";
import { PayrollTable } from "../../components/payroll-table/payroll-table";
import { SearchBar } from "../../components/search-bar/search-bar";

@Component({
  selector: 'app-payroll',
  imports: [EmployeeInfo, PayrollTable, SearchBar],
  templateUrl: './payroll.html',
  styleUrl: './payroll.scss'
})
export class PayrollPage {

}
