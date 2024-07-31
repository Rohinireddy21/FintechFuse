import { Component } from '@angular/core';
import { BudgetCategory } from '../BudgetCategory';

@Component({
  selector: 'app-budgeting',
  templateUrl: './budgeting.component.html',
  styleUrls: ['./budgeting.component.css']
})
export class BudgetingComponent {
  budget: BudgetCategory[] = [];
  newBudgetCategory: BudgetCategory = { name: '', amount: 0 };
  amount: number = 0;
  name: string = '';
  BudgetfieldsEmpty: boolean = false;
  constructor() { }
  addCategories()
  {
    if (!this.name || !this.amount) {
      // Display a message indicating that fields are mandatory
      this.BudgetfieldsEmpty = true;
      return; // Exit the function early if any field is empty
    }
    this.BudgetfieldsEmpty = false;
    alert('Saving successfully !!!');
    this.budget.push({ ...this.newBudgetCategory });
    // Optionally, you may want to clear the input fields after submission
    this.name = '';
    this.amount = 0;
  }
  removeCategory(index: number) {
    const confirmation = window.confirm("Are you sure you want to remove this category?");
    if(confirmation) {
      this.budget.splice(index, 1);
    }
  }
}
