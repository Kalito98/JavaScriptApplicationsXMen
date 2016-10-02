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
        const user = {
            username: 'pesho',
            passHash: 'peshoPass'
        };

        beforeEach(() => {
            sinon.stub(requester, 'postJSON').returns(new Promise((resolve, reject) => {
                resolve(user);
            }));
        });

        afterEach(() => {
            requester.postJSON.restore();
        });

        it('expect postJSON to be called once', function (done) {
            dataService.register(user)
                .then(() => {
                    expect(requester.postJSON.calledOnce).to.be.true;
                })
                .then(done, done);
        });

        it('expect postJSON to make correct call', function (done) {
            dataService.register(user)
                .then(() => {
                    let actual = requester.postJSON
                        .firstCall
                        .args;

                    expect(actual.length).to.equal(2);
                    expect(actual[0]).to.equal('/api/users');
                    expect(actual[1]).to.eql(user);
                })
                .then(done, done);
        });

        it('expect dataService.register() to post correct data', function (done) {
            dataService.register(user)
                .then(() => {
                    let actual = requester.postJSON
                        .firstCall
                        .args[1];

                    let properties = Object.keys(actual)
                        .sort();

                    expect(properties.length).to.equal(2);
                    expect(properties[0]).to.equal('passHash');
                    expect(properties[1]).to.equal('username');
                })
                .then(done, done);
        });
    });

    describe('Login tests', function () {
        const user = {
            username: 'pesho',
            passHash: 'peshoPass'
        };

        const AUTH_KEY = "123456789";

        beforeEach(function () {
            sinon.stub(requester, 'putJSON')
                .returns(new Promise((resolve, reject) => {
                    resolve({
                        result: {
                            username: user.username,
                            authKey: AUTH_KEY
                        }
                    });
                }));
        });

        afterEach(function () {
            requester.putJSON.restore();
            localStorage.clear();
        });

        it('expect putJSON to be called once', function (done) {
            dataService.login(user)
                .then(() => {
                    expect(requester.putJSON.calledOnce).to.be.true;
                })
                .then(done, done);
        });

        it('expect putJSON to make correct call', function (done) {
            dataService.login(user)
                .then(() => {
                    let actual = requester.putJSON
                        .firstCall
                        .args;

                    expect(actual.length).to.equal(2);
                    expect(actual[0]).to.equal('/api/auth');
                    expect(actual[1]).to.eql(user);
                })
                .then(done, done);
        });

        it('expect login to put username in local storage', function (done) {
            dataService.login(user)
                .then(() => {
                    expect(localStorage.getItem('username')).to.equal(user.username);
                })
                .then(done, done);
        });

        it('expect login to put auth key in local storage', function (done) {
            dataService.login(user)
                .then(() => {
                    expect(localStorage.getItem('authKey')).to.equal(AUTH_KEY);
                })
                .then(done, done);
        });
    });

    describe('Logout tests', function () {
        const user = {
            username: 'pesho',
            passHash: 'peshoPass'
        };

        const AUTH_KEY = "123456789";

        beforeEach(function () {
            sinon.stub(requester, 'putJSON')
                .returns(new Promise((resolve, reject) => {
                    resolve({
                        result: {
                            username: user.username,
                            authKey: AUTH_KEY
                        }
                    });
                }));
        });

        afterEach(function () {
            requester.putJSON.restore();
            localStorage.clear();
        });

        it('expect local storage to not have key username', function (done) {
            dataService.login(user)
                .then(() => {
                    dataService.logout();
                })
                .then(() => {
                    expect(localStorage.getItem('username')).to.be.null;
                })
                .then(done, done);
        });

        it('expect local storage to not have key auth key', function (done) {
            dataService.login(user)
                .then(() => {
                    dataService.logout();
                })
                .then(() => {
                    expect(localStorage.getItem('authKey')).to.be.null;
                })
                .then(done, done);
        });
    });

    describe('Is logged in tests', function () {
        const user = {
            username: 'pesho',
            passHash: 'peshoPass'
        };

        const AUTH_KEY = "123456789";

        beforeEach(function () {
            sinon.stub(requester, 'putJSON')
                .returns(new Promise((resolve, reject) => {
                    resolve({
                        result: {
                            username: user.username,
                            authKey: AUTH_KEY
                        }
                    });
                }));
        });

        afterEach(function () {
            requester.putJSON.restore();
            localStorage.clear();
        });

        it('expect to return false when not logged in', function (done) {
            dataService.isLoggedIn()
                .then((res) => {
                    expect(res).to.be.false;
                })
                .then(done, done);
        });

        it('expect to return true when logged in', function (done) {
            dataService.login(user)
                .then(() => {
                    return dataService.isLoggedIn();
                })
                .then((res) => {
                    expect(res).to.be.true;
                })
                .then(done, done);
        });
    });
});

mocha.run();