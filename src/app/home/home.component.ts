import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
   slideInterval = 6000
  
   contents = [
    {
      image:"../../assets/gameicon.png",
      imageAlt:"Game Icon",
      h1:"Gaming Products",
      p:"#Providing of the charts deals for all our gamers our there",
      link:"/shop/type/gaming-products"
    },
    {
      image:"../../assets/headphoneicon.png",
      imageAlt:"Audio Icon",
      h1:"Audio Products",
      p:"#Big Bass audio products that leave yor ears ringing",
      link:"/shop/type/audio-products"
    },
    {
      image:"../../assets/computericon.png",
      imageAlt:"Computer Icon",
      h1:"Computing Products",
      p:"#Precise devices to make your computing journey a bliss.",
      link:"/shop/type/computing-products"
    },
    {
      image:"../../assets/phoneicon.png",
      imageAlt:"Phone Icon",
      h1:"Phones & Tablets",
      p:"#Grab the new trendy phones & tablets from us",
      link:"/shop/type/phone-products"
    },
    {
      image:"../../assets/tvicon.png",
      imageAlt:"Phone Icon",
      h1:"Televisions",
      p:"#Precise devices to make your computing journey a bliss.",
      link:"/shop/type/phone-products"
    }
  ]
   selectIndex = 0;
   ngOnInit(): void {
    this.autoSlideContent()
  }
  autoSlideContent():void{
    setInterval(() => {
      this.onNextClick()
    },this.slideInterval)
  }
  onNextClick():void{
    if(this.selectIndex === this.contents.length - 1)
    {
      this.selectIndex = 0;
    }else{
      this.selectIndex++;
    }
  }
  onPreviousClick():void{
    if(this.selectIndex === 0){
      this.selectIndex = this.contents.length -1
    }else{
      this.selectIndex--;
    }
  }
  selectContent(index:number):void{
    this.selectIndex = index
  }

}
