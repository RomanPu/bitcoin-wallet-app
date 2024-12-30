import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ContactFilter } from '../../models/contact.model'
import { ContactService } from '../../services/contact.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'contact-filter',
  standalone: false,
  
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.scss'
})
export class ContactFilterComponent implements OnInit {
  private contactService = inject(ContactService)
  private filterBySubject$ = new Subject()
  filterBy!: ContactFilter
  destroyRef = inject(DestroyRef)



  ngOnInit(): void {
      this.contactService.contactFilter$
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(filterBy => this.filterBy = filterBy)

      this.filterBySubject$
          .pipe(
              debounceTime(300),
              distinctUntilChanged(),
              takeUntilDestroyed(this.destroyRef)
          )
          .subscribe(() => {
              console.log('FILTER!!');
              this.contactService.setFilterBy(this.filterBy)
          })

  }

  onSearchFilterBy(val: string) {
      // this.contactService.setFilterBy(this.filterBy)
      this.filterBySubject$.next(val)

  }
}
