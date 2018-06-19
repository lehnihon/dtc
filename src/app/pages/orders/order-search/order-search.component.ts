import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { DropboxService } from 'src/app/services/dropbox.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {

  @Input() dataChild: any;
  order: any;
  droplink: any;
  mldShow:boolean = true;

  constructor(private dropboxService: DropboxService, private domSanitizer: DomSanitizer) { 
    this.droplink = this.domSanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/viewer?url=http://example.com/test/pdf/ex.pdf&embedded=true')
  }

  ngOnInit() {
  }

  orderDetails(dd){
    this.mldShow = false;
    this.order = dd;
    this.dropboxService.getAR(dd.numlotedigital,dd.id)
      .subscribe((data:any) => {
        this.droplink = this.domSanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/viewer?url='+data.link+'&embedded=true');
      });
  }

  mdlBtn(stateBtn){
    this.mldShow = stateBtn;
  }

}
