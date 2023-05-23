import {
	AccountBalance,
	FolderOpenOutlined,
	LocalHospital,
	LocalOffer,
	LocalPolice,
	MilitaryTech,
	MilitaryTechSharp,
} from "@mui/icons-material";
import { Box, Icon, Typography } from "@mui/material";
import colors from "../../../utils/colors";
import GroupsIcon from "@mui/icons-material/Groups";
import StarsIcon from "@mui/icons-material/Stars";
import FlagIcon from "@mui/icons-material/Flag";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styles from "../styles";
import { OfficerCardProps } from "../types";
import { MutableRefObject } from "react";
interface Parameter {
	icon: ReactJSXElement;
	title: string;
	value: any;
}
export function officer(props: OfficerCardProps): Array<Parameter> {
	return [
		{
			icon: <LocalOffer />,
			title: "Service No.",
			value: props.svc_no,
		},
		{
			icon: <LocalPolice />,
			title: "FORCE",
			value: props.svc,
		},
		{
			icon: <StarsIcon />,
			title: "Rank",
			value: props.rank,
		},
		{
			icon: <GroupsIcon />,
			title: "Unit",
			value: props.unit,
		},
		{
			icon: <AccountBalance />,
			title: "Arm/Regt",
			value: props.arm,
		},
		{
			icon: <MilitaryTech />,
			title: "Awards",
			value: props.awards,
		},
		{
			icon: <FolderOpenOutlined />,
			title: "Operation",
			value: props.operation,
		},
		{
			icon: <LocalHospital />,
			title: "Lost Him to",
			value: props.reasonOfDeath,
		},
		{
			icon: <FlagIcon />,
			title: "Immortalized on",
			value: props.yearOfDeath,
		},
	];
}
export function transformRefs(
	refs: Array<MutableRefObject<HTMLInputElement>>,
	empty?: boolean,
	officer?: OfficerCardProps
) {
	if (empty) {
		refs.forEach((ref) => {
			ref.current.value = "";
		});
		return;
	}
	if (officer.svc_no) {
		refs[0].current.value = officer.svc_no;
	}
	if (officer.svc) {
		refs[1].current.value = officer.svc;
	}
	if (officer.rank) {
		refs[2].current.value = officer.rank;
	}
	if (officer.unit) {
		refs[3].current.value = officer.unit;
	}
	if (officer.arm) {
		refs[4].current.value = officer.arm;
	}
	if (officer.awards) {
		refs[5].current.value = officer.awards;
	}
	if (officer.operation) {
		refs[6].current.value = officer.operation;
	}
	if (officer.reasonOfDeath) {
		refs[7].current.value = officer.reasonOfDeath;
	}
	if (officer.yearOfDeath) {
		refs[8].current.value = officer.yearOfDeath;
	}
}
export function getOfficer(
	refs: Array<MutableRefObject<HTMLInputElement>>,
	name: string
): OfficerCardProps {
	let officer: OfficerCardProps = {
		name: name,
	};
	if (refs[0].current.value != "") {
		officer.svc_no = refs[0].current.value.trim();
	}
	if (refs[1].current.value) {
		officer.svc = refs[1].current.value.trim();
	}
	if (refs[2].current.value) {
		officer.rank = refs[2].current.value.trim();
	}
	if (refs[3].current.value) {
		officer.unit = refs[3].current.value.trim();
	}
	if (refs[4].current.value) {
		officer.arm = refs[4].current.value.trim();
	}
	if (refs[5].current.value) {
		officer.awards = refs[5].current.value.trim();
	}
	if (refs[6].current.value) {
		officer.operation = refs[6].current.value.trim();
	}
	if (refs[7].current.value) {
		officer.reasonOfDeath = refs[7].current.value.trim();
	}
	if (refs[8].current.value) {
		officer.yearOfDeath = refs[8].current.value.trim();
	}
	return officer;
}
export function getEmptyFieldValue(field: string) {
	switch (field) {
		case "Service No.":
			return {
				$set: {
					svc_no: "",
				},
			};
		case "FORCE":
			return {
				$set: {
					svc: "",
				},
			};
		case "Rank":
			return {
				$set: {
					rank: "",
				},
			};
		case "Unit":
			return {
				$set: {
					unit: "",
				},
			};
		case "Arm/Regt":
			return {
				$set: {
					arm: "",
				},
			};
		case "Awards":
			return {
				$set: {
					awards: "",
				},
			};
		case "Operation":
			return {
				$set: {
					operation: "",
				},
			};
		case "Lost Him to":
			return {
				$set: {
					reasonOfDeath: "",
				},
			};
		case "Immortalized on":
			return {
				$set: {
					yearOfDeath: "",
				},
			};
	}
}
export const list = (props: OfficerCardProps) => {
	return (
		<>
			{officer(props).map((parameter, index) => {
				if (parameter.value) {
					return (
						<Box key={index} sx={{ display: "flex", ml: 1 }}>
							<Icon sx={styles.parameter_icon}>{parameter.icon}</Icon>
							<Typography sx={styles.parameter_title}>
								{parameter.title}
							</Typography>
							<Typography flexGrow={1} />
							<Typography sx={styles.parameter_value}>
								{parameter.value}
							</Typography>
						</Box>
					);
				}
			})}
		</>
	);
};
