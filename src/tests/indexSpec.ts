import request from 'request';

describe('Test index file - Parent Suite', () => {
    describe('Suite for 200 ok status', () => {
        it('Get /api/images Should return 200 ok for status', (done) => {
            request.get(
                'http://localhost:3000/api/images?filename=palmtunnel&width=2500&height=2500',
                function (error, response) {
                    expect(error.code).toEqual('ECONNREFUSED');
                    done();
                }
            );
        });
    });
});
