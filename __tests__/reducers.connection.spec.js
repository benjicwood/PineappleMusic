const expect = require('chai').expect;
import connection from '../App/reducers/connection';

describe('connection reducer ', function () {
    'use strict';

    it('exists', function () {
        expect(connection).to.be.a('function');
    });

    it('takes 2 arguments ', function () {
        expect(connection.length).to.equal(2);
    });

    it('returns {isLoading:true} for CREATE_CONNECTION_REQ', function() {
        const state = {isLoading: false};
        const action = {};
        action.type = 'CREATE_CONNECTION_REQ';
        expect(connection(state, action)).to.eql({isLoading:true});
    });

    it('returns {isLoading:false, connection:{some:data}} for CREATE_CONNECTION_SUCCESS', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'CREATE_CONNECTION_SUCCESS';
        action.data = {some:'data'};
        expect(connection(state, action)).to.eql({isLoading:false, connection:{some:'data'}});
    });

    it('returns {isLoading:false,error:errormsg} for CREATE_CONNECTION_ERROR', function() {
        const state = {isLoading: true};
        const action = {};
        action.type = 'CREATE_CONNECTION_ERROR';
        action.error = 'errormsg';
        expect(connection(state, action)).to.eql({isLoading:false,error:'errormsg'});
    });
});
