import * as React from 'react';
import { shallow } from 'enzyme';
import {App} from "../App";
import Grid from '@material-ui/core/Grid';


describe('App Component', ()=>{
    it("render one <Grid/> component",()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Grid).length).toEqual(2)
    })
})