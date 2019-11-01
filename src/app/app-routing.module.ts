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



const routes: Routes = [
  {path : '' ,  redirectTo : "/trangchu" , pathMatch : "full"},
  {path:'trangchu', component: TrangchuComponent},
  {path:'question', component: QuestionComponent},
  {path:'gioithieu', component: GioithieuComponent},
  {path:'lienhe', component: LienheComponent},
  {path:'dangnhap', component: DangnhapComponent},
  {path:'dangky', component:DangkyComponent},
  {path: 'monhoc', component: MonhocComponent},
  {path: 'monhoc/:id', component: AndroidComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
