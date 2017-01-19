const expect = require('chai').expect;
import matches from '../App/reducers/matches';

describe('matches reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(matches).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(matches.length).to.equal(2);
    });

    it('returns {isLoading:true} for FETCH_MATCHES_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_MATCHES_REQ';
        expect(matches(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, userMatches:{some:data}} for FETCH_MATCHES_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_MATCHES_SUCCESS';
        action.data = {some:'data'};
        expect(matches(state, action)).to.eql({isLoading:false, userMatches:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_MATCHES_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_MATCHES_ERROR';
        action.error = 'errormsg';
        expect(matches(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });
});
