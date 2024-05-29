import {render} from '@testing-library/react';
import HeaderComponent from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import React from 'react';
import {StaticRouter} from 'react-router-dom/server'

test("Logo should load on rendering header",()=>{
    // Load Header
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <HeaderComponent />
        </Provider>
    </StaticRouter>);
    // console.log(header);
    const logo = header.getAllByTestId("logo");
    // console.log(logo[0].src);
    expect(logo[0].src).toBe("http://localhost/dummy.png");
    //check if logo is loaded
});

test("cart should contain 0 items on rendering header",()=>{
    // Load Header
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <HeaderComponent />
        </Provider>
    </StaticRouter>);
    
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart- 0");
    // console.log(cart.innerHTML);
    
});

test("cart should contain 0 items on rendering header",()=>{
    // Load Header
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <HeaderComponent />
        </Provider>
    </StaticRouter>);
    
    const auth = header.getByTestId("auth");
    expect(auth.innerHTML).toBe("Login");
    console.log(auth.innerHTML);
    
});