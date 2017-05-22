import expect from 'expect';
import weatherDisplay from '../../reducers/weatherDisplay';

describe('weatherDisplayReducer', () =>{
    it('should test state changes for temp',() => {
        expect(weatherDisplay({},{type:'ADD_WEATHERDISPLAYDETAILS',temp:100}).temp).toEqual(100);
    });
    it('should test state changes for name',() => {
        expect(weatherDisplay({},{type:'ADD_WEATHERDISPLAYDETAILS',name:'Sydney'}).name).toEqual('Sydney');
    });
    it('should test state changes for windspeed',() => {
        expect(weatherDisplay({},{type:'ADD_WEATHERDISPLAYDETAILS',windspeed:101}).windspeed).toEqual(101);
    });
    it('should test state changes for temp',() => {
        expect(weatherDisplay({},{type:'ADD_WEATHERDISPLAYDETAILS',winddegree:100}).winddegree).toEqual(100);
    });
});