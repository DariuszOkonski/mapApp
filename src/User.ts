import { Location } from './types/index';
import faker from 'faker';

export class User {
    private name: string;
    private location: Location;

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`,
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        } 
    }

    getLat(): number {
        return this.location.lat;
    }

    getLng(): number {
        return this.location.lng
    }
}