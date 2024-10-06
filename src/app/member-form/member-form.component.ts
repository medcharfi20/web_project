import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/service/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private Ms:MemberService,private router:Router,private aR:ActivatedRoute){}
  ngOnInit(): void {//verifier si la route contient id 
    //si l id edit
    //sinon create 
    const idCourant=this.aR.snapshot.params['id'];
    console.log(idCourant)
    if(!!idCourant){
      // je suis dans edit 
      this.Ms.getMemberById(idCourant).subscribe(
        (x)=>{this.form = new FormGroup({
          cin: new FormControl(x.cin, [Validators.required]),
          firstName: new FormControl(x.firstName, [Validators.required]),
          lastName: new FormControl(x.lastName, [Validators.required]),
          type: new FormControl(x.type, [Validators.required])
        }
      )} )
    }
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    });
  }

  sub(): void {
    console.log(this.form.value);
    const m:Member={...this.form.value};
    const idCourant=this.aR.snapshot.params['id'];
    if (!!idCourant) {
      this.Ms.updateMemberbyId(idCourant, m).subscribe(() => {
        this.router.navigate([""]); 
      });
    }
else{
    this.Ms.CreateMember(m).subscribe(()=>{
      this.router.navigate(["/member"]);
    })
  
  }
}
}
