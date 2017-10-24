import { Component, OnInit } from '@angular/core';
import { GifService } from './../core/services/gif.service';

@Component({
  selector: 'app-leaderboard',
  template: `
    <h1 class="title has-text-centered">Leaderboard!</h1>

    <table class="table is-bordered" *ngIf="leaderboard">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Gif</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>

        <tr *ngFor="let gif of leaderboard; let i = index">
          <td>{{ i + 1 }}</td>
          <td>
            <div class="gif-container">
              <img [src]="gif.url">
              <div class="caption">{{ gif.caption }}</div>
            </div>
          </td>
          <td>
            {{ gif.votes }}
          </td>
        </tr>

      </tbody>
    </table>
  `,
  styles: []
})
export class LeaderboardComponent implements OnInit {
  leaderboard;

  constructor(private gifService: GifService) {}

  ngOnInit() {
    this.gifService.getLeaderboard()
      .subscribe(gifs => this.leaderboard = gifs);
  }

}
