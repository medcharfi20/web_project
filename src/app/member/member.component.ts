import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from 'src/models/Member';
import { MemberService } from 'src/service/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],

})
export class MemberComponent implements OnInit {
  dataSource:Member[]=[];
  constructor(private mS:MemberService,private router:Router){}
  ngOnInit():void{
    //Appler getAllmember
    //attendre le résultat
    //le res dans data source 
    this.mS.getAllMembers().subscribe((a)=>{
      //reception de résultat
      this.dataSource=a;
    })
  }
displayedColumns: string[] = ['id', 'cin', 'firstName', 'lastName','type','col'];
delete(id: string): void {
  this.mS.DeleteMember(id).subscribe(
    response=>
      this.ngOnInit(),
    
  );
}


}
