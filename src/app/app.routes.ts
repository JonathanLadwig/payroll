import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./views/payroll/pages/payroll/payroll').then(mod => mod.PayrollPage)
    }
];
