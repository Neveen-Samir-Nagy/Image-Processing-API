/* 
In this file, we are going to implement the processing of the image depending on the parameters from the request
and check if the request is already cashed or not.
*/
import { promises as pfs } from 'fs';
import fs from 'fs';
import sharp from 'sharp';
import My_image from './image';
// const appCache = require('app-cache');

/*
 * class of processing the image
 */
class process_image {
    source_dir: string = './images/full/';
    dis_dic: string = './images/thumb';
    target_image: string = '';
    image: My_image = new My_image();
    constructor(image: My_image) {
        this.check_target_dic();
        this.image = image;
        this.source_dir += image.get_filename() + '.jpg';
        this.target_image =
            this.dis_dic +
            '/' +
            this.image.get_filename() +
            '_' +
            this.image.get_width() +
            '_' +
            this.image.get_height() +
            '.jpg';
    }

    /**
     * process
     * process the image after checking first if it is processed before nor not
     * if cached --> return cached image, else continue
     * then check if its file exist
     * if exist --> start processing
     * else --> throw error
     */
    public async process(): Promise<string | Error> {
        try {
            // const cache = this.check_cache();
            const double_cache = await this.double_check_cache();
            // if(cache != null){
            //     console.log("Found processed image in the cache.");
            //     return cache;
            // }
            if (double_cache != null) {
                console.log('Found processed image in the target dictionary.');
                return double_cache;
            }
            const bool = await this.exist();
            if (!bool) {
                console.log('Input file is missing :(');
                return new Error('File not exist!');
            }
            await sharp(this.source_dir)
                .resize(this.image.get_width(), this.image.get_height())
                .toFormat('jpg')
                .toFile(this.target_image);
            // this.add_to_cache();
            console.log('Processing image is done successfully :)');
            return this.target_image;
        } catch (error) {
            console.log(error);
            console.log('Failed processing :(');
            return new Error('Failed processing.');
        }
    }

    /**
     * check_target_dic
     */
    public check_target_dic(): void {
        if (!fs.existsSync(this.dis_dic)) {
            fs.mkdirSync(this.dis_dic);
        }
    }

    /**
     * exist
     * check if the file of the image exists or not.
     */
    public async exist(): Promise<boolean> {
        try {
            await pfs.readFile(this.source_dir, 'utf8').then(function () {
                return true;
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
        return false;
    }

    /**
     * check_cache
     * check if the image is already in the cache.
     */
    // public check_cache(): string | null {
    //     if (appCache.get(this.image.get_request()) != undefined) {
    //         return appCache.get(this.image.get_request());
    //     }
    //     return null;
    // }

    /**
     * double_check_cache
     * double check if the image is already in the cache.
     */
    public async double_check_cache(): Promise<string | null> {
        try {
            await pfs.readFile(this.target_image);
            return this.target_image;
        } catch (error) {
            return null;
        }
    }

    /**
     * add_to_cache
     * add new image to cache
     */
    // public add_to_cache(): void {
    //     appCache.create(this.image.get_request(), this.target_image, {
    //         readOnly: true,
    //     });
    // }
}

export default process_image;
