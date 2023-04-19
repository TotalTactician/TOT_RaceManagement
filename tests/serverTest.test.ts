import chai from "chai";
import chaiHttp from "chai-http"
import { APP } from "../src/server";
import sinon from "sinon";
import { RaceDAL } from "../src/Dals/RaceDAL";
import { TestRaceDAL } from "./TestDAL/TestRaceDAL";
const expect = chai.expect;
require("dotenv").config();
chai.use(chaiHttp);

describe('/GetAll endpoint', () => {

  let sandbox = sinon.createSandbox();
  let TestDAL: TestRaceDAL;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    TestDAL = new TestRaceDAL();
  });

  afterEach(() => {
    sandbox.restore();
  } )

  it('should return a list of multiple races with 200 status code', async () => {
    sandbox.stub(RaceDAL.prototype, 'getAllRaces').callsFake(async () => TestDAL.getAllRacesReturnList());
    // Make a request to the /GetAll endpoint
    const res = await chai.request(APP).get('/GetAll');

    // Check the response status code
    expect(res).to.have.status(200);

    // Check the response body
    expect(res.body).to.have.property('Time');
    expect(res.body).to.have.property('Races');
    expect(res.body.Races).to.be.an('array');
  });

  it('should return a empty list of races with 200 status code', async () => {
    sandbox.stub(RaceDAL.prototype, 'getAllRaces').callsFake(async () => TestDAL.getAllRacesReturnEmptyList());
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

    it('should return status pong', async () => {
      // Make a request to the /GetAll endpoint
      const res = await chai.request(APP).get('/ping');
  
      // Check the response status code
      expect(res).to.have.status(200);
  
      // Check the response body
      expect(res.body).to.have.property('status');
      expect(res.body.status).to.be.equal("Pong!");
    });
  });