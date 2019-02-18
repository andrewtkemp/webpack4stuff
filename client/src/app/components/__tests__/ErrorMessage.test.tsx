import * as React from 'react';
import { mount } from "enzyme";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorMessage from "../ErrorMessage";

describe('Error Message Component', ()=>{
    const props = {
        message:"This is an Error"
    }
    const wrapper = mount(<ErrorMessage {...props}/>)
    it("Contains a Snackbar and SnackbarContent Component", ()=>{
        expect(wrapper.find(Snackbar).length).toEqual(1);
        expect(wrapper.find(SnackbarContent).length).toEqual(1);
    })
    it("Receives The Message Prop", ()=>{
        expect(wrapper.props().message).toEqual("This is an Error")
     })
    // it("Closes the Snackbar on Click", ()=>{
    //     wrapper.find('button').simulate("click");
    //     wrapper.update();
    //     expect(wrapper.state("open")).toEqual(false);
    // })

})