const expect = require('chai').expect;
import heavenHell from '../App/reducers/heavenHell';

describe('heavenHell reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(heavenHell).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(heavenHell.length).to.equal(2);
    });

    it('returns {isLoading:true} for CREATE_CONNECTION_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'CREATE_CONNECTION_REQ';
        expect(heavenHell(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, connection:{some:data}} for CREATE_CONNECTION_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'CREATE_CONNECTION_SUCCESS';
        action.data = {some:'data'};
        expect(heavenHell(state, action)).to.eql({isLoading:false, connection:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for CREATE_CONNECTION_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'CREATE_CONNECTION_ERROR';
        action.error = 'errormsg';
        expect(heavenHell(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });

    it('returns {isLoading:true} for CREATE_DO_NOT_DISPLAY_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'CREATE_DO_NOT_DISPLAY_REQ';
        expect(heavenHell(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, doNotDisplay:{some:data}} for CREATE_DO_NOT_DISPLAY_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'CREATE_DO_NOT_DISPLAY_SUCCESS';
        action.data = {some:'data'};
        expect(heavenHell(state, action)).to.eql({isLoading:false, doNotDisplay:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for CREATE_DO_NOT_DISPLAY_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'CREATE_DO_NOT_DISPLAY_ERROR';
        action.error = 'errormsg';
        expect(heavenHell(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });

});
