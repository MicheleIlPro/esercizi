import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  constructor(private elementRef: ElementRef){}

  onClick(event: any) {
    const buttonId = event.target.id;

    switch(buttonId){
      case "V":
        const meleverdi = ["uno","tre"];
        for(let melaverde of meleverdi){
          const myDiv = this.elementRef.nativeElement.querySelector('#'+melaverde);
          myDiv.classList.add('nullo');
        }
        this.elementRef.nativeElement.querySelector('#due').classList.remove('nullo');
        break;
      case "G":
        const banane = ["uno","due"];
        for(let banana of banane){
          const myDiv = this.elementRef.nativeElement.querySelector('#'+banana);
          myDiv.classList.add('nullo');
        }
        this.elementRef.nativeElement.querySelector('#tre').classList.remove('nullo');
        break;
      case "R":
        const fragole = ["tre","due"];
        for(let fragola of fragole){
          const myDiv = this.elementRef.nativeElement.querySelector('#'+fragola);
          myDiv.classList.add('nullo');
        }
        this.elementRef.nativeElement.querySelector('#uno').classList.remove('nullo');
        break;
      case "reset":
        const frutta = ["uno","due","tre"];
        for(let frutto of frutta){
          const myDiv = this.elementRef.nativeElement.querySelector('#'+frutto);
          myDiv.classList.remove('nullo');
        }
        break;
      default: console.log("non và una ceppa");
    }
  }
}
