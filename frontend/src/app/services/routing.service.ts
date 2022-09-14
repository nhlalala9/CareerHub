import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor() {}

  search = '';
  home = '';
  category = '';

  dynamic = '';
}
