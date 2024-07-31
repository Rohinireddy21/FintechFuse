import { Component } from '@angular/core';
import { Goal } from '../Goal';

@Component({
  selector: 'app-goals-savings',
  templateUrl: './goals-savings.component.html',
  styleUrls: ['./goals-savings.component.css']
})
export class GoalsSavingsComponent {
  goals: Goal[] = [];
  goal: Goal[] = [];
  newGoal: Goal = { name: '', targetAmount: 0, currentAmount: 0, deadline: new Date(), completed: false};
  
  targetAmount: number = 0;
  currentAmount: number = 0;
  totalTargetAmount: number = 0;
  totalCurrentAmount: number = 0;
  name: string = '';
  deadline: Date = new Date();
  GoalfieldsEmpty: boolean = false;
  completed: boolean = false; // Add the completed property
  constructor() { }

  addGoal()
  {
    if (!this.name || !this.targetAmount || !this.currentAmount || !this.deadline) {
      // Display a message indicating that fields are mandatory
      this.GoalfieldsEmpty = true;
      return; // Exit the function early if any field is empty
    }
    this.GoalfieldsEmpty = false;
    this.totalTargetAmount += this.targetAmount;
    this.totalCurrentAmount += this.currentAmount;
    alert('Saving successfully !!!');
    this.goal.push({ ...this.newGoal });
    // Optionally, you may want to clear the input fields after submission
    this.name = '';
    this.targetAmount = 0;
    this.currentAmount = 0;
    this.deadline = new Date();
  }
  markAsRead(index: number) {
    const confirmation = window.confirm("Do you want to mark this as read?");
    if (confirmation) {
        // Mark the goal as completed
        this.goal[index].completed = true;
        // Optionally, you may want to perform additional actions here, such as updating a database.
    }
  }
  removeGoal(index: number) {
    const confirmation = window.confirm("Are you sure you want to remove this category?");
    if(confirmation) {
      this.goal.splice(index, 1);
    }
  }
}
