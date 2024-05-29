import Body from '../Body';
import "@testing-library/jest-dom"
import {render, waitFor} from '@testing-library/react';
import React from 'react';
import { RESTAURANT_DATA } from '../../mocks/json_data';
import {Provider} from 'react-redux';
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:() =>{return Promise.resolve(RESTAURANT_DATA)}
    })
})
test("Shimmer should be loaded on rendering",()=>{
    const body = render(
    <StaticRouter >
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>
    );
    const shimmer = body.getByTestId('shimmer');
    expect(shimmer.children.length).toBe(20);
    // console.log(shimmer);
})


test("Body should be loaded on rendering", async ()=>{
    const body = render(
    <StaticRouter >
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));
    const resList = body.getByTestId('resList');
    // expect(resList.children.length).toBe(20);
    console.log(resList); 
})