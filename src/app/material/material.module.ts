import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatListModule, MatSidenavModule, MatDatepickerModule,
    MatNativeDateModule, MatOptionModule, MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
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
      MatNativeDateModule, MatOptionModule, MatSelectModule
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
      MatNativeDateModule, MatOptionModule, MatSelectModule
    ],
})
export class CustomMaterialModule { }
