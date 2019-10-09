import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'accounts', component: AccountsComponent },
	{ path: 'accounts/:accountId', component: AccountComponent },
	{ path: 'transactions', component: TransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
