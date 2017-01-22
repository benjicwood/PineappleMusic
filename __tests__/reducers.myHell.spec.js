const expect = require('chai').expect;
import myHell from '../App/reducers/myHell';

describe('myHell reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(myHell).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(myHell.length).to.equal(2);
    });

    it('returns {isLoading:true} for FETCH_MY_HELL_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_MY_HELL_REQ';
        expect(myHell(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, myHell:{some:data}} for FETCH_MY_HELL_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_MY_HELL_SUCCESS';
        action.data = {some:'data'};
        expect(myHell(state, action)).to.eql({isLoading:false, myHell:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_MY_HELL_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_MY_HELL_ERROR';
        action.error = 'errormsg';
        expect(myHell(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });
});
