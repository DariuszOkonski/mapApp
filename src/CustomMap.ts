import { Company } from './Company';
import { User } from './User';
import { Mappable } from './types/index'

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.getLat(),
                lng: mappable.getLng()
            }
        })
    }
}