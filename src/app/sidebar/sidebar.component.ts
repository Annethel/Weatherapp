import { Component } from '@angular/core';
import { faCloud, faList, faMap, faSliders} from '@fortawesome/free-solid-svg-icons';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  fontSuncloud = faCloud;
  fontList = faList;
  fontMap = faMap;
  fontSliders = faSliders;

  sidebarInfo: Array<Icons> = [
    {id: 1, icon:this.fontList, des:"Cities"},
    {id: 2, icon:this.fontMap, des:"Map"},
    {id: 1, icon:this.fontSliders, des:"Settings"}
  ]
    
  

  
  constructor(private exampleService: ExampleService) {
    this.exampleService.getUsers().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.warn(err)
      },
      complete: () => {
        console.log("YAY!")
      },
    });
  }
}
interface Icons{
  id?:number
  icon:any;
  des:string;
}

