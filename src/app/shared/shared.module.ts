import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundModule} from './not-found/not-found.module';

@NgModule({
  declarations: [],
  exports: [NotFoundModule],
  imports: [CommonModule, NotFoundModule]
})
export class SharedModule { }
