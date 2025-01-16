import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: false,
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  bitcoinService = inject(BitcoinService);
  dataLC$ = new BehaviorSubject<{ name: string, series: { name: string, value: number }[] }[]>([
    { name: 'Bitcoin', series: [] }
  ]);

  ngAfterViewInit() {
    const container = this.chartContainer.nativeElement;
    console.log(container);

    setTimeout(() => {
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }, 0);
  }

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
