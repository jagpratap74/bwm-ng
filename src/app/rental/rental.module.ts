import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalRoutingModule } from './rental-routing.module';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';

import { RentalService } from "./shared/rental.service";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

@NgModule({
    declarations: [
      RentalComponent,
      RentalListComponent,
      RentalListItemComponent,
      RentalDetailComponent
    ],
    imports: [
      CommonModule,
      RentalRoutingModule
    ],
    providers: [RentalService]
})
export class RentalModule { }