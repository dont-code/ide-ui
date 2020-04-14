import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { ModelAction } from '../../../shared/model/model-action';
import { map } from 'rxjs/operators';
import { ModelService } from '../../../shared/model/services/model.service';
import { EditorElement } from '../editor-element';

@Component({
  selector: 'ide-ui-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.css']
})
export class TextHandlerComponent implements OnInit {

  listOfElements:EditorElement[] = [];
  context$: Observable<any>;

  constructor(protected model: ModelService) { }

  ngOnInit(): void {

    this.context$ = combineLatest([this.model.listEvents()])
      .pipe(map ((modelAction) => {
        this.listOfElements.push(EditorElement.fromModelAction (modelAction[0]));
        return {modelAction};
      }));
  }

}
