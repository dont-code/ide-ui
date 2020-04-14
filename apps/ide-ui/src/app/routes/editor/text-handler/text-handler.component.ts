import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TextService } from '../../../shared/text/services/text.service';
import { EditorElement } from '../editor-element';

@Component({
  selector: 'ide-ui-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.css']
})
export class TextHandlerComponent implements OnInit {

  listOfElements:EditorElement[] = [];
  context$: Observable<any>;

  constructor(protected model: TextService) { }

  ngOnInit(): void {

    this.context$ = combineLatest([this.model.listEvents()])
      .pipe(map ((textAction) => {
        this.listOfElements.push(EditorElement.fromTextAction (textAction[0]));
        return {modelAction: textAction};
      }));
  }

}
