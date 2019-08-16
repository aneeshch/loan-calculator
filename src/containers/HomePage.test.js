import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HomePage } from './HomePage';
import Slider from '../components/InputSlider';
import ResultTab from '../components/ResultTab';
import Loader from '../components/Loader';
import SideBar from '../components/SideBar';

configure({adapter: new Adapter()});

describe('<HomePage />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HomePage calculateLoan={()=>{}} loanData={{'amount':1000}}/>);
    });
    it('Render one SideBar element', () => {
        expect(wrapper.find(SideBar)).toHaveLength(1);
    });
    it('Render one ResultTab element', () => {
        expect(wrapper.find(ResultTab)).toHaveLength(1);
    });
    it('Render one Slider element', () => {
        expect(wrapper.find(Slider)).toHaveLength(2);
    });
    it('Should not render Loader', () => {
        expect(wrapper.find(Loader)).toHaveLength(0);
    });
    it('Render Loader element', () => {
        wrapper.setProps({loading: true});
        expect(wrapper.find(Loader)).toHaveLength(1);
    });    
});