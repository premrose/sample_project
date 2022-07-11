import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  user_profiles = [
    {
      image : 'assets/images/pp-01.jpg',
      author : 'Drew James',
      location: 'United States',
      mobile : '8715674877'
    },
    {
      image : 'assets/images/pp-06.jpg',
      author : 'Bavid Kames',
      location: 'United States',
      mobile : '8715674877'
    },
    {
      image : 'assets/images/pp-05.jpg',
      author : 'Lavid Emes',
      location: 'United States',
      mobile : '8715674877'
    },
  ];

  table_reference = [
    {
      c1 : 'google.com',
      c2 : '3746',
      c3 : '752',
      c4 : '43%',
      c5 : '$19291'
    },
    {
      c1 : 'facebook.com',
      c2 : '8126',
      c3 : '728',
      c4 : '32%',
      c5 : '$17291'
    },
    {
      c1 : 'twitter.com',
      c2 : '8836',
      c3 : '694',
      c4 : '43%',
      c5 : '$16291'
    },
    {
      c1 : 'Direct,email,IM',
      c2 : '3746',
      c3 : '645',
      c4 : '43%',
      c5 : '$14291'
    },
    {
      c1 : 'linkedin.com',
      c2 : '2739',
      c3 : '539',
      c4 : '43%',
      c5 : '$12291'
    },
    {
      c1 : 'instagram.com',
      c2 : '2739',
      c3 : '539',
      c4 : '43%',
      c5 : '$12291'
    },
  ];

}
