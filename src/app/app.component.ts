import { Component } from '@angular/core';
import {PusherService} from "./pusher.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Foodics Hungry People App';
  item: string = '';

  constructor(private pusherService: PusherService) {
  }

  ngOnInit() {
    this.pusherService.channel.bind('some-food', (data: any) => {
      this.item = data.item;
    });
  }
}
