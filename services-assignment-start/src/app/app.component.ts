import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { CountersService } from './counters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CountersService]
})
export class AppComponent {

}
