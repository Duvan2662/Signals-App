import { Component } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {







  public onfielUpdate = (field:string, value:string) =>{
    console.log({field,value});


  }

}
