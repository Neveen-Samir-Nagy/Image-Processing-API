# Image-Processing-API

## Requirments:
    - Scripts:
        - prettier: `prettier --config .prettierrc ./src/**/*.ts --write`
        - lint: `eslint ./src/**/*.ts`
        - build: `npx tsc`
        - jasmine: `jasmine`
        - test: `npm run build && npm run jasmine`
        - start: `nodemon src/index.ts`
    - Endpoints that should be accessed to test --> ()[http://localhost:3000/api/images?filename=string&width=number&height=number]
    - Functionality:
        - image class --> for setting image parameters (filename, width, height) and getting them.
        - processing image class --> for process the image with some methods:
            - exist --> to check if the input image is already exists or not.
            - double check image --> to check if the request is repeated and use pre-stored image instead of creating new image.
            - check target dic --> check if the thumb folder is created or not and create it if it is not created.
        - is number function --> that is used to check that the width and height parameters are numbers.
    - Important Note:
        - There is a test that check if the requested image is already cached before [describtion of the test:'Should return path of target distination'],
            so this image ('fjord_200_500.jpg') is already created in the thumb folder, so don't delete it from the thumb folder when testing


===============================================================================================================================
## Overview of project:
    - This project aims to build a server that resizes the images depending on the parameters got from user.
    - The image file in the utilities directory is used for implementing the class of the image for setting its parameters like filename, width, height and request url.
    - The processing image file in the utilities directory is used for impelementing the methods required for processing the image using the image class with its properties.
    - A route is built in the routes directory for handling the requests from the user.
    - A parent route is built in the routes directory as a middleware to be in the middle between request and response.
    - The images folder is downloaded from the link provided in the course: https://github.com/udacity/cd0292-building-a-server-project-starter
    - All the dependencies are installed and the scripts are written in the package.json file
    - For the cache,I depended on check if the image already created or not by check if it exist in the thumb directory (distination of the requested image), as app-cache package didn't work well.
    - the lines in the .eslintrc file are got from the internet to update parser that throw an errors when run lint.
    - Create properly typed parameters and return types.
    - The tests include:
        - Test for endpoint --> all tests ran sucesfully, for testing the endpoint: I ran first npm run start then npm run test in another terminal.
        - Test for the image class and processing image class passed successfully.
    - The prettier and eslint ran successfully.
    - The build is done successfully.
    - Finally, the server was tested and it ran successfully.