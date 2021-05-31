import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../../assets/api/newsapi.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {
 
news:any;
categories:any;
nameval=true;
id:any;
allwish:string[]=[];
  constructor( private router:Router,) { }

  ngOnInit() {
  
     this.news=data.articles;
     this.categories=data.sourceCategory;
    console.log(data.sourceCategory);
  }

  goto(post_id){
   
     console.log(post_id);
     this.router.navigate(['homepage/'+post_id]);
  }

  addtowishlist(item_id){
   
    this.id=item_id;
    this.allwish.push(String(item_id));

   this.nameval=false;

  }

}
