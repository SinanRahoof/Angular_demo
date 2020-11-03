import { Component } from '@angular/core';
import { GetApiService} from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This should be my first angular application';

  li:any;
  lis=[];
  first_name:string;
  last_name:string;
  email:string;

  constructor(private api:GetApiService)
  {

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((val) => {
      console.warn("get api data",val);
      this.li=val;
      this.lis=this.li.data;
    });
  }
  searchfname()
  {
    if(this.first_name != "")
    {
      this.lis = this.lis.filter(res=>{
        return res.first_name.toLocaleLowerCase().match(this.first_name.toLocaleLowerCase());
      });
    }else if(this.first_name == "")
    {
      this.ngOnInit();
    }
    
  }

  searchlname()
  {
    if(this.last_name != "")
    {
      this.lis = this.lis.filter(res=>{
        return res.last_name.toLocaleLowerCase().match(this.last_name.toLocaleLowerCase());
      });
    }else if(this.last_name == "")
    {
      this.ngOnInit();
    }
  }
  
  searchemail()
  {
    if(this.email != "")
    {
      this.lis = this.lis.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
      });
    }else if(this.email == "")
    {
      this.ngOnInit();
    }
  }

}
