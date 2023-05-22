import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageErrorComponent } from './commons/message-error/message-error.component';
import { LoginComponent } from './pages/login/login.component';
import { PrimeNgModule } from '../modules/prime-ng.module';
import { HomeComponent } from './pages/home/home.component';
import { RegisterRoutingModule } from './components-routing.module';
import { UserComponent } from './pages/user/user.component';
import { UserTableComponent } from './pages/user/user-table/user-table.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { TopBarComponent } from './commons/top-bar/top-bar.component';
import { PostComponent } from './pages/post/post.component';
import { PostFormComponent } from './pages/post/post-form/post-form.component';
import { PostTableComponent } from './pages/post/post-table/post-table.component';

@NgModule({
  declarations: [MessageErrorComponent, LoginComponent, HomeComponent, UserComponent, UserTableComponent, UserFormComponent, TopBarComponent, PostComponent, PostFormComponent, PostTableComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PrimeNgModule, RegisterRoutingModule],
  exports: [MessageErrorComponent],
})
export class ComponentsModule {}
