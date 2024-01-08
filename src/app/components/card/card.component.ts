import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  circleText: any[] = [
    { title: 'ProGeneración y Restauración de Contraseñasductos', description: "Posibilidad de generar y restablecer contraseñas de manera segura para los correos corporativos." },
    { title: 'Asignación de Departamentos', description: "Determinación automática del departamento correspondiente a través de la plataforma, facilitando la organización interna."},
    { title: 'Visualización de Información Personalizada', description: "Acceso a nombres y correos electrónicos asociados a cada usuario, proporcionando una vista clara y rápida de la información corporativa."},
  ];
}
