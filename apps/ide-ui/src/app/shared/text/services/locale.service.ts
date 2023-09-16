import { Injectable } from '@angular/core';
import { DontCodeModel } from '@dontcode/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  texts = new Map<string, string> ([
    [DontCodeModel.ROOT, 'I want to create'],
    [DontCodeModel.APP_TYPE, 'I want to create a'],
    [DontCodeModel.APP_NAME, 'with the name'],
    [DontCodeModel.APP_NAME+'-desc', 'Enter the name'],
    [DontCodeModel.APP_ENTITIES, 'handing the following items:'],
    [DontCodeModel.APP_ENTITIES+'-desc', 'List of managed items'],
    [DontCodeModel.APP_ENTITIES_FROM, 'An item from'],
    [DontCodeModel.APP_ENTITIES_FROM+'-desc', 'Predefined items'],
    [DontCodeModel.APP_ENTITIES_NAME, 'with the name'],
    [DontCodeModel.APP_ENTITIES_NAME+'-desc', 'Name of item'],
    [DontCodeModel.APP_FIELDS, 'containing the following fields:'],
    [DontCodeModel.APP_FIELDS+'-desc', 'List of fields'],
    [DontCodeModel.APP_FIELDS_NAME, 'A field named'],
    [DontCodeModel.APP_FIELDS_NAME+'-desc', 'Name of field'],
    [DontCodeModel.APP_FIELDS_TYPE, 'with the type'],
    [DontCodeModel.APP_FIELDS_TYPE+'-desc', 'Type of field'],
    [DontCodeModel.APP_REPORTS, 'It will display reports:'],
    [DontCodeModel.APP_REPORTS+'-desc', 'Design the reports you want to use'],
    [DontCodeModel.APP_REPORTS_TITLE, 'One named'],
    [DontCodeModel.APP_REPORTS_TITLE+'-desc', 'The title of the report'],
    [DontCodeModel.APP_REPORTS_FOR, 'for the item'],
    [DontCodeModel.APP_REPORTS_FOR+'-desc', 'Name of the item to generate the report for'],
    [DontCodeModel.APP_REPORTS_GROUP, 'Values must be grouped'],
    [DontCodeModel.APP_REPORTS_GROUP+'-desc', 'Select if and how a grouping of values will be done'],
    [DontCodeModel.APP_REPORTS_GROUP_OF, 'on'],
    [DontCodeModel.APP_REPORTS_GROUP_OF+'-desc', 'The field or the type of field to use for grouping'],
    [DontCodeModel.APP_REPORTS_GROUP_SHOW, 'show'],
    [DontCodeModel.APP_REPORTS_GROUP_SHOW+'-desc', 'if grouping on a type of field, which one to show ?'],
    [DontCodeModel.APP_REPORTS_GROUP_LABEL, 'with the label'],
    [DontCodeModel.APP_REPORTS_GROUP_LABEL+'-desc', 'The title of the group to display'],
    [DontCodeModel.APP_REPORTS_GROUP_AGGREGATE, 'and the group must display'],
    [DontCodeModel.APP_REPORTS_GROUP_AGGREGATE+'-desc', 'What result to be displayed for each group ?'],
    [DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION, 'the'],
    [DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION+'-desc', 'Operation to display on the elements'],
    [DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF, 'of'],
    [DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF+'-desc', 'What field will be displayed ?'],
    [DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL, 'labelled as'],
    [DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL+'-desc', 'The label of the field aggregation'],
    [DontCodeModel.APP_REPORTS_SORT, 'Please sort the values'],
    [DontCodeModel.APP_REPORTS_SORT+'-desc', 'Specify how the values will be sorted'],
    [DontCodeModel.APP_REPORTS_SORT_BY, 'according to'],
    [DontCodeModel.APP_REPORTS_SORT_BY+'-desc', 'The field you want to sort'],
    [DontCodeModel.APP_REPORTS_SORT_DIRECTION, 'order'],
    [DontCodeModel.APP_REPORTS_SORT_DIRECTION+'-desc', 'Highest ranking or Lowest ranking first ?'],
    [DontCodeModel.APP_REPORTS_DISPLAY, 'The report displays'],
    [DontCodeModel.APP_REPORTS_DISPLAY+'-desc', 'what must be displayed'],
    [DontCodeModel.APP_REPORTS_DISPLAY_TYPE, 'a'],
    [DontCodeModel.APP_REPORTS_DISPLAY_TYPE+'-desc', 'the graph or table you want displayed'],
    [DontCodeModel.APP_REPORTS_DISPLAY_OF, 'of'],
    [DontCodeModel.APP_REPORTS_DISPLAY_OF+'-desc', 'the field to display. Empty for all'],
    [DontCodeModel.APP_REPORTS_DISPLAY_BY, 'by'],
    [DontCodeModel.APP_REPORTS_DISPLAY_BY+'-desc', 'the field to display. Empty for all'],
    [DontCodeModel.APP_REPORTS_DISPLAY_TITLE, 'with the title'],
    [DontCodeModel.APP_REPORTS_DISPLAY_TITLE+'-desc', 'Enter the title of the graph or table displayed'],
    [DontCodeModel.APP_SHARING, 'Information will be shared '],
    [DontCodeModel.APP_SHARING+'-desc', 'List of screens'],
    [DontCodeModel.APP_SHARING_WITH, 'with'],
    [DontCodeModel.APP_SHARING_WITH+'-desc', 'Persons to information will be visible to.'],
    [DontCodeModel.APP_SOURCES, 'Data will come from:'],
    [DontCodeModel.APP_SOURCES+'-desc', 'Source of data'],
    [DontCodeModel.APP_SOURCES_NAME, 'A source named'],
    [DontCodeModel.APP_SOURCES_NAME+'-desc', 'Sets a name for the data source'],
    [DontCodeModel.APP_SOURCES_TYPE, 'of type'],
    [DontCodeModel.APP_SOURCES_TYPE+'-desc', 'How to connect to the source'],
    [DontCodeModel.APP_SOURCES_URL, 'with the url'],
    [DontCodeModel.APP_SOURCES_URL+'-desc', 'The url to call the service'],
    [DontCodeModel.APP_SCREENS, 'Showing the screens'],
    [DontCodeModel.APP_SCREENS+'-desc', 'List of screens'],
    [DontCodeModel.APP_SCREENS_NAME, 'A screen with the name'],
    [DontCodeModel.APP_SCREENS_NAME+'-desc', 'Name of screen'],
    [DontCodeModel.APP_SCREENS_LAYOUT, 'and the layout'],
    [DontCodeModel.APP_SCREENS_LAYOUT+'-desc', 'layout of the screen'],
    [DontCodeModel.APP_COMPONENTS, 'displaying parts:'],
    [DontCodeModel.APP_COMPONENTS+'-desc', 'List of parts'],
    [DontCodeModel.APP_COMPONENTS_TYPE, 'A part with the type'],
    [DontCodeModel.APP_COMPONENTS_TYPE+'-desc', 'Type of part'],
    [DontCodeModel.APP_COMPONENTS_ENTITY, 'handling the entity'],
    [DontCodeModel.APP_COMPONENTS_ENTITY+'-desc', 'Entity\'s name'],
    // Find a way for plugins to dynamically inserts label texts
    [DontCodeModel.APP_SCREENS+'/type', 'of type'],
    [DontCodeModel.APP_SCREENS+'/type-desc', 'Type of screen'],
    [DontCodeModel.APP_SCREENS+'/entity', 'handling the entity'],
    [DontCodeModel.APP_SCREENS+'/entity-desc', 'Entity\'s name']
  ]);

  constructor() {
    //
  }

  toText (context:string, element?:string): string {
    let ret:string|undefined;
    if (element) {
      ret = this.texts.get(context+'/'+element);
      if (!ret) {
        ret = context+'/'+element;
      }
    }else {
      ret = this.texts.get(context);
      if (!ret)
        ret = context;
    }
    return ret;
  }

}
