import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
   standalone: true,   // ✅ IMPORTANT FIX
  imports: [RouterOutlet, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-frontend';
}
