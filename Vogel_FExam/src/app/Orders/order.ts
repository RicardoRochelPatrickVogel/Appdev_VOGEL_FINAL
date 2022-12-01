export interface orderParent {
    id: number;
	item: {
		name: string,
		description: string,
		unit_price: string,
		qty: string,
	}
	customer_name: string,
	customer_contact_details: {
		email: string,
		phone_number: string
	}
	shipping_address: {
		street: string,
		barangay: string,
		city: string,
		province: string
	}
}