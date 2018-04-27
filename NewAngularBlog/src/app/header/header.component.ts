import { OnInit, OnDestroy, Component } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "../services/auth.service";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [AuthService]
  })
  export class HeaderComponent implements OnInit,OnDestroy{
    
    status: boolean;
  subscription: Subscription;
  

 constructor(private authService:AuthService) {   

}

logout() {
    this.authService.logout();       
 }

 ngOnInit() {
   this.subscription = this.authService.authNavStatus$.subscribe(status => this.status = status);
    
  }

  ngOnDestroy() {
    
    this.subscription.unsubscribe();
  }

  }
