import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.sass']
})
export class AccountsComponent implements OnInit {
	accounts = [
		{
			name: 'Platinum',
			description: 'This is a fake description for an account.',
			balance: '1200',
			currency: 'MXN'
		},
		{
			name: 'Black',
			description: 'This is a fake description for an account.',
			balance: '8000',
			currency: 'MXN'
		},
		{
			name: 'Gold',
			description: 'This is a fake description for an account.',
			balance: '-1200',
			currency: 'USD'
		},
	];
	constructor() { }

	ngOnInit() {
	}

}
