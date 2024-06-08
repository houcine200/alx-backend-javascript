const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

describe("Index page", function () {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    };
    it("check correct status code", function (done) {
        request(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it("check correct content", function (done) {
        request(options, function (err, res, body) {
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });
});

describe("Cart page", function () {
    it("check correct status code for correct url", function (done) {
        request.get("http://localhost:7865/cart/12", function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it("check correct content for correct url", function (done) {
        request.get("http://localhost:7865/cart/12", function (err, res, body) {
            expect(body).to.contain("Payment methods for cart 12");
            done();
        });
    });
    it("check correct status code for incorrect url", function (done) {
        request.get("http://localhost:7865/cart/kim", function (err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});

describe("Available payments", function () {
    it("check correct status code", function (done) {
        request.get("http://localhost:7865/available_payments", function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it("check correct content", function (done) {
        request.get("http://localhost:7865/available_payments", function (err, res, body) {
            const expectedBody = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(JSON.parse(body)).to.deep.equal(expectedBody);
            done();
        });
    });
});

describe("Login", function () {
    const options = {
        url: "http://localhost:7865/login",
        method: "POST",
        json: {
            userName: "Betty"
        },
        headers: {
            "Content-Type": "application/json"
        }
    };
    it("check correct status code", function (done) {
        request(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it("check correct content", function (done) {
        request(options, function (err, res, body) {
            expect(body).to.equal("Welcome Betty");
            done();
        });
    });
});
