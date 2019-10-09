import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
	transactions = [
		{
			date: "September 29, 2019",
			account: "Platinum",
			concept: "Colegiatura",
			description: "Pago de colegiatura",
			type: "Expense",
			amount: 2450.78,
		}
	];
	constructor() { }

	ngOnInit() {
		$(document).ready(() => {
			$('.datepicker').datepicker();
			$('select').formSelect();
			$('.modal').modal();
		});
	}

}
