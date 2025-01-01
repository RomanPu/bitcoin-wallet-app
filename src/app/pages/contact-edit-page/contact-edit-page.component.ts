import { Component, inject, DestroyRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router'; 
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'contact-edit-page',
  standalone: false,
  
  templateUrl: './contact-edit-page.component.html',
  styleUrl: './contact-edit-page.component.scss'
})
export class ContactEditPageComponent {
  private route = inject(ActivatedRoute);
  private contactService = inject(ContactService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  contact$ = this.route.data.pipe(
    tap(data => console.log('data:', data)),
    map(data => data['contact']));

  onSubmit(form: NgForm) {

    this.contactService.saveContact(form.value)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
        error: err => console.log('err:', err),
        complete: () => this.router.navigateByUrl('/contact')
    })
  }
}
