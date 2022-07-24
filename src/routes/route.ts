import express from 'express';
import process_image from '../utilities/image_processing';
import My_image from '../utilities/image';
import path from 'path';

const route: express.Router = express.Router();
const image: My_image = new My_image();

route.get('/images', async (req, res) => {
    if (Object.keys(req.query).length === 0) {
        res.send("<h1 style='color:red;'>Your request has no parameters!<h1>");
    }
    if (
        req.query.filename !== undefined &&
        req.query.width !== undefined &&
        req.query.height !== undefined
    ) {
        if (
            !is_number(req.query.width as string) ||
            !is_number(req.query.height as string)
        ) {
            res.send(
                "<h1 style='color:red;'>Some parameters are set incorrectly!<h1>"
            );
            return;
        }
        image.set_fileilename(req.query.filename as string);
        image.set_width(parseInt(req.query.width as string));
        image.set_heigh(parseInt(req.query.height as string));
        image.set_request(req.url);
        const processing = new process_image(image);
        const value_processing = await processing.process();
        if (value_processing instanceof Error) {
            res.send("<h1 style='color:red;'>" + value_processing + '<h1>');
            return;
        } else {
            res.sendFile(path.join(__dirname, '../..', value_processing));
            return;
        }
    } else {
        res.send("<h1 style='color:red;'>Some parameters are missed!<h1>");
        return;
    }
});

// check if the input values for width and height are numbers.
function is_number(num: string): boolean {
    if (isNaN(Number(num))) {
        return false;
    }
    return true;
}

export default { route, is_number };
