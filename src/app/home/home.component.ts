import { Component } from '@angular/core';
import { CardComponent } from "../components/card/card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardComponent]
})
export class HomeComponent {
    circleText: any[] = [
        { title: 'Generación y Restauración de Contraseñas', description: "Posibilidad de generar y restablecer contraseñas de manera segura para los correos corporativos." },
         { title: 'Asignación de Departamentos', description: "Determinación automática del departamento correspondiente a través de la plataforma, facilitando la organización interna."},
        { title: 'Visualización de Información Personalizada', description: "Acceso a nombres y correos electrónicos asociados a cada usuario, proporcionando una vista clara y rápida de la información corporativa."},
      ];

}
