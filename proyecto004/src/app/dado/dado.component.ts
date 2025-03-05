import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {

  @Input() valor: number = 1;


  getImageDado() {
    return `images/dado${this.valor}.png`
  }
}