import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import * as fromComponents from "./components";
import * as fromPipes from "./pipes";
import {NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule} from "ngx-ui-loader";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes,],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, FormsModule, ReactiveFormsModule, ToastrModule,
    NgxUiLoaderHttpModule.forRoot({showForeground: true})]
})
export class AppModule {
}
