import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{
    passportReports!:{name:string,dob:string,prevPassport:string,pService:string,adob:string,cfee:number,sfee:number,sst:number}[]

    constructor(private reportService:ReportService){}

    ngOnInit(): void {
        this.passportReports=this.reportService.getPassportReport();
    }
}
