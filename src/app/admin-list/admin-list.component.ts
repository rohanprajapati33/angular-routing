import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent {
  statusOnline:boolean =true


  product = [
    {item : "laptop"},
    {item : "tv"},
    {item : "mouse"},
    {item : "phone"}
  ]
}
