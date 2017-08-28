import { IShooter } from "./shooter";
import { MinShooter } from "./shooter";
import { FullShooter } from "./shooter";
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class ShooterService {

	
	private _allShooterUrl = 'http://localhost:64652/api/shooter/GetAllShooters';
	private _shooterUrl = 'http://localhost:64652/api/shooter/GetShooterByEmail/';
	private _shooterDetailUrl = 'http://localhost:64652/api/shooter/GetShooterById/'

	public loggedOn: FullShooter;

	public shooterDetail: FullShooter;

	private errorMessage: string;

	constructor(private _http: Http) { }

	getAllShooters(): Observable<MinShooter[]> {
		return this._http.get(this._allShooterUrl)
			.map((response: Response) => <MinShooter[]>response.json())
			//.do(data => console.log("All: " + JSON.stringify(data)))
			.catch(this.handleError);

	}

	getLoggedOnUser(): FullShooter {
		return this.loggedOn;
	}


	getShooter(email: string): Observable<FullShooter> {

		return this._http.get(this._shooterUrl + email)
			.map((response: Response) => <FullShooter>response.json())
			.do(data => console.log("Shooter: " + JSON.stringify(data)))
			.catch(this.handleError);

	}

	getShooterDetail(shooterId: number): Observable<FullShooter> {
		
		let shooter = this._http.get(this._shooterDetailUrl + shooterId.toString())
			.map((response: Response) => <FullShooter>response.json())
			.do(data => console.log("ShooterDetail: " + JSON.stringify(data)))
			.catch(this.handleError);

		shooter.subscribe(shooter => this.loggedOn = shooter,
			error => this.errorMessage = <any>error);

		return shooter;

	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || "server error");
	}
}