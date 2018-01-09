import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle: string = "Welcome to the homepage ...";
  // @Input() ninja;
  // @Output() onYell = new EventEmitter();
  //
  // fireYellEvent(e){
  //   this.onYell.emit(e);
  // }

  constructor(private logger: LoggingService) { }
  logIt(){
    this.logger.log();
  }
  ngOnInit() {
  }
}
