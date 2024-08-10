import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styles: ``
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input() price: number = 0;
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('ngOnInit');
    this.interval$ = interval(1000).subscribe( x => console.log(`Tick: ${ x }`))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.interval$?.unsubscribe();
  }


}
