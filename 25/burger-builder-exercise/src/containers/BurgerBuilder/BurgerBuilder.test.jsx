import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls/BuildControls';

configure({
    adapter: new Adapter()
});

describe('<BurgerBuilder />', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngrediencies={() => { }} />);
    });

    it('it should render <BuildControls /> when receiving ingrediencies', () => {
        wrapper.setProps({
            ings: {
                salad: 0,
                meat: 0,
                bacon: 0,
                cheese: 0
            }
        });
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});