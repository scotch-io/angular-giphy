import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GifService {
  apiUrl = 'https://wt-fbf1133d4c0420e5070f01e86112d679-0.run.webtask.io/gif-battle';

  constructor(private http: HttpClient) {}

  getRandom() {
    return this.http.get(`${this.apiUrl}/random`);
  }

  getBattle() {
    return this.http.get(`${this.apiUrl}/battle`)
      .map(gifs => Object.values(gifs));
  }

  vote(id) {
    return this.http.post(`${this.apiUrl}/vote`, { id });
  }

  save(id, url, caption) {
    return this.http.post(`${this.apiUrl}`, { id, url, caption, votes: 0 });
  }

}
