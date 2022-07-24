import route from '../../routes/route';

describe('Test route file - Parent suite', () => {
    describe('Test is_number function', () => {
        it('Should return true', () => {
            expect(route.is_number('500')).toBe(true);
        });

        it('Should return false', () => {
            expect(route.is_number('String')).toBeFalse();
        });
    });
});
