export interface Goal {
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date | null;
  completed: boolean;
}
  