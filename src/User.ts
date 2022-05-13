import { Location, Mappable } from './types/index';
import faker from 'faker';

export class User implements Mappable {
    private name: string;
    private location: Location;

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`,
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        } 
    }

    showInformation(): string {
        return `
            <div>
                <h5>Name: ${this.name}</h5>
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