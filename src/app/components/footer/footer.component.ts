import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm }   from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  attributes:string;

  model: any = {};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : NgForm) {
    this.attributes = form.value.email;
    console.log(this.attributes)

  }

  openurl(url){
    window.open(url, '_system');

  }

}
