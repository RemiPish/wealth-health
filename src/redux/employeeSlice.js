import { createSlice, createAction } from '@reduxjs/toolkit';

const getEmployeesFromStorage = () => {
  const employees = localStorage.getItem('employees');
  return employees ? JSON.parse(employees) : [];
};

const initialState = {
  employees: getEmployeesFromStorage(),
};

export const loadEmployees = createAction('employee/loadEmployees');

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = action.payload;
      console.log("Adding employee:", newEmployee); // Debug log
      state.employees.push(newEmployee);
      localStorage.setItem('employees', JSON.stringify(state.employees));
      console.log("Updated localStorage:", localStorage.getItem('employees'));
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(loadEmployees, (state) => {
        state.employees = getEmployeesFromStorage();
      });
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;