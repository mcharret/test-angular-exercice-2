import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre1: number = 0;
  nombre2: number = 0;
  operation: string = '+';
  resultat: number = 0;
  operations: string[] = ['+', '-', '*', '/'];
  historique: Array<{date: string, operation: string, resultat: number}> = [];

  calculer() {
    switch (this.operation) {
      case '+':
        this.resultat = this.nombre1 + this.nombre2;
        break;
      case '-':
        this.resultat = this.nombre1 - this.nombre2;
        break;
      case '*':
        this.resultat = this.nombre1 * this.nombre2;
        break;
      case '/':
        this.resultat = this.nombre1 / this.nombre2;
        break;
    }

    const historiqueEntry = {
      date: new Date().toLocaleString(),
      operation: `${this.nombre1} ${this.operation} ${this.nombre2}`,
      resultat: this.resultat
    };
    this.historique.push(historiqueEntry);
  }

  supprimerHistorique(entry: any) {
    this.historique = this.historique.filter(hist => hist !== entry);
  }
}
