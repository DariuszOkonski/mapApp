import { Location, Mappable } from './types/index';
import faker from 'faker';

export class Company implements Mappable{
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

    showInformation(): string {
        return `
            <div>
                <h5>Name: ${this.companyName}</h5>
                <h6>Phrase: ${this.catchPhrase}</h6>
                <p>lat:${this.location.lat} lng:${this.location.lng}</p>
            </div>
        `
    }

    getLat(): number {
        return this.location.lat;
    }

    getLng(): number {
        return this.location.lng
    }
}