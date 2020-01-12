
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerDataHandlerService {
  private _textSubjects = new Subject <any>();
  textsMessage$ = this._textSubjects.asObservable();

  constructor(private http:HttpClient) { }
  postDataUrl(post:any){
    return this.http.post("https://localhost:44342/api/chat" ,post);
  }
  getDataUrl(){
    return this.http.get("https://localhost:44342/api/chat");
  }

  setData(Text:any){
    this._textSubjects.next(Text);
  }
}
