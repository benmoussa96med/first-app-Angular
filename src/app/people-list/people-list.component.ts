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
  title:"cours complet the javascript",
  price:60
},
{
  id:2,
  Cours:"java",
  title:"cours complet the java",
  price:30
},
{
  id:3,
  Cours:"testcafe ",
  title:"cours complet the testcafe (testing)",
  price:29.99
},
{
  id:4,
  Cours:"nestJs",
  title:"cours complet the nestJs (backend)",
  price:69.99
}
]
  constructor() { }

  ngOnInit(): void {
  }
  delete(cours: { id: number; Cours: string; title: string; price: number; }){
let index=this.coursList.indexOf(cours);
this.coursList.splice(index,1);
  }

}
