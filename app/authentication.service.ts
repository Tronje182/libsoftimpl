import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
 
export class User {
  constructor(
    public email: string,
    public password: string,
    public role: string,
    public id: string) { }
}
 
var users = [
  new User('admin','admin','staff', ''),
  new User('hstahl','hstahl','student', '6701277')
];
 
@Injectable()
export class AuthenticationService {
 
  constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }
 
  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['default']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  } 

  checkUserStaff(){
    if (localStorage.getItem("user").role === "staff"){
      return true;
    }else{
      return false;
    }
  }

  checkUserStudent(){
    if (localStorage.getItem("user").role === "student"){
      return true;
    }else{
      return false;
    }
  }
}