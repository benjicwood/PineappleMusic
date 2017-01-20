const expect = require('chai').expect;
import genre from '../App/reducers/genre';

describe('genre reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(genre).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(genre.length).to.equal(2);
    });

    it('returns {isLoading:true} for FETCH_GENRES_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_GENRES_REQ';
        expect(genre(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, genres:{some:data}} for FETCH_GENRES_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_GENRES_SUCCESS';
        action.data = {some:'data'};
        expect(genre(state, action)).to.eql({isLoading:false, genres:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_GENRES_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_GENRES_ERROR';
        action.error = 'errormsg';
        expect(genre(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });
});
