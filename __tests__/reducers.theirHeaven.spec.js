const expect = require('chai').expect;
import theirHeaven from '../App/reducers/theirHeaven';

describe('theirHeaven reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(theirHeaven).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(theirHeaven.length).to.equal(2);
    });

    it('returns {isLoading:true} for FETCH_THEIR_HEAVEN_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_THEIR_HEAVEN_REQ';
        expect(theirHeaven(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, theirHeaven:{some:data}} for FETCH_THEIR_HEAVEN_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_THEIR_HEAVEN_SUCCESS';
        action.data = {some:'data'};
        expect(theirHeaven(state, action)).to.eql({isLoading:false, theirHeaven:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_THEIR_HEAVEN_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_THEIR_HEAVEN_ERROR';
        action.error = 'errormsg';
        expect(theirHeaven(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });
});
