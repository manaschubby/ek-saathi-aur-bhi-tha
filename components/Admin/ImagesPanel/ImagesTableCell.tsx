import React, { useState } from "react";
import { Image } from ".";
import {
	IconButton,
	MenuItem,
	Select,
	TableCell,
	TableRow,
	Checkbox,
} from "@mui/material";
import { OfficerCardProps } from "../../Officers/types";
import { Check, Delete, Edit } from "@mui/icons-material";

interface TableCellProps {
	image: Image;
	handleValidate: (imageid: string, selectedOfficers: Array<string>) => void;
	handleDelete: (imageid: string) => void;
	officers: OfficerCardProps[];
}

export default function ImagesTableCell(props: TableCellProps) {
	const [selectedOfficers, setSelectedOfficers] = useState<Array<string>>(
		props.image.officers.map((officer) => officer._id)
	);
	const handleChange = (officers: string | string[]) => {
		if (typeof officers == "string") {
			return;
		} else {
			setSelectedOfficers(officers);
		}
	};
	return (
		<TableRow>
			<TableCell>
				<img src={props.image.image} alt="Officer" height={100} />
			</TableCell>
			<TableCell>
				<Select
					multiple
					sx={{
						height: "max-content",
						maxWidth: "80%",
					}}
					value={selectedOfficers}
					onChange={(event) => handleChange(event.target.value)}
					inputProps={{
						name: "officers",
						id: "officers-select",
						"aria-multiline": true,
						style: {
							lineBreak: "auto",
						},
					}}
				>
					{props.officers.map((officer) => (
						<MenuItem key={officer._id} value={officer._id}>
							{officer.rank} {officer.name}
						</MenuItem>
					))}
				</Select>
			</TableCell>
			<TableCell>
				<Checkbox checked={props.image.validated} disabled color="primary" />
			</TableCell>
			<TableCell>
				{!props.image.validated && (
					<IconButton
						onClick={() =>
							props.handleValidate(props.image._id, selectedOfficers)
						}
					>
						<Check />
					</IconButton>
				)}

				<IconButton onClick={() => props.handleDelete(props.image._id)}>
					<Delete />
				</IconButton>
			</TableCell>
		</TableRow>
	);
}
