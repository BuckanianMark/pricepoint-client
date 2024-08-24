import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  @ViewChild('bigscreendropdown') dropdown!:ElementRef<HTMLDivElement>
  // @ViewChild('bigscreencaret') caret!:ElementRef<HTMLDivElement>
  
  handleDropdown(){
    // this.caret.nativeElement.addEventListener('click', () => {
    
      // this.dropdown.nativeElement.classList.toggle('hidden')
    
    // })
  }

  basket$!:Observable<IBasket>;
  currentUser$!:Observable<IUser | null>;


  
 
  constructor(private basketService:BasketService,private accountsService:AccountService){}
  ngOnInit(): void {
   this.basket$ = this.basketService.basket$;
   this.currentUser$ = this.accountsService.currentUser$;
  }


  logout(){
    this.accountsService.logout();
  }
 
 

}
