export class File {
    name: string;
    ext: string;
    geoLocation: {
        longitude: string;
        latitude: string;
    };
    size: {
        value: number;
        unit: string;
    };
    owner: string;
    lastModifiedTimeStamp: string;
}
