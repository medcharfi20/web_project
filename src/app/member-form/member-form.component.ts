import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/service/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private Ms:MemberService,private router:Router){}
  ngOnInit(): void {
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
    this.Ms.CreateMember(m).subscribe(()=>{
      this.router.navigate([""]);
    })
  
  }
}
