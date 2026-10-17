const { configureStore } = require("@reduxjs/toolkit");
import employeeReducer from './slice';
import studentReducer from './mySlice';
import authReducer from "./authSlice"
export const store = configureStore({
    reducer:{
        employeeData:employeeReducer,
        studentData:studentReducer,
        authReducer:authReducer
    }
})