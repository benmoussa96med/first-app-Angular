import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
coursList=[
  {
  id:1,
  Cours:"javascript",
  title:"cours  the javascript",
  hours:15
},
{
  id:2,
  Cours:"Angular",
  title:"cours the Angular",
  hours:10
},
{
  id:3,
  Cours:"testcafe ",
  title:"cours the testcafe (testing)",
  hours:7
},
{
  id:4,
  Cours:"nestJs",
  title:"cours the nestJs (backend)",
  hours:6.5
}
]
  constructor() { }

  ngOnInit(): void {
  }
  delete(cours: { id: number; Cours: string; title: string; hours: number; }){
let index=this.coursList.indexOf(cours);
this.coursList.splice(index,1);
  }

}
