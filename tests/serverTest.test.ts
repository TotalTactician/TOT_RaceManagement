import chai from "chai";
import chaiHttp from "chai-http"
import { APP } from "../src/server";
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GetAll endpoint', () => {

  it('should return a list of races with 200 status code', async () => {
    // Make a request to the /GetAll endpoint
    const res = await chai.request(APP).get('/GetAll');

    // Check the response status code
    expect(res).to.have.status(200);

    // Check the response body
    expect(res.body).to.have.property('Time');
    expect(res.body).to.have.property('Races');
    expect(res.body.Races).to.be.an('array');
  });
});

describe('/ping endpoint', () => {

    it('should return pong', async () => {
      // Make a request to the /GetAll endpoint
      const res = await chai.request(APP).get('/ping');
  
      // Check the response status code
      expect(res).to.have.status(200);
  
      // Check the response body
      expect(res.body).to.have.property('status');
      expect(res.body.status).to.be.equal("Pong!");
    });
  });