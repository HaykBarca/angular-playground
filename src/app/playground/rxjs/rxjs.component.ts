import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const dataSource = of(1, 2, 4, 6, 7, 9, 10);
    dataSource.pipe(takeUntil(this.destroy$), map((num) => num / 2)).subscribe((res) => {
      console.log(res);
    });

    dataSource.pipe(takeUntil(this.destroy$), filter(num => num % 2 ? false : true)).subscribe((res) => {
      console.log(res);
    });

    const obsArray = [this.getThisGetThat(), this.getThisGetThat(), this.getThisGetThat()];
    forkJoin(obsArray).pipe(takeUntil(this.destroy$)).subscribe(res => {
      alert('all resolved');
    });
  }

  getThisGetThat(): Observable<any> {
    return this.httpClient.get('https://cdn.cookielaw.org/consent/d6bbcacc-8935-4719-a825-f6d8c39216e7/59d2291a-bb31-403e-bb25-4f9865f85eae/en.json');
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
