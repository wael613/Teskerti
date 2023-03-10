import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { TicketListComponent } from './Components/ticket-list/ticket-list.component';
import { TicketsComponent } from './Components/tickets/tickets.component';

const routes: Routes = [
  {path: '',component : LoginComponent},
 {path : 'AddTicket', component : TicketsComponent},
  {path : 'AllTickets', component : TicketListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
