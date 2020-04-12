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
  modelActions$: Observable<ModelAction>;

  constructor(protected model: ModelService) { }

  ngOnInit(): void {
    this.modelActions$ = this.model.listEvents().pipe(
      map (action => {
        this.listOfElements.push(EditorElement.fromModelAction (action));
        return action;
      })
    );

    this.context$ = combineLatest([this.modelActions$])
      .pipe(map ((modelAction) => {
        return {modelAction};
      }));
  }

}
