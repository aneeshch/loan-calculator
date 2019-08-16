import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputSlider from './InputSlider';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

configure({adapter: new Adapter()});

describe('<InputSlider />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<InputSlider handleSliderChange={()=>{}}/>);
    });
    it('Render one slider element', () => {
        expect(wrapper.find(Slider)).toHaveLength(1);
    });
    it('Render one input element', () => {
        expect(wrapper.find(Input)).toHaveLength(1);
    });
        it('Render one div element', () => {
            expect(wrapper.find('div')).toHaveLength(1);
        });    
});