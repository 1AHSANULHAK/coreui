import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import {LoginserviceService} from './loginservice.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { FormBuilder } from '@ngneat/reactive-forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule,CommonModule,ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle],
    providers:[LoginserviceService]
})
export class LoginComponent {
  myform!:FormGroup
  constructor(private fb:FormBuilder) { };
  ngOninit(){
    this.myform= this.fb.group({
      username:[''],
      password:['']
    })
  }
  Login(){
        console.log(this.myform?.value)
  }

}
