import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  onchangedEmit: EventEmitter<string> = new EventEmitter<string>();
  onChange() {
    this.onchangedEmit.emit(this.searchText);
  }
}
