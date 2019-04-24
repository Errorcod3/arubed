import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoinService {
  private joinList: Array<Object> = [];

  constructor() { }
  addUser(){

  }
  get allUsers(){
    return this.joinList;
  }
}
