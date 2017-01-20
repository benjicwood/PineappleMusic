const expect = require('chai').expect;
import myHeaven from '../App/reducers/myHeaven';

describe('myHeaven reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(myHeaven).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(myHeaven.length).to.equal(2);
    });

    it('returns {isLoading:true} for FETCH_MY_HEAVEN_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_MY_HEAVEN_REQ';
        expect(myHeaven(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, myHeaven:{some:data}} for FETCH_MY_HEAVEN_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_MY_HEAVEN_SUCCESS';
        action.data = {some:'data'};
        expect(myHeaven(state, action)).to.eql({isLoading:false, myHeaven:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_MY_HEAVEN_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_MY_HEAVEN_ERROR';
        action.error = 'errormsg';
        expect(myHeaven(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });
});
