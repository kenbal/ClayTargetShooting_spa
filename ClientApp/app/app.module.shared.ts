import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ShooterComponent } from './components/shooter/shooter.component';
import { ShooterDetailComponent } from './components/shooter/shooterDetail.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
		HomeComponent,
		ShooterComponent,
		ShooterDetailComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
			{ path: 'fetch-data', component: FetchDataComponent },
			{ path: 'shooter', component: ShooterComponent },
			{ path: 'shooterDetail/:id', component: ShooterDetailComponent },
			{ path: 'shooterDetail', component: ShooterDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
