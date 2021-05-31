import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../../assets/api/newsapi.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {
breadcrumbConfig: object = {
    
    fontSize: '14px',
    fontColor: '#038896',
    lastLinkColor: '#AFAFAF',
    symbol: ' > ',
   
  };


   
news:any;
categories:any;
nameval=true;
id:any;
allwish:string[]=[];


myDateValue: Date;
categoryselect:any;
title:any;
toDate:Date;
duplicateArray=[]

  constructor( private router:Router) { }

  ngOnInit() {
  
     this.news=data.articles;
     this.duplicateArray=this.news;
     this.categories=data.sourceCategory;
    console.log(data.articles);
    console.log(data.sourceCategory);
  }


  addtowishlist(item_id){
   
    this.id=item_id;
    this.allwish.push(String(item_id));

   this.nameval=false;

  }


  reverseAndTimeStamp(dateString) {
    // console.log(dateString);
    const reverse = dateString.split("T")[0];
    console.log(reverse);
    return reverse;
    }
    showalert=false;
   
  filterDate() {
 
      let fromdate=this.myDateValue;
      console.log(this.title)
      let todate=this.toDate;
      console.log(this.categoryselect)
      
      if(this.myDateValue && this.toDate && this.categoryselect==undefined && this.title==undefined){
      const selectedMembers = this.news.filter(m => {
              return this.reverseAndTimeStamp(m.publishedAt) >= this.reverseAndTimeStamp(fromdate) 
              && 
              this.reverseAndTimeStamp(m.publishedAt) <= this.reverseAndTimeStamp(todate)
            
          }
          );
          this.duplicateArray=selectedMembers
      }
       else if(this.categoryselect!=undefined && !this.myDateValue && !this.toDate && this.title==undefined) {
        

        const selectedMembers = this.news.filter(m => {
          return m.sourceID==this.categoryselect
        
      }
      );
      this.duplicateArray=selectedMembers
        
      }else if(this.title!=undefined && this.categoryselect==undefined && !this.myDateValue && !this.toDate){
        

        const selectedMembers = this.news.filter(m => {
          return m.title.includes(this.title)
        
      }
      );
      this.duplicateArray=selectedMembers
      } 

      else if(this.title!=undefined && this.categoryselect!=undefined && !this.myDateValue && !this.toDate){
        

        const selectedMembers = this.news.filter(m => {
          return m.title.includes(this.title) && m.sourceID==this.categoryselect
        
      }
      );
      this.duplicateArray=selectedMembers
      } 
      else if(this.title==undefined && this.categoryselect!=undefined && this.myDateValue && this.toDate){
        

        const selectedMembers = this.news.filter(m => {
          return this.reverseAndTimeStamp(m.publishedAt) >= this.reverseAndTimeStamp(fromdate) 
          && 
          this.reverseAndTimeStamp(m.publishedAt) <= this.reverseAndTimeStamp(todate)
          && m.sourceID==this.categoryselect
        
      }
      );
      this.duplicateArray=selectedMembers
      } 
      
      
      else{
        
        const selectedMembers = this.news.filter(m => {
          return this.reverseAndTimeStamp(m.publishedAt) >= this.reverseAndTimeStamp(fromdate) 
          && 
          this.reverseAndTimeStamp(m.publishedAt) <= this.reverseAndTimeStamp(todate)
          && m.sourceID==this.categoryselect && m.title.includes(this.title)
        
      }
      );
      this.duplicateArray=selectedMembers
  
      }

    
   
    
    console.log(this.duplicateArray); // the result objects
}

showmenu(){
  var x = document.getElementById("sortdata");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
sortdata(){

  this.duplicateArray.sort((a,b) => a.title > b.title ? 1 : -1);
  var x = document.getElementById("sortdata");
  x.style.display = "none";
  // return this.duplicateArray.sort((a, b) => {
  //   return <any>new Date(b.publishedAt) - <any>new Date(a.publishedAt);
  // });
}

sortdata2(){

  this.duplicateArray.sort((a,b) => a.title < b.title ? 1 : -1);
  var x = document.getElementById("sortdata");
  x.style.display = "none";
  // return this.duplicateArray.sort((a, b) => {
  //   return <any>new Date(b.publishedAt) - <any>new Date(a.publishedAt);
  // });
}


goto(post_id){

  console.log(post_id);
  console.log(post_id);
  this.router.navigate(['homepage/allnews/'+post_id]);
}
}
