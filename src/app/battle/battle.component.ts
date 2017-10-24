import { Component, OnInit } from '@angular/core';
import { GifService } from './../core/services/gif.service';

@Component({
  selector: 'app-battle',
  template: `      
    <div class="columns" *ngIf="battleGifs">

      <div class="column is-half" *ngFor="let gif of battleGifs">
        <div class="gif-container">
          <img [src]="gif.url">
          <div class="caption">{{ gif.caption }}</div>
        </div>        
        
        <a class="button is-info" (click)="voteOnGif(gif.id)">Vote!</a>
      </div>

    </div>
  `,
  styles: [`
    img {
      height: 400px;
      width: 100%;
    }
  `]
})
export class BattleComponent implements OnInit {
  battleGifs;

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getNewBattle();
  }

  getNewBattle() {
    this.gifService.getBattle()
      .subscribe(data => this.battleGifs = data);
  }

  voteOnGif(id) {
    this.gifService.vote(id).subscribe(data => {
      this.getNewBattle();
    });
  }

}
