"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("90 change to 2335", function(){

        var result = main(90);
        var expect_string = '2335';
        
        expect(expect_string).to.equal(result);
    });


});