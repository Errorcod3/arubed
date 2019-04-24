import { Component, OnInit } from '@angular/core';
import { JoinService } from '../join.service';
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  join: Object = {email: '', pin:''};
  joinList: Object [] = [];
  filter: string = '';
  constructor(private joinService: JoinService){
    this.joinList = this.joinService.allUsers;
  }
  addUser(){
      this.joinService.addUser(this.join);
      this.joinList = this.joinService.allUsers;
      this.join = {email: '', pin:''}
      this.joinList = this.joinService.allUsers;
    }
  joinNow(){
    
  }
  ngOnInit() {
  }
}
