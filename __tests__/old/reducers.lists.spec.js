const expect = require('chai').expect;
import lists from '../App/reducers/lists';

describe('lists reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(profile).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(profile.length).to.equal(2);
    });

    it('returns {isLoading:true} for FETCH_GENRES_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_GENRES_REQ';
        expect(lists(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, genres:{some:data}} for FETCH_GENRES_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_GENRES_SUCCESS';
        action.data = {some:'data'};
        expect(lists(state, action)).to.eql({isLoading:false, genres:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_GENRES_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_GENRES_ERROR';
        action.error = 'errormsg';
        expect(lists(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });

    it('returns {isLoading:true} for FETCH_INSTRUMENTS_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_INSTRUMENTS_REQ';
        expect(lists(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, genres:{some:data}} for FETCH_INSTRUMENTS_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_INSTRUMENTS_SUCCESS';
        action.data = {some:'data'};
        expect(lists(state, action)).to.eql({isLoading:false, genres:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_INSTRUMENTS_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_INSTRUMENTS_ERROR';
        action.error = 'errormsg';
        expect(lists(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });

    it('returns {isLoading:true} for FETCH_I_LIKE_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_I_LIKE_REQ';
        expect(lists(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, genres:{some:data}} for FETCH_I_LIKE_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_I_LIKE_SUCCESS';
        action.data = {some:'data'};
        expect(lists(state, action)).to.eql({isLoading:false, genres:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_I_LIKE_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_I_LIKE_ERROR';
        action.error = 'errormsg';
        expect(lists(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });

    it('returns {isLoading:true} for FETCH_LIKES_ME_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_LIKES_ME_REQ';
        expect(lists(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, genres:{some:data}} for FETCH_LIKES_ME_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_LIKES_ME_SUCCESS';
        action.data = {some:'data'};
        expect(lists(state, action)).to.eql({isLoading:false, genres:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_LIKES_ME_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_LIKES_ME_ERROR';
        action.error = 'errormsg';
        expect(lists(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });

});
