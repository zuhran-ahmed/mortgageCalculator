import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mortageCalculator';

  isError: boolean = false;

  purchasePrice: string = '';
  downPayment: string = '';
  interestRate: string = '';
  repaymentTime: string = '';
  loanAmount: number = 0;
  monthlyMortage: number = 0;
  monthlyInterest: number = 0;
  totalPaymentMonths: number = 0;
  leftAmount: number = 0;
  rightAmount: number = 0;
  totalAmount: number = 0;

  interestRateFunction = () => {
    this.monthlyInterest = Number(
      (Number(this.interestRate) / 12 / 100).toFixed(6)
    );
    console.log(this.monthlyInterest);

    return (this.monthlyInterest = this.monthlyInterest);
  };

  paymentMonthsFunction = () => {
    this.totalPaymentMonths = Number(Number(this.repaymentTime) * 12);
    return (this.totalPaymentMonths = this.totalPaymentMonths);
  };

  leftAmountFunction = () => {
    this.leftAmount =
      this.monthlyInterest *
      Math.pow(1 + this.monthlyInterest, this.totalPaymentMonths);
    console.log(this.leftAmount);
    return this.leftAmount;
  };
  rightAmountFunction = () => {
    this.rightAmount =
      Math.pow(1 + this.monthlyInterest, this.totalPaymentMonths) - 1;
    console.log(this.rightAmount);

    return this.rightAmount;
  };
  monthlyMortageFunction = () => {
    this.monthlyMortage = Number(
      (this.loanAmount * (this.leftAmount / this.rightAmount)).toFixed(2)
    );
    return this.totalAmount;
  };

  loanAmountFunction = () => {
    this.loanAmount = Number(this.purchasePrice) - Number(this.downPayment);
    if (Number(this.purchasePrice) > Number(this.downPayment)) {
      this.loanAmount = this.loanAmount;
    } else {
      this.loanAmount = 0;
      this.isError = true;
    }
  };
  allFunctionCalls = () => {
    if (
      (Number(this.interestRate) > 1 || Number(this.interestRate) == 1) &&
      (Number(this.repaymentTime) > 1 || Number(this.repaymentTime) == 1)
    ) {
      this.interestRateFunction();
      this.paymentMonthsFunction();
      this.loanAmountFunction();
      this.leftAmountFunction();
      this.rightAmountFunction();
      this.monthlyMortageFunction();
      this.isError = false;
    } else {
      this.isError = true;
    }
  };
}
