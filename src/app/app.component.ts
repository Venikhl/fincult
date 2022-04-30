import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fincult';

  public loan: number = 0;
  public payment_in_period = 0;
  public loan_amount: number = 0;
  public interest_rate: number = 0;
  public loan_term: number = 0;

  public calculate() {
    this.loan = this.loan_amount*(this.interest_rate+(this.interest_rate/(1+this.interest_rate)*this.loan_term-1));
  }
}