import { Location } from './types/index';
import faker from 'faker';

export class Company {
    private companyName: string;
    private catchPhrase: string;
    private location: Location;

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
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