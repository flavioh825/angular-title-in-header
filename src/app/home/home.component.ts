import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    // altera o titulo usando o método criado no appService
    this.appService.setTitle('Home');
  }

}
