import { Component, OnInit} from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: false,
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  bitcoinService = inject(BitcoinService);
  dataLC$ = new BehaviorSubject<{ name: string, series: { name: string, value: number }[] }[]>([
    { name: 'Bitcoin', series: [] }
  ]);

  ngOnInit(): void {
    (async () => {
      try {
        const temp: any = await this.bitcoinService.getMarketPrice();
        const updatedSeries = temp.values.map((item: any) => ({
          name: new Date(item.x * 1000).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }),
          value: Number(item.y)
        }));
        this.dataLC$.next([{ name: 'Bitcoin', series: updatedSeries }]);
        console.log(this.dataLC$.value);
      } catch (error) {
        console.error('Error fetching trade volume:', error);
      }
    })();
  }
}
