import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { QuestionComponent } from './question/question.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { MonhocComponent } from './monhoc/monhoc.component';



@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    QuestionComponent,
    GioithieuComponent,
    LienheComponent,
    DangnhapComponent,
    DangkyComponent,
    MonhocComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
