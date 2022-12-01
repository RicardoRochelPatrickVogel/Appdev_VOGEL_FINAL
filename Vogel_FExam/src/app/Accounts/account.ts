export interface Account {
    id: number;
	photo?: string;
	firstname: string;
	lastname: string;
	email: string;
	mobile_number: number;
	address: {
		street: string,
		barangay: string,
		city: string,
		province: string,
	}
	gender: string;
	marital_status: string;
	date_of_birth: string;
	SSS_number: number;
	TIN: number;
}