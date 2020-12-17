import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-scrolling',
  templateUrl: './cdk-scrolling.component.html',
  styleUrls: ['./cdk-scrolling.component.scss'],
})
export class CdkScrollingComponent implements OnInit {
  public arr = Array.from({ length: 100000 });

  constructor() {}

  ngOnInit(): void {
    this.arr.map((item, index) => {
      const newItem = `Item: ${index}`;
      this.arr[index] = newItem;
    });
  }
}
