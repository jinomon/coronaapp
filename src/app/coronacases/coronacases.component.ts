import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-coronacases',
  templateUrl: './coronacases.component.html',
  styleUrls: ['./coronacases.component.css']
})
export class CoronacasesComponent implements OnInit {

  constructor(private api:ApiService) {this.datafromapi() }

  
  datafromapi=()=>{
    this.api.fetchcorona().subscribe(
      (Response)=>{
        this.corona=Response
      }
    )
  }



corona:any=[]

  ngOnInit(): void {
  }

}
