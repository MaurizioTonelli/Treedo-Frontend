import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TreedoMetaInfo } from '../TreedoMetaInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  files: TreedoMetaInfo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<{ data: TreedoMetaInfo[] }>('/assets/data/treedos-meta.json')
      .subscribe((data: { data: TreedoMetaInfo[] }) => {
        this.files = data.data;
      });
  }
}
