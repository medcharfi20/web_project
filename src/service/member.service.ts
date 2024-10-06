import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/models/Member';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
 
  constructor(private http: HttpClient) { 
  }
  getAllMembers():Observable <Member[]>{
    return this .http.get<Member[]>("http://localhost:3000/member")
  }
  CreateMember(MembertoSave : Member):Observable <void>{
    return this.http.post<void>("http://localhost:3000/member",MembertoSave)

  }
  DeleteMember(id:string): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/member/'+id);
  }
 getMemberById(id:string):Observable<Member>{
  return this.http.get<Member>('http://localhost:3000/member/'+id);
 }
 updateMemberbyId(id:string,newMember:Member):Observable<void>{
  return this.http.put<void>('http://localhost:3000/member/'+id,newMember)

 } 
}
