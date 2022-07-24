import My_image from '../../utilities/image';

describe('Test image file - Parent suite', () => {
    const image: My_image = new My_image();
    image.set_fileilename('PLAPLAPLA');
    image.set_width(200);
    image.set_heigh(500);
    image.set_request('/api/images?');

    describe('Test get method for filename', () => {
        it('Should return string for getting filename', () => {
            expect(image.get_filename()).toBeInstanceOf(String);
        });

        it('Should return PLAPLAPLA for get filename', () => {
            expect(image.get_filename()).toEqual('PLAPLAPLA');
        });
    });

    describe('Test get method for width', () => {
        it('Should return 200 for getting width', () => {
            expect(image.get_width()).toBe(200);
        });

        it('Should return number for getting width', () => {
            expect(image.get_width()).toBeInstanceOf(Number);
        });

        it('Should return number greater than 100 for getting width', () => {
            expect(image.get_width()).toBeGreaterThan(100);
        });
    });

    describe('Test get method for filename', () => {
        it('Should return 500 not 400 for getting height', () => {
            expect(image.get_height()).not.toBe(400);
        });

        it('Should return a value (500) for getting height', () => {
            expect(image.get_height()).toBeTruthy();
        });
    });

    describe('Test get method for request', () => {
        it('Should return /api/images? for get request', () => {
            expect(image.get_request()).toEqual('/api/images?');
        });

        it('Should return string for getting request', () => {
            expect(image.get_request()).toBeInstanceOf(String);
        });
    });
});
