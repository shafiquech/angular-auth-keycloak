import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Ais } from './model/Ais';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth-keycloak';
  aisData: Ais[];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAisData();
  }

  getAisData() {
    this.dataService.getAisData().subscribe(
      data => {
        console.log(data);
        this.aisData = data;
      },
      err => console.error(err),
      () => console.log('done loading ais')
    );
  }
}
