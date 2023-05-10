import { OfficerCardProps } from "../../components/Officers/types";

export default interface OfficersContextProps {
	officers: Array<OfficerCardProps>;
	loading: boolean;
	lastPostCounter: number;
}
