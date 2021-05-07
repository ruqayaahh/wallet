// import React from 'react';
// import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import Balance from '../Components/Balance';
import Dropdown from '../Components/Dropdown';
// import ReactDOM from 'react-dom';
import Header from '../Components/Header';
import HeaderTwo from '../Components/HeaderTwo';
import Input from '../Components/Input';
import Sidebar from '../Components/Sidebar';
import Transactions from '../Components/Transactions';
import Dashboard from '../Components/Dashboard';
import Transfer from '../Components/Transfer';
import ResetPasswordInboxPage from '../Components/ResetPasswordInboxPage';
import ResetPasswordPage from '../Components/ResetPassworPage';
import ForgotPasswordPage from '../Components/ForgotPasswordPage';
import LoginPage from '../Components/ForgotPasswordPage';
import OTPPage from '../Components/OTPPage';
import SignupPage from '../Components/ForgotPasswordPage';

describe('<App2 />', () => {
    test('render Balance component', () => {
        renderHook(() => Balance());
    })
    // test('render Dashboard component', () => {
    //     renderHook(() => Dashboard());
    // })
    test('render header component', () => {
        renderHook(() => Header());
    })
    test('render HeaderTwo component', () => {
        renderHook(() => HeaderTwo());
    })
    test('render Transaction component', () => {
        renderHook(() => Transactions());
        // console.log(result.all);
    })
    test('render Transfer component', () => {
        renderHook(() => Transfer());
    })
    test('render Sidebar components', () => {
        renderHook(() => Sidebar());
        // console.log(result.all);
    })
    test('render Dashboard component', () => {
       const { result } = renderHook(() => Dashboard());
       console.log(result.all);
    })
    test('render Dropdown component', () => {
        renderHook(() => Dropdown());
    })
    test('render ForgotPassword component', () => {
        renderHook(() => ForgotPasswordPage());
    })
    test('render Input component', () => {
        renderHook(() => Input());
    })
    test('render LoginPage component', () => {
        renderHook(() => LoginPage());
    })
    test('render Message component', () => {
        renderHook(() => OTPPage());
    })
    test('render ResetPasswordInboxPage component', () => {
        renderHook(() => ResetPasswordInboxPage());
    })
    test('render ResetPasswordPage component', () => {
        renderHook(() => ResetPasswordPage());
    })
    test('render Signup component', () => {
        renderHook(() => SignupPage());
    })
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });