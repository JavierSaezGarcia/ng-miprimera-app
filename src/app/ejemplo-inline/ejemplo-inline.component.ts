import { Component, OnInit } from '@angular/core';
// se crea con >>>> ng g c ejemploInline -s -t ( -s con css inline y -t con html inline)
@Component({
  selector: 'app-ejemplo-inline',
  template: `
    <p>
      ejemplo-inline worksxcvxcvxc!
    </p>
  `,
  styles: [
  ]
})
export class EjemploInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
