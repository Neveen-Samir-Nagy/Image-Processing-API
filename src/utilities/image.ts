class My_image {
    filename: string = '';
    width: number = 0;
    height: number = 0;
    request: string = '';

    /**
     * set_filename
     * filename: string
     * */
    public set_fileilename(filename: string): void {
        this.filename = filename;
    }

    /**
     * set_width
     * width: string : void
     */
    public set_width(width: number): void {
        this.width = width;
    }

    /**
     * set_height
     * height: number : void    */
    public set_heigh(height: number): void {
        this.height = height;
    }

    /**
     * set_request
     * request: string : void    */
    public set_request(request: string): void {
        this.request = request;
    }

    /**
     * get_filename: string    */
    public get_filename(): string {
        return this.filename;
    }

    /**
     * get_width: number    */
    public get_width(): number {
        return this.width;
    }

    /**
     * get_height: number    */
    public get_height(): number {
        return this.height;
    }

    /**
     * get_request: string    */
    public get_request(): string {
        return this.request;
    }
}

export default My_image;
