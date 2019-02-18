import * as React from 'react';
import { mount } from "enzyme";
import UserForm from "../UserForm";



describe("UserForm",()=>{
    it("renders correctly",()=>{
        const wrapper = mount(<UserForm/>);
        expect(wrapper.exists()).toBe(true)
    })
    it("Updates State on Change",()=>{
        const wrapper = mount(<UserForm/>);
        expect(wrapper.exists()).toBe(true)
    })
})