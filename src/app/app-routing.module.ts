import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { QuestionComponent } from './question/question.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { MonhocComponent } from './monhoc/monhoc.component';
import { AndroidComponent } from './tracnghiem/android.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { TaikhoangComponent } from './taikhoang/taikhoang.component';
import { XacnhanemailComponent } from './xacnhanemail/xacnhanemail.component';



const routes: Routes = [
  {path : '' ,  redirectTo : "/trangchu" , pathMatch : "full"},
  {path:'trangchu', component: TrangchuComponent},
  {path:'question', component: QuestionComponent},
  {path:'gioithieu', component: GioithieuComponent},
  {path:'lienhe', component: LienheComponent},
  {path:'dangnhap', component: DangnhapComponent},
  {path:'dangnhap/quenmatkhau', component: QuenmatkhauComponent},
  {path:'quenmatkhau', component: QuenmatkhauComponent},
  {path:'dangky', component:DangkyComponent},
  {path: 'monhoc', component: MonhocComponent},
  {path: 'monhoc/:id', component: AndroidComponent},  
  {path: 'taikhoan', component: TaikhoangComponent},
  {path:'xacnhanmatkhau', component: XacnhanemailComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
