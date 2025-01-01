import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class BitcoinService {
    constructor(private http: HttpClient) {}

    convertToBTC(amount: number, currencyCode: string) {
        return this.http.get(`https://blockchain.info/tobtc?currency=${currencyCode}&value=${amount}`, { responseType: 'text' })
              .pipe(
                map(response => response.toString()) // Ensure the response is converted to string
     )
    }

    getMarketPrice() {
    return firstValueFrom( 
            this.http.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            // .pipe(
            //     map((response: object) => response.bpi.USD.rate)
            // )
        )
    }

    getTradeVolume() {
        return firstValueFrom( 
                this.http.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
                // .pipe(
                //     map((response: object) => response.bpi.USD.rate)
                // )
            )
        }
}
