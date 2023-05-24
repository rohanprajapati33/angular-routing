import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  user !: {id:number,name:String};
  constructor(private route:ActivatedRoute,private router:Router){

  }
  ngOnInit():void{
    this.user = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment)

  }
 
  getRamaDetails(){
    this.router.navigate(['/users',2,'Rama'], {queryParams : {page : 1 , search : 'rohan'}} )

  }
  

  
}
