import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class ReportService{
     passportReport=[
        {name:'Ramu',dob:'11/20/1988',prevPassport:'ABCD12345',pService:'Student',
         adob:'20-11-2023',cfee:280,sfee:9.8,sst:8.2},
        {name:'Raju',dob:'11/20/1988',prevPassport:'XYZ12345',pService:'Professional',
         adob:'20-11-2023',cfee:280,sfee:9.8,sst:8.2},         
         {name:'Hafiz',dob:'11/20/1988',prevPassport:'JJEE12345',pService:'Student',
         adob:'20-11-2023',cfee:280,sfee:9.8,sst:8.2},       
     ]

    getPassportReport()
    {
        return this.passportReport.slice();
    }
}