import { Component,ViewContainerRef, } from '@angular/core';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ListComponent } from './admin/list/list.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';
  // constructor(private viewContainer:ViewContainerRef, private cfr : ComponentFactoryResolver){

  // }
  // async loadAdmin(){
  //   this.viewContainer.clear()
  //   const (AdminListComponent) = await import('./admin-list/admin-ListComponent'),
  //   this.viewContainer.createComponent(
  //     this.cfr.resolveComponentFactory(AdminListComponent)
  //   )
  // }
  // async loadUsers(){
  //   this.viewContainer.clear()
  //   const (UserListComponent) = await import('./user-list/user-ListComponent'),
  //   this.viewContainer.createComponent(
  //     this.cfr.resolveComponentFactory(UserListComponent)
  //   )
  // }
}
