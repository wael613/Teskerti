import { Component,OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';
import { FormControl,FormGroup } from '@angular/forms';

declare var window:any;
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit  {
  formModal: any;
 tickets: Ticket[] = [];
ldate: any;
fdate: any;
datatk:Ticket[]=[];
 constructor(public ticketService: TicketService) { }
  ngOnInit(): void {
    this.formModal=new window.bootstrap.Modal(document.getElementById('myModal'));
    this.ticketService.getAll().subscribe((data)=>{
      this.datatk=data;
    this.tickets = data;
    console.log(this.tickets);
     })    
  }
  filterByDate = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });
  
  openFormModal() {
    this.formModal.show();
  }
  close() {
    // confirm or save something
    this.formModal.hide();
  }
  save(){
    
  }
  DateFormat(date: Date){
    const dateToFormat=date.toString();
    return dateToFormat.substring(0,10);
  }
  filterbydate(tk:Ticket[],sd:any,ed:any){
    var ftk:Ticket[]=[];
     for(let ticket of tk)
     {
      if (ticket.dateAchat < ed && ticket.dateAchat > sd)
      {
        console.log("date",ticket.dateAchat);
        ftk.push(ticket);
      }
     }
    return ftk;
    
  }

  testTheChange(event :any){
    console.log("endDate",this.filterByDate.value.endDate);
    // this.filterByDate.controls.startDate.setValue('2023-03-10');
    console.log("startDate",this.filterByDate.value.startDate);
    this.tickets=this.filterbydate(this.datatk,this.filterByDate.value.startDate,this.filterByDate.value.endDate);
    console.log("new list of tickets",this.tickets); 
  }
}
