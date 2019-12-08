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
        { NAMA PENGELUAR NOTIS: 'JENIS NOTIS': 'Celica', 'JUMLAH NOTIS',
        { KPPPP RIDHUAN: 'Ford', 'JENIS NOTIS': 'Mondeo', price: 32000 },
        { PP MUHAMMAD AZIZAN:                                  }
        { PP K. ADLIZAM: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ AB29 ZULHILMI: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ AB29 POK NIK : 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP29 RUSAIRI : 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP29 HAKEMI  : 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 BOB: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 AHHHH: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 JADSJHAD: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 JADSJHADAM: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 JADSJHADDLIZAM: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 JADSJHADIZAM: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ PP K. ADLIZAM: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 JADSJHADLIZAM: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 JADSJHADZAM: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ KP19 JADSJHADZAM: 'Porsche', 'JENIS NOTIS': 'Boxter', 'JUMLAH NOTIS': 72000 }
		{ 
    ];

    modules = AllCommunityModules;

}
