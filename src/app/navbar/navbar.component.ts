import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  isdot = true;
  onClick() {this.isdot = !this.isdot}

  notifications = [
    {
      notification : [
        {
          image : 'assets/images/pp-01.jpg',
          author : 'Bavid Kames',
          note: 'Assigned you on the call with Sara',
          time : '2 min ago'
        },
      ],
    },
    {
      notification : [
        {
          image : 'assets/images/pp-06.jpg',
          author : 'Alexa Marry',
          note: 'Marked the task New UI as done',
          time : '5 min ago'
        },
      ],
    },
    {
      notification : [
        {
          image : 'assets/images/pp-05.jpg',
          author : 'Eva Maria',
          note: 'Added a new comment on Sales task',
          time : '10 min ago'
        },
      ],
    },
  ];

}
