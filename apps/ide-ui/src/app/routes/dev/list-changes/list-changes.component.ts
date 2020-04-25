import { Component, OnInit } from '@angular/core';
import { Change } from '../../../shared/change/change';
import { ChangeUpdateService } from '../../../shared/change/services/change-update.service';

@Component({
  selector: 'ide-ui-list-changes',
  templateUrl: './list-changes.component.html',
  styleUrls: ['./list-changes.component.css']
})
export class ListChangesComponent implements OnInit {

  listOfChanges:Change[]
  constructor(protected changeService:ChangeUpdateService) { }

  ngOnInit(): void {
    this.listOfChanges=this.changeService.getListOfChanges();
  }

}
