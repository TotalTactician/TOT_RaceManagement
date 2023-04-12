import { expect } from "chai";

class HelloWorld{
    public returnHello() {
        return "Hello World!";
    }
}

describe('Test hello world', () => {
    it('should do nothing', () => {
        var hw = new HelloWorld();
    })

    it('should return "Hello World!"', () => {
        var hw = new HelloWorld();
        expect(hw.returnHello()).to.be.equal("Hello World!");
    })
})