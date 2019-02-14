import * as React from 'react';
import { shallow } from 'enzyme';
import {App} from "../App";
import Grid from '@material-ui/core/Grid';

describe('App Component', ()=>{
    const wrapper = shallow(<App/>)
    it("render one <Grid/> component",()=>{
        expect(wrapper.find(Grid).length).toEqual(2)
    })
})