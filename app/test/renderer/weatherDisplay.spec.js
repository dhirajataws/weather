import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import WeatherDisplayComponent from '../../components/WeatherDisplay';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

describe('WeatherDisplayComponent', () =>{
    it('should render temp',()=>{
        const renderer = TestUtils.createRenderer();
        renderer.render(<WeatherDisplayComponent title='title1' 
                                                 temp='20' 
                                                 windspeed='100' 
                                                 winddegree='90'
                                                 name='moscow'
                                                 unit='C'
                                                 wind='off' />);
        const actual = renderer.getRenderOutput();
        const expected = (
            <div style={{ display: 'block', fontSize: '15', margin: '20px', textAlign: 'right' }} > 20 Celsius </div>
        )
       expect(actual).toIncludeJSX(expected);
    });
    it('should render name',()=>{
            const renderer = TestUtils.createRenderer();
            renderer.render(<WeatherDisplayComponent title='title1'
                                                     temp='20'
                                                     windspeed='100'
                                                     winddegree='90'
                                                     name='moscow'
                                                     unit='C'
                                                     wind='off' />);
            const actual = renderer.getRenderOutput();
            const expected = (
                <div style={{ display: 'block', fontSize: '25', margin: '20px', textAlign: 'right' }} > moscow </div>
            )
            expect(actual).toIncludeJSX(expected);
        });
    it('should render title',()=>{
            const renderer = TestUtils.createRenderer();
            renderer.render(<WeatherDisplayComponent title='title1'
                                                     temp='20'
                                                     windspeed='100'
                                                     winddegree='90'
                                                     name='moscow'
                                                     unit='C'
                                                     wind='off' />);
            const actual = renderer.getRenderOutput();
            const expected = (
                <div style={{ display: 'block', fontSize: '20', margin: '20px', textAlign: 'left' }} > title1 </div>
            )
            expect(actual).toIncludeJSX(expected);
        });
}
)
