import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { DatePipePipe } from './date-pipe.pipe';
import { CurrentcyPipePipe } from './currentcy-pipe.pipe';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { FeaturedAnimationComponent } from './featured-animation/featured-animation.component';
import { MouseOverDirective } from './mouse-over.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    HeaderComponent,
    CheckInComponent,
    ResultsPageComponent,
    AccountPageComponent,
    DatePipePipe,
    CurrentcyPipePipe,
    FilterPipe,
    SortPipe,
    FeaturedAnimationComponent,
    MouseOverDirective,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
