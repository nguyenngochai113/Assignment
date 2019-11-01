import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { QuestionComponent } from './question/question.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { MonhocComponent } from './monhoc/monhoc.component';
import { AndroidComponent } from './tracnghiem/android.component';
import { HttpClientModule } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { TaikhoangComponent } from './taikhoang/taikhoang.component';
import { XacnhanemailComponent } from './xacnhanemail/xacnhanemail.component';
import { AuthService } from './service/auth.service';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'

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
    AndroidComponent,
    QuenmatkhauComponent,
    TaikhoangComponent,
    XacnhanemailComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    CountdownModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
