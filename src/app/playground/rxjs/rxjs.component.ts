import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const dataSource = of(1, 2, 4, 6, 7, 9, 10);
    const sub = dataSource.pipe(map((num) => num / 2)).subscribe((res) => {
      console.log(res);
    });
    sub.unsubscribe();
    const sub2 = dataSource.pipe(filter(num => num % 2 ? false : true)).subscribe((res) => {
      console.log(res);
    });
    sub2.unsubscribe();
  }
}
