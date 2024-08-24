import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-search', 
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  
  ngOnInit(): void {
    //responsivity
    document.getElementById("icon-search")?.addEventListener("click",()=> 
    {
    document.querySelector("#search-container")?.classList.add("toggle");
          console.log("clicked")
      })
    document.querySelector("#icon-times")?.addEventListener("click",()=> 
      {
    document.querySelector("#search-container")?.classList.remove("toggle")
      })
  }

}
