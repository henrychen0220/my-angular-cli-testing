import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  term: string = "";
  ninjas = [];
  constructor(private logger: LoggingService, private dataService: DataService){}
  // constructor(private route: ActivatedRoute) {
  //   this.ninja = route.snapshot.params['ninja'];
  // }
  logIt(){
    this.logger.log();
  }
  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    );
  }

}
