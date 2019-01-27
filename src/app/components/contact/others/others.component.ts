import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  githubProfile() {
    window.open("https://github.com/ruiribeiro97", "_blank");
  }

  facebookProfile() {
    window.open("https://facebook.com/ruiribeiro97", "_blank");
  }

  linkedinProfile() {
    window.open("https://www.linkedin.com/in/rui-ribeiro-827abb174/", "_blank");
  }

}
