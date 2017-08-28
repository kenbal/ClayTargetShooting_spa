import { Component, Inject ,OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { IShooter } from "./shooter";
import { FullShooter } from "./shooter";
import { ShooterService } from './shooter.service';



//import {  RouterModule,Routes } from '@angular/router';

import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';





@Component({
    selector: 'shooterDetail',
	templateUrl: './shooterDetail.component.html',
	providers: [ShooterService]
})
export class ShooterDetailComponent implements OnInit{

	public shooter: FullShooter;
	public loggedOn: FullShooter;
	public _apiUrl: string;
	public errorMessage: string;
	public _shooterId: number; 
	public _router: Router;
	public _route: ActivatedRoute;

	//constructor( @Inject('ORIGIN_URL') originUrl: string, private _shooterService: ShooterService) {
		constructor( @Inject('ORIGIN_URL') originUrl: string, private _shooterService: ShooterService, private route: ActivatedRoute, private router: Router) {
		this._apiUrl = originUrl;
		this._router = router;
		this._route = route;

		
	}

	


	ngOnInit() {
		this.errorMessage = "fred";

	

		this._route.paramMap.subscribe(
			params => this._shooterId = +params.get('id')
		);

		//this._shooterService.getShooter('kenneth_ballantyne@hotmail.com')
		//	.subscribe(shooter => this.loggedOn = shooter,
		//	error => this.errorMessage = <any>error
		//	);

		this._shooterService.getShooterDetail(this._shooterId) //
			.subscribe(shooter => this.shooter = shooter,
			error => this.errorMessage = <any>error
			);
		
	}

	ngAfterViewInit() {

		//alert("shooter " + this._shooterId.toString() + " received");

		//alert("shooter " + this.shooter.fullName + " received");


	}

	
	onBack() {
		this._router.navigate(['shooter']);
	}
	
}


