import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideBar from './SideBar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';

configure({adapter: new Adapter()});

describe('<SideBar />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SideBar recentData={[{}, {}]}/>);
    });
    it('Render one Button element', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });
    it('Render one Delete Icon elements', () => {
        expect(wrapper.find(DeleteIcon)).toHaveLength(1);
    });
    it('Render one Delete Icon elements', () => {
        expect(wrapper.find(ListItem)).toHaveLength(2);
    });    
});