const expect = require('chai').expect;
import profile from '../App/reducers/profile';

describe('profile reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(profile).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(profile.length).to.equal(2);
    });

    it('returns {isLoading:true} for CREATE_PROFILE_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'CREATE_PROFILE_REQ';
        expect(profile(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, userProfile:{some:data}} for CREATE_PROFILE_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'CREATE_PROFILE_SUCCESS';
        action.data = {some:'data'};
        expect(profile(state, action)).to.eql({isLoading:false, userProfile:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for CREATE_PROFILE_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'CREATE_PROFILE_ERROR';
        action.error = 'errormsg';
        expect(profile(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });


    it('returns {isLoading:true} for UPDATE_PROFILE_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'UPDATE_PROFILE_REQ';
        expect(profile(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, userProfile:{some:data}} for UPDATE_PROFILE_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'UPDATE_PROFILE_SUCCESS';
        action.data = {some:'data'};
        expect(profile(state, action)).to.eql({isLoading:false, userProfile:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for UPDATE_PROFILE_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'UPDATE_PROFILE_ERROR';
        action.error = 'errormsg';
        expect(profile(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });


    it('returns {isLoading:true} for FETCH_PROFILE_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'FETCH_PROFILE_REQ';
        expect(profile(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, profile:{some:data}} for FETCH_PROFILE_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_PROFILE_SUCCESS';
        action.data = {some:'data'};
        expect(profile(state, action)).to.eql({isLoading:false, profile:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for FETCH_PROFILE_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'FETCH_PROFILE_ERROR';
        action.error = 'errormsg';
        expect(profile(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });


});
