const expect = require('chai').expect;
import instrument from '../App/reducers/instrument';

describe('instrument reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(instrument).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(instrument.length).to.equal(2);
    });

    it('returns {isLoading:true} for FETCH_INSTRUMENTS_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_INSTRUMENTS_REQ';
        expect(instrument(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, instruments:{some:data}} for FETCH_INSTRUMENTS_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_INSTRUMENTS_SUCCESS';
        action.data = {some:'data'};
        expect(instrument(state, action)).to.eql({isLoading:false, instruments:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_INSTRUMENTS_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_INSTRUMENTS_ERROR';
        action.error = 'errormsg';
        expect(instrument(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });
});
