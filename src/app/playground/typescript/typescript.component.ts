import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
})
export class TypescriptComponent implements OnInit {
  private points: PointModel = {
    x: 789,
    y: 887,
  };


  constructor() {}

  ngOnInit(): void {
    console.log(this.multiplePointsAndDivide(this.points.x, this.points.y, 3));
  }

  private multiplePointsAndDivide(x: number, y: number, divider: 2 | 3): number {
    return (x * y) / divider;
  }

}

interface PointXModel {
  x: number;
}

interface PointModel extends PointXModel {
  y: number;
}
