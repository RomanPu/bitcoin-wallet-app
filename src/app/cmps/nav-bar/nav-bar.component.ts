import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Output() pageSelected = new EventEmitter<string>();

  onSelectPage(page: string) {
    this.pageSelected.emit(page);
  }
}

