import { OfficerCardProps } from "../../Officers/types";

export interface Image {
	image: string;
	officers: Array<OfficerCardProps>;
	validated: boolean;
	_id: string;
}
