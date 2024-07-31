import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './finances/finances.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { BudgetingComponent } from './budgeting/budgeting.component';
import { GoalsSavingsComponent } from './goals-savings/goals-savings.component';


const routes:Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'about',component:AboutComponent},
  {path: 'finances', component:FinancesComponent},
  {path: 'help-support', component:HelpSupportComponent},
  {path: 'faq-section', component:FaqSectionComponent},
  {path: 'budgeting', component:BudgetingComponent},
  {path: 'goals-savings', component:GoalsSavingsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'} // Default route redirects to home
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FinancesComponent,
    HelpSupportComponent,
    FaqSectionComponent,
    BudgetingComponent,
    GoalsSavingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
