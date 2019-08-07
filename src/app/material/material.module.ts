import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatListModule, MatSidenavModule, MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatListModule,
       MatSidenavModule,
      MatDatepickerModule,
      MatNativeDateModule
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatListModule,
       MatSidenavModule,
      MatDatepickerModule,
      MatNativeDateModule
    ],
})
export class CustomMaterialModule { }
