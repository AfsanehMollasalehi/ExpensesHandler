import { useState } from 'react';
import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
