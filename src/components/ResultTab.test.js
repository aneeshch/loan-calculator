import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultTab from './ResultTab';

configure({adapter: new Adapter()});

describe('<ResultTab />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ResultTab/>);
    });
    it('Render one <ul> element', () => {
        expect(wrapper.find('ul')).toHaveLength(1);
    });
    it('Render four <li> elements', () => {
        expect(wrapper.find('li')).toHaveLength(4);
    });    
});