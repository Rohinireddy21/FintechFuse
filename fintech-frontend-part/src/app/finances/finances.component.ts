import { Component, OnInit } from '@angular/core';
import { Expense } from '../Expense';
import { Income } from '../Income';
import { Router } from '@angular/router';
import { Chart, ChartConfiguration, TickOptions } from 'chart.js';
import { pieChartData } from '../data';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent{
  incomeAmount: number = 0; // Initialize with a default value
  incomeDescription: string = '';
  expenseAmount: number = 0;
  expenseDescription: string = '';
  totalIncome: number = 0;
  totalExpenses: number = 0;
  profitOrLoss: number = 0;
  IncomefieldsEmpty: boolean = false;
  ExpensefieldsEmpty: boolean = false;
  insights: string = '';
  incomes: Income[] = [];
  newIncome: Income = { incomeAmount: 0, incomeDescription: '' };
  expenses: Expense[] = [];
  newExpense: Expense = { expenseAmount: 0, expenseDescription: '' };

  
  constructor(private router: Router) { }
 
  
  submitIncomeForm() {
    if (!this.incomeAmount || !this.incomeDescription) {
      // Display a message indicating that fields are mandatory
      this.IncomefieldsEmpty = true;
      return; // Exit the function early if any field is empty
    }
    this.IncomefieldsEmpty = false;
    // Add the income amount to the total income
    this.totalIncome += this.incomeAmount;
    alert('Income is adding successfully !!!');
    this.incomes.push({ ...this.newIncome });
    // Optionally, you may want to clear the input fields after submission
    this.incomeAmount = 0;
    this.incomeDescription = '';
    // Calculate profit/loss
    this.calculateProfitOrLoss();
    this.provideInsights();
  }

  submitExpenseForm() {
    if (!this.expenseAmount || !this.expenseDescription) {
      // Display a message indicating that fields are mandatory
      this.ExpensefieldsEmpty = true;
      return; // Exit the function early if any field is empty
    }
    this.ExpensefieldsEmpty = false;
    // Add the expense amount to the total expenses
    this.totalExpenses += this.expenseAmount;
    alert('Expense is adding successfully !!!');
    this.expenses.push({ ...this.newExpense });
    // Optionally, you may want to clear the input fields after submission
    this.expenseAmount = 0;
    this.expenseDescription = '';
    // Calculate profit/loss
    this.calculateProfitOrLoss();
    this.provideInsights();
  }

  calculateProfitOrLoss() {
    this.profitOrLoss = this.totalIncome - this.totalExpenses;
  }
  provideInsights() {
    if (this.profitOrLoss > 0) {
      // User has surplus income, suggest investing
      this.insights = 'Hey there! You have surplus income and your finances looks good, it might be a great time to think about investing in something tangible like gold or land. Gold can act as a safety net during uncertain times, and investing in land can offer long-term stability and growth potential.';
    } else if (this.profitOrLoss < 0) {
      // User has a loss, suggest reducing expenses
      this.insights = 'You are spending more than you earn. Consider reducing expenses to improve your financial situation. During challenging times, it is important to stay resilient and focus on strategies to mitigate your losses. Consider reviewing your expenses and identifying areas where you can cut back temporarily. Additionally, explore opportunities to increase your income, whether through freelancing, part-time work, or exploring new skills. Do not hesitate to seek guidance from a financial advisor who can offer personalized advice tailored to your situation and help you navigate through this tough phase.';
    } else {
      // No profit or loss
      this.insights = 'Your income equals your expenses. Keep track of your finances to maintain a balanced budget.';
    }
  }
  // Logout function to navigate to the login page
  logout() {
    this.router.navigate(['/login']);
  }
  /*myChart!: Chart;

  ngOnInit() {
    // Call the function to initialize the chart
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (ctx) {
      this.createChart(ctx);
    } else {
      console.error('Canvas element with ID "myChart" not found.');
    }
  }

  createChart(ctx: HTMLCanvasElement) {
    // Create the chart configuration
    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: ['Total Income', 'Total Expenses'],
        datasets: [{
          label: 'Amount',
          data: [this.totalIncome, this.totalExpenses],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            type: 'linear', // Use 'linear' scale for y-axis
            ticks: {
              beginAtZero: true // Ensure beginAtZero is set to a boolean value
            } as unknown as TickOptions
          },
          x: {
            type: 'category', // Use 'category' scale for x-axis
            labels: ['Total Income', 'Total Expenses']
          }
        }
      }
    };

    // Create the chart
    this.myChart = new Chart(ctx, config);
  }*/
}
