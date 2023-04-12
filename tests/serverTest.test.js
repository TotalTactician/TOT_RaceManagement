"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.returnHello = function () {
        return "Hello World!";
    };
    return HelloWorld;
}());
describe('Test hello world', function () {
    it('should do nothing', function () {
        var hw = new HelloWorld();
    });
    it('should return "Hello World!"', function () {
        var hw = new HelloWorld();
        (0, chai_1.expect)(hw.returnHello()).to.be.equal("Hello World!");
    });
});
