import { Component, Input } from '@angular/core';

interface Card{
  title: string;
  description: string
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() title!:string ;
  @Input() description!:string ;

}
