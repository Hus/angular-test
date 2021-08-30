import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { ZipService } from './zip.service';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),  HttpClientModule,],
  exports: [RouterModule],
  providers: [ ZipService ]
})
export class HomePageRoutingModule {}
