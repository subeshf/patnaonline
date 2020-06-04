import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private data :DataService) { }
   posts: Object;

  ngOnInit() {
    this.data.getPosts().subscribe(data => {
           this.posts =data;
           
    })
  }

}
