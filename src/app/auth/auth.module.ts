import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent }    from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
            BrowserModule,
		HttpModule,
		ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule

  ],
  declarations: [
    LoginComponent
  ],
    providers: [
        AuthService
  ]
})
export class AuthModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/