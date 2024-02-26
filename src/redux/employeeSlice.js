import { createSlice, createAction } from '@reduxjs/toolkit';

//recupere les données depuis localStorage, retourne la table des données ou array vide
const getEmployeesFromStorage = () => {
  const employees = localStorage.getItem('employees');
  return employees ? JSON.parse(employees) : [];
};

//etat initial 
const initialState = {
  employees: getEmployeesFromStorage(),
};

export const loadEmployees = createAction('employee/loadEmployees');

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    //ajout d'un employé dans la liste
    addEmployee: (state, action) => {
      const newEmployee = action.payload;
      state.employees.push(newEmployee);
      localStorage.setItem('employees', JSON.stringify(state.employees));
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