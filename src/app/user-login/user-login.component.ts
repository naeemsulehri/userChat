import { Component, OnInit } from '@angular/core';
import { ServerDataHandlerService } from '../server-data-handler.service';
import { Guid } from '../Utilities/Guid';
import { dataPostClass } from '../DATAPOST/datapost';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  sentBy: any = "";
  sentFrom: any = "";
  deliverTo: any = "";
  message: any = "";
  sentAt: any = "";
response: any;
  constructor(private service:ServerDataHandlerService) { }

  submitData(){

    console.log("8yhugyguy");

    let post = new dataPostClass();
    var _sentBy = Guid.newGuid(); 
    var _deliverTo = Guid.newGuid();
    var CurrentTime = new Date().toLocaleString();
    post.setSentBy(_sentBy);
    post.setDeliverTo(_deliverTo);
    post.setSentAt(CurrentTime);
    post.setSentFrom(this.sentFrom);
    post.setMessage(this.message);
    
    this.service.postDataUrl(post).subscribe(data =>{
      console.log(data);
    });
    this.service.getDataUrl().subscribe(data =>{
      this.response=data;
      this.service.setData(this.response);
      console.log(this.response);
    })
  }

  ngOnInit() {
  }

}
