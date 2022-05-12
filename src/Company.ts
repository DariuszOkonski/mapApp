import { Location } from './types/index';
import faker from 'faker';

export class Faker {
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
}