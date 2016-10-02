mocha.setup('bdd');

const expect = chai.expect;

describe('Tests', function () {
    describe('Products tests', function () {
        describe('All products tests', function () {
            const result = {
                result: []
            };

            beforeEach(function () {
                sinon.stub(requester, 'getJSON')
                    .returns(new Promise((resolve, reject) => {
                        resolve(result);
                    }));
            });

            afterEach(function () {
                requester.getJSON.restore();
            });

            it('expect dataService.products() to make exactly one JSON call', function (done) {
                dataService.products()
                    .then(() => {
                        expect(requester.getJSON.calledOnce).to.be.true;
                    })
                    .then(done, done);
            });

            it('expect dataService.products() to make correct JSON call', (done) => {
                dataService.products()
                    .then(res => {
                        let actual = requester.getJSON
                            .firstCall
                            .args[0];

                        expect(actual).to.equal('/api/products');
                    })
                    .then(done, done);
            });

            it('expect dataService.products() to return correct result', (done) => {
                dataService.products()
                    .then(res => {
                        expect(res).to.equal(result);
                    })
                    .then(done, done);
            });
        });

        describe('Get books tests', function () {
            const result = {
                result: []
            };

            beforeEach(function () {
                sinon.stub(requester, 'getJSON')
                    .returns(new Promise((resolve, reject) => {
                        resolve(result);
                    }));
            });

            afterEach(function () {
                requester.getJSON.restore();
            });

            it('expect dataService.books() to make exactly one JSON call', function (done) {
                dataService.books()
                    .then(() => {
                        expect(requester.getJSON.calledOnce).to.be.true;
                    })
                    .then(done, done);
            });

            it('expect dataService.books() to make correct JSON call', (done) => {
                dataService.books()
                    .then(res => {
                        let actual = requester.getJSON
                            .firstCall
                            .args[0];

                        expect(actual).to.equal('/api/products/books');
                    })
                    .then(done, done);
            });

            it('expect dataService.books() to return correct result', (done) => {
                dataService.books()
                    .then(res => {
                        expect(res).to.equal(result);
                    })
                    .then(done, done);
            });
        });

        describe('Get magazines tests', function () {
            const result = {
                result: []
            };

            beforeEach(function () {
                sinon.stub(requester, 'getJSON')
                    .returns(new Promise((resolve, reject) => {
                        resolve(result);
                    }));
            });

            afterEach(function () {
                requester.getJSON.restore();
            });

            it('expect dataService.magazines() to make exactly one JSON call', function (done) {
                dataService.magazines()
                    .then(() => {
                        expect(requester.getJSON.calledOnce).to.be.true;
                    })
                    .then(done, done);
            });

            it('expect dataService.magazines() to make correct JSON call', (done) => {
                dataService.magazines()
                    .then(res => {
                        let actual = requester.getJSON
                            .firstCall
                            .args[0];

                        expect(actual).to.equal('/api/products/magazines');
                    })
                    .then(done, done);
            });

            it('expect dataService.magazines() to return correct result', (done) => {
                dataService.magazines()
                    .then(res => {
                        expect(res).to.equal(result);
                    })
                    .then(done, done);
            });
        });

        describe('Get comics tests', function () {
            const result = {
                result: []
            };

            beforeEach(function () {
                sinon.stub(requester, 'getJSON')
                    .returns(new Promise((resolve, reject) => {
                        resolve(result);
                    }));
            });

            afterEach(function () {
                requester.getJSON.restore();
            });

            it('expect dataService.comics() to make exactly one JSON call', function (done) {
                dataService.comics()
                    .then(() => {
                        expect(requester.getJSON.calledOnce).to.be.true;
                    })
                    .then(done, done);
            });

            it('expect dataService.comics() to make correct JSON call', (done) => {
                dataService.comics()
                    .then(res => {
                        let actual = requester.getJSON
                            .firstCall
                            .args[0];

                        expect(actual).to.equal('/api/products/comics');
                    })
                    .then(done, done);
            });

            it('expect dataService.comics() to return correct result', (done) => {
                dataService.comics()
                    .then(res => {
                        expect(res).to.equal(result);
                    })
                    .then(done, done);
            });
        });

        describe('Get dvds tests', function () {
            const result = {
                result: []
            };

            beforeEach(function () {
                sinon.stub(requester, 'getJSON')
                    .returns(new Promise((resolve, reject) => {
                        resolve(result);
                    }));
            });

            afterEach(function () {
                requester.getJSON.restore();
            });

            it('expect dataService.dvds() to make exactly one JSON call', function (done) {
                dataService.dvds()
                    .then(() => {
                        expect(requester.getJSON.calledOnce).to.be.true;
                    })
                    .then(done, done);
            });

            it('expect dataService.dvds() to make correct JSON call', (done) => {
                dataService.dvds()
                    .then(res => {
                        let actual = requester.getJSON
                            .firstCall
                            .args[0];

                        expect(actual).to.equal('/api/products/dvds');
                    })
                    .then(done, done);
            });

            it('expect dataService.dvds() to return correct result', (done) => {
                dataService.dvds()
                    .then(res => {
                        expect(res).to.equal(result);
                    })
                    .then(done, done);
            });
        });

        describe('Get cds tests', function () {
            const result = {
                result: []
            };

            beforeEach(function () {
                sinon.stub(requester, 'getJSON')
                    .returns(new Promise((resolve, reject) => {
                        resolve(result);
                    }));
            });

            afterEach(function () {
                requester.getJSON.restore();
            });

            it('expect dataService.cds() to make exactly one JSON call', function (done) {
                dataService.cds()
                    .then(() => {
                        expect(requester.getJSON.calledOnce).to.be.true;
                    })
                    .then(done, done);
            });

            it('expect dataService.cds() to make correct JSON call', (done) => {
                dataService.cds()
                    .then(res => {
                        let actual = requester.getJSON
                            .firstCall
                            .args[0];

                        expect(actual).to.equal('/api/products/cds');
                    })
                    .then(done, done);
            });

            it('expect dataService.cds() to return correct result', (done) => {
                dataService.cds()
                    .then(res => {
                        expect(res).to.equal(result);
                    })
                    .then(done, done);
            });
        });

    });

    describe('Register tests', function () {
        beforeEach(() => {
            sinon.stub(requester, 'postJSON').returns(new Promise((resolve, reject) => {
                resolve(user);
            }));
        });

        afterEach(() => {
            requester.postJSON.restore();
        });

        it('expect postJSON to be called once', function (done) {
            
        });
    });
});

mocha.run();