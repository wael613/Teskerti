import { Component } from '@angular/core';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  constructor(
    private ticketService:TicketService
  ){}
  
}
