import expect from 'expect';
import {title, unit, wind} from '../../reducers/weatherParameters';


describe('weatherParametersReducer', () =>{
    it('should test state changes for title',() => {
        expect(title({},{type:'CHANGE_TITLE',title:'title1'})).toEqual('title1');
    });
    it('should test state changes for name',() => {
        expect(unit({},{type:'CHANGE_UNIT',unit:'F'})).toEqual('F');
    });
    it('should test state changes for windspeed',() => {
        expect(wind({},{type:'CHANGE_WIND',wind:'off'})).toEqual('off');
    });

});
