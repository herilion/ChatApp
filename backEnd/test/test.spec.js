const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('../index.js');

chai.use(chaiHttp);
const expect = chai.expect;
describe('get all users', () => {
    it('should get all users from data base', () => {
        chai.request(app)
            .get('/api/auth/allusers/6392f4136076ebd3fc56b4a2')
            .send({
                email: "heritier@gmail.com",
                username: "Heritier LIONGE",
                _id: "6389d490268c57d0918d9c88",
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            });
    })
});
