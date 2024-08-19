import {EventEmitter, Injectable, Output} from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  title = 'Authentication';
  
  loggedIn = false;
  private validMail = 'Aditi@gmail.com';
  private validPass = '123';
 
constructor(private router:Router){}
  @Output() loginEvent = new EventEmitter<boolean>();

  login(credentials: { email: string, pass:string}) {

    if (credentials.email === this.validMail && credentials.pass === this.validPass) {
      this.loggedIn = true;
      this.loginEvent.emit(this.loggedIn);
        this.router.navigateByUrl('/search');
    
    } else {
      this.loggedIn = false;
      this.loginEvent.emit(this.loggedIn);
    
    }

    return this.loggedIn;
  }

  logout(){
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.loggedIn==true;
    this.loginEvent.emit(this.loggedIn);
    return this.router.navigateByUrl("/login");

    }

}
