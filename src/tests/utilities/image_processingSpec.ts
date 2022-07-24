import My_image from '../../utilities/image';
import process_image from '../../utilities/image_processing';

describe('Test image_processing file - Parent suite', () => {
    const image: My_image = new My_image();
    image.set_fileilename('PLAPLAPLA');
    image.set_width(200);
    image.set_heigh(500);
    image.set_request('/api/images?');
    const process_1: process_image = new process_image(image);
    image.set_fileilename('fjord');
    const process_2: process_image = new process_image(image);

    describe('Test double_check_cache method', () => {
        it('Should return null', async () => {
            const value = await process_1.double_check_cache();
            expect(value).toBeNull();
        });

        it('Should return path of target distination', async () => {
            const value = await process_2.double_check_cache();
            expect(value).toBe('./images/thumb/fjord_200_500.jpg');
        });
    });

    describe('Test exist method for file', () => {
        it('Should return false as file not exists', async () => {
            const value = await process_1.exist();
            expect(value).toBeFalse();
        });

        it('Should return true as file exists', async () => {
            const value = await process_2.exist();
            expect(value).toBeTrue();
        });
    });

    describe('Test process method for image', () => {
        it('Should return error as file not exists', async () => {
            const value = await process_1.process();
            expect(value).toBeInstanceOf(Error);
        });

        it('Should return path of target distination as file exists', async () => {
            const value = await process_2.process();
            expect(value).toBeTruthy();
        });
    });
});
