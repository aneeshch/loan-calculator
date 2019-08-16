import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonAppBar from './AppBar';
import AppBar from '@material-ui/core/AppBar';

configure({adapter: new Adapter()});

describe('<AppBar />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ButtonAppBar/>);
    });

    it('Render one AppBar element', () => {
        expect(wrapper.find(AppBar)).toHaveLength(1);
    });    
});