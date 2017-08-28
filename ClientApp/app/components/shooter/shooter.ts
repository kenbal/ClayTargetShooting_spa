export interface IShooter {

	shooterId: number;
	surname: string;
	forename: string;

	organisationName: string;

	organisationRoleName: string;

	emailAddress: string;


	assosciationName

	assosciationNum: string;

	listName: string;

	fullName: string;
}

export class MinShooter implements IShooter {


	shooterId: number;
	surname: string;
	forename: string;
	
	organisationName: string;
	
	organisationRoleName: string;

	emailAddress: string;

	
	assosciationName

	assosciationNum: string;

	listName: string;

	fullName: string;
}

export class FullShooter implements IShooter {


	shooterId: number;
	surname: string;
	forename: string;
	organisationId?: number;
	organisationName: string;
	organisationRoleId?: number
	organisationRoleName: string;

	emailAddress: string;

	assosciationId?: number;
	assosciationName: string;

	assosciationNum: string;

	listName: string;

	fullName: string;

	licenseNumber: string;

	licenseExpiryDate?: Date;
	validTo?: Date;
	subsPaidDate: Date;


}