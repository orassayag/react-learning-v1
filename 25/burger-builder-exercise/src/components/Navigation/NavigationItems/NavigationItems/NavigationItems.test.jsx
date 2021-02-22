import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItem from '../NavigationItem/NavigationItem';
import NavigationItems from './NavigationItems';

configure({
    adapter: new Adapter()
});

describe('<NavigationItems />', () => {

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('it should render 2 <NavigationItem /> elements if the user is not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('it should render 3 <NavigationItem /> elements if the user is authenticated', () => {
        wrapper.setProps({
            isAuthenticated: true
        });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('it should contains logout <NavigationItem /> element if the user is authenticated', () => {
        wrapper.setProps({
            isAuthenticated: true
        });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});