import { Component, OnInit } from '@angular/core';
import { Listitems } from 'src/app/interfaces/listitems';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  path:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getSubject().subscribe((res:Listitems) => {
     this.path = res.categories;
      
    })
  }

}
