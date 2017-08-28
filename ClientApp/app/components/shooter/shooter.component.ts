import { Component, Inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { IShooter } from "./shooter";
import { MinShooter } from "./shooter";
import { FullShooter } from "./shooter";
import { ShooterService } from './shooter.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'shooter',
	templateUrl: './shooter.component.html',
	providers: [ShooterService]
})
export class ShooterComponent implements OnInit{
	public shooterList: MinShooter[];
	public loggedOn : FullShooter;
	public _apiUrl: string;
	public errorMessage: string;

	public _router: Router;

	constructor( @Inject('ORIGIN_URL') originUrl: string, private _shooterService: ShooterService, private route: ActivatedRoute,  private router: Router) {
	//constructor( @Inject('ORIGIN_URL') originUrl: string, private _shooterService: ShooterService) {

	

		this._apiUrl = originUrl;
		this._router = router;

		


	}


	ngOnInit() {


		this.errorMessage = "fred";
		this._shooterService.getShooter('kenneth_ballantyne@hotmail.com')
			.subscribe(shooter => this.loggedOn = shooter,
			error => this.errorMessage = <any>error
			)

		this._shooterService.getAllShooters()
			.subscribe(shooters => this.shooterList = shooters,
			error => this.errorMessage = <any>error
			)

		
	}

	ngAfterViewInit() {

		//this._apiUrl = this.loggedOn.fullName;
	}

	onShooterClicked(shooterId: number): void {
		//alert("shooter " + shooterId.toString() + " clicked");
		//this._router.navigate(['/shooterDetail', { id: shooterId }])
		this._router.navigate(['/shooterDetail', shooterId]);

	
	}

	
}


