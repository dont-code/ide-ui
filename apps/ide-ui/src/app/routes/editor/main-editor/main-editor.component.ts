import { Component, OnInit } from '@angular/core';
import { ChangeListenService } from '../../../shared/change/services/change-listen.service';
import { TextService } from "../../../shared/text/services/text.service";

@Component({
  selector: 'ide-ui-main-editor',
  templateUrl: './main-editor.component.html',
  styleUrls: ['./main-editor.component.css']
})
export class MainEditorComponent implements OnInit {

  constructor(protected changeListener: ChangeListenService, public textService:TextService) {
    // Make sure the dev change listener is already started and listening

  }

  ngOnInit(): void {
  }

}
