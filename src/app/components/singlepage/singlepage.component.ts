import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  *  as  data  from  '../../../assets/api/newsapi.json';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.scss']
})
export class SinglepageComponent implements OnInit {
  breadcrumbConfig: object = {
    
    fontSize: '14px',
    fontColor: '#038896',
    lastLinkColor: '#AFAFAF',
    symbol: ' > ',
   
  };
  nameval=true;
  id:any;
 url:any;
  news:any;
  categories:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }
  id_post:any;
  ngOnInit() {
    this.url = this.activatedRoute.snapshot.url.join('');
    console.log(this.url);
    this.id_post = this.activatedRoute.snapshot.paramMap.get('id');
  

    this.news=data.articles;
    this.categories=data.sourceCategory;
  


   
  }

  goto(post_id){
   this.id_post=post_id;
    console.log(post_id);
    if(this.url.includes("allnews")){
      this.router.navigate(['homepage/allnews/'+post_id]);
    }else{
      this.router.navigate(['homepage/'+post_id]);
    }
    
 }

 filterItemsOfType(){
  console.log(this.id_post);
   console.log(this.news.filter(x => x.id == this.id_post))
  return this.news.filter(x => x.id == this.id_post);
}

addtowishlist(item_id){
   
  this.id=item_id;
 

 this.nameval=!this.nameval;

}

}
