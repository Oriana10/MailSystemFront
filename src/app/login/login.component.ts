import { Component } from '@angular/core';
import { SidebarComponent } from "../components/sidebar/sidebar.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [SidebarComponent]
})
export class LoginComponent {

}
