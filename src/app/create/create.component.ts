import { Component, OnInit } from '@angular/core';
import { GifService } from './../core/services/gif.service';

@Component({
  selector: 'app-create',
  template: `
    <h1 class="title has-text-centered">Create!</h1>

    <div id="gif-creator" class="box" *ngIf="randomGif">
      <div class="gif-container">
        <a class="refresh" (click)="getRandomGif()">🔄</a>

        <img [src]="randomGif.url">
        <div class="caption">{{ caption }}</div>
      </div>
  
      <input type="text" class="input" [(ngModel)]="caption">
  
      <a class="button is-success" (click)="saveGif()">Create</a>
    </div>
  `,
  styles: []
})
export class CreateComponent implements OnInit {
  randomGif;
  caption = '';

  constructor(private gifService: GifService) {}

  ngOnInit() {
    this.getRandomGif();
  }

  getRandomGif() {
    this.gifService.getRandom().subscribe(gif => this.randomGif = gif);
  }

  saveGif() {
    this.gifService.save(this.randomGif.id, this.randomGif.url, this.caption)
      .subscribe(data => {
        this.getRandomGif();
        this.caption = '';
      });
  }

}
