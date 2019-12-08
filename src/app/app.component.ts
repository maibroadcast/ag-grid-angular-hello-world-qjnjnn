import { Component } from '@angular/core';

import {AllCommunityModules} from "@ag-grid-community/all-modules";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

    columnDefs = [
        {field: 'NAMA PENGELUAR NOTIS' },
        {field: 'JENIS NOTIS' },
        {field: 'JUMLAH NOTIS'}
    ];

    rowData = [
        { NAMA PENGELUAR NOTIS: 'PP AZIZAN', 'JENIS NOTIS': 'Celica', 'JUMLAH NOTIS' ice: 35000 },
        { KPPPP RIDHUAN: 'Ford', model: 'Mondeo', price: 32000 },
        { PP K. ADLIZAM: 'Porsche', model: 'Boxter', price: 72000 }
		{ AB29 ZULHILMI: 'Porsche', model: 'Boxter', price: 72000 }
		{ AB29 POK NIK : 'Porsche', model: 'Boxter', price: 72000 }
		{ KP29 RUSAIRI : 'Porsche', model: 'Boxter', price: 72000 }
		{ KP29 HAKEMI  : 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 BOB: 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 AHHHH: 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 JADSJHAD: 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 JADSJHADAM: 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 JADSJHADDLIZAM: 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 JADSJHADIZAM: 'Porsche', model: 'Boxter', price: 72000 }
		{ PP K. ADLIZAM: 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 JADSJHADLIZAM: 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 JADSJHADZAM: 'Porsche', model: 'Boxter', price: 72000 }
		{ KP19 JADSJHADZAM: 'Porsche', model: 'Boxter', price: 72000 }
		{ 
    ];

    modules = AllCommunityModules;

}
