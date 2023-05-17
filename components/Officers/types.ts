export interface OfficerCardProps {
	image?: string;
	name: string;
	rank?: string;
	yearOfDeath?: string;
	unit?: string;
	svc_no?: string;
	svc?: string;
	operation?: string;
	reasonOfDeath?: string;
	awards?: string;
	arm?: string;
	_id?: string;
	onClick?: (officer: OfficerCardProps) => void;
}
export interface OfficersProps {
	officers: Array<OfficerCardProps>;
	noMemory?: boolean;
	onClick?: (officer: OfficerCardProps) => void;
}
