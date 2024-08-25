import { Component } from '@angular/core';


interface MenuItem {
  title:string
  route:string
}


@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})

export class SideMenuComponent {

  public menuItems:MenuItem[]= [
    {
      title:'contador',
      route:'counter'
    },
    {
      title:'Usuario',
      route:'user-info'
    },
    {
      title:'Mutaciones',
      route:'properties'
    }
  ];

}
