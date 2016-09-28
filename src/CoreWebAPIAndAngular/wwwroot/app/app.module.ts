import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { app_routing } from './app.routing';
import { CustomersService } from './shared/customers.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, app_routing ],
  declarations: [ AppComponent, CustomersComponent ],
  providers:    [ CustomersService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }