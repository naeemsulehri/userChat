import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatIconModule } from '@angular/material/icon';
 import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ChatUIComponent } from './chat-ui/chat-ui.component';
 import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ChatUIComponent
  ],
  imports: [
    BrowserModule,
     MatInputModule,
    // MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    HttpClientModule, 
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
