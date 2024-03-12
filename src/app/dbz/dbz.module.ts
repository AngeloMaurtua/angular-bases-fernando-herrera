import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NamePageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';



@NgModule({
  declarations: [
    NamePageComponent,
    ListComponent,
    AddComponent
  ],
  exports: [
    NamePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
