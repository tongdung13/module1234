import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boos } from '../boos';
import { BoosService } from '../boos.service';

@Component({
  selector: 'app-update-boos',
  templateUrl: './update-boos.component.html',
  styleUrls: ['./update-boos.component.css']
})
export class UpdateBoosComponent implements OnInit {

  id!: number;
  books: any;
  constructor(private service: BoosService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.books = new Boos();

    this.service.showBooks(this.id).subscribe(
      data => {
        this.books = data;
      },error => console.log(error)
    )
  }

  editBooks(){
    this.service.editBooks(this.id,this.books).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['books']);
      },error => console.log(error)
    )
  }
}
