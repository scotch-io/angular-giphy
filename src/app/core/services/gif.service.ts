import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GifService {

  constructor(private http: HttpClient) {}

}
