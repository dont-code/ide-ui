import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'ide-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  menuItems =new Array<MenuItem> (
    {label:'Main Menu', items:[
        {label:'Welcome', icon:'pi pi-home', routerLink:['/welcome']},
        {label:'Projects', icon:'pi pi-home', routerLink:['/project']},
        {label:'Editor', icon:'pi pi-pencil', routerLink:['/editor']},
      ]},
    {label:'Debug Menu', items:[
        {label:'Dev', icon:'pi pi-book', routerLink: ['/dev']}
      ]}
  );

}

