import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle: String;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getTitle().subscribe(t => this.headerTitle = t);
  }

}
