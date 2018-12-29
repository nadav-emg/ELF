export class Event {
    id: string;
    name: string;
    type: string;
    places: number;
    class: string;
    location: string;
    price: number;
    imageUrl?: string;
    imageStoragePath?: string;

    constructor(options: any) {
        this.id = options.id;
        this.name = options.name;
        this.class = options.class;
        this.places = Number(options.places);
        this.price = Number(options.price);
        this.location = options.location;
        this.imageUrl = options.imageUrl;
        this.imageStoragePath = options.imageStoragePath;
    }
}
