import {
	Backdrop,
	Box,
	Button,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import Officers from "../../Officers";
import { OfficerCardProps } from "../../Officers/types";
import { AddBoxOutlined } from "@mui/icons-material";
import colors from "../../../utils/colors";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import {
	getOfficer,
	officer,
	transformRefs,
} from "../../Officers/OfficerCard/list";
import Image from "next/image";
import axios from "axios";
import { client } from "../../../client";

interface OfficerPopUpProps {
	officer?: OfficerCardProps;
	new?: boolean;
	setShown?: React.Dispatch<React.SetStateAction<boolean>>;
	setReload?: React.Dispatch<React.SetStateAction<boolean>>;
	setNew?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OfficerPopUp(props: OfficerPopUpProps) {
	const [loading, setLoading] = useState(false);
	const wrapperRef = useRef();
	const [edited, setEdited] = useState(true);
	useOutsideAlerter(wrapperRef, props.setShown, edited);

	useEffect(() => {
		if (!props.new) {
			const officer = props.officer;
			transformRefs(refs, false, officer);
			nameRef.current.value = officer.name;
		}
	}, [props.officer]);
	const push = (officer: OfficerCardProps) => {
		axios
			.put(`/api/officers/?id=${props.officer._id}`, officer, {
				headers: {
					Authorization: "AdminPage",
				},
			})
			.then((response) => {
				setLoading(false);
				props.setReload(true);
				props.setShown(false);
			})
			.catch(() => {
				alert("Error Saving");
			});
	};
	const create = (officer: OfficerCardProps) => {
		axios
			.post(`/api/officers`, officer, {
				headers: {
					Authorization: "AdminPage",
				},
			})
			.then((response) => {
				setLoading(false);
				props.setReload(true);
				props.setShown(false);
				props.setNew(false);
			})
			.catch(() => {
				alert("Error Saving");
				props.setNew(false);
			});
	};
	const handleSave = () => {
		if (!props.new) {
			if (nameRef.current.value == "") {
				return alert("Enter atleast a name");
			}
			const officer = getOfficer(refs, nameRef.current.value);
			console.log(officer);
			setLoading(true);
			if (image != "") {
				const onProgress = ({ isComputable, value }) => {
					alert(
						`Uploading has started. Window will reload on succesfull upload. Progress = ${value}%`
					);
				};
				client
					.uploadFile(imageRef.current.files[0], { onProgress })
					.then((file) => {
						const baseURL = "https://ucarecdn.com/";
						officer.image = baseURL + file.uuid + "/";
						push(officer);
					});
				return;
			}
			push(officer);
		} else {
			if (nameRef.current.value == "") {
				return alert("Enter atleast a name");
			}
			const officer = getOfficer(refs, nameRef.current.value);
			console.log(officer);
			setLoading(true);
			if (image != "") {
				console.log(process.env.PUBLICKEY);
				const onProgress = ({ isComputable, value }) => {
					alert(
						`Uploading has started. Window will reload on succesfull upload. Progress = ${value}%`
					);
				};
				client
					.uploadFile(imageRef.current.files[0], { onProgress })
					.then((file) => {
						const baseURL = "https://ucarecdn.com/";
						officer.image = baseURL + file.uuid + "/";
						create(officer);
					});
				return;
			}
			create(officer);
		}
	};
	const handleCancel = () => {
		transformRefs(refs, true);
		props.setShown(false);
		props.setNew(false);
	};
	const refs = [
		useRef<HTMLInputElement>(),
		useRef<HTMLInputElement>(),
		useRef<HTMLInputElement>(),
		useRef<HTMLInputElement>(),
		useRef<HTMLInputElement>(),
		useRef<HTMLInputElement>(),
		useRef<HTMLInputElement>(),
		useRef<HTMLInputElement>(),
		useRef<HTMLInputElement>(),
	];
	const nameRef = useRef<HTMLInputElement>();
	const imageRef = useRef<HTMLInputElement>();
	const [image, setImage] = useState("");
	return (
		<Box ref={wrapperRef} sx={styles.popUp}>
			<Backdrop open={loading}>
				<Typography>Saving...</Typography>
			</Backdrop>
			<Typography sx={{ textTransform: "uppercase" }} variant="h3">
				{props.new ? <>Add an Officer</> : <>Edit {props.officer.name}</>}
			</Typography>
			<Box sx={{ display: "flex" }}>
				<Typography variant="caption">Image File</Typography>
				<input
					onChange={(e) => {
						if (e.currentTarget.files[0]) {
							setImage(URL.createObjectURL(e.currentTarget.files[0]));
						}
					}}
					type="file"
					title="Image"
					ref={imageRef}
				/>
			</Box>

			<Image src={image} width={100} height={100} alt={"NO Image Selected"} />
			<TextField label={"Name"} inputRef={nameRef} focused />
			{!props.new
				? officer(props.officer).map((argument, index) => {
						return (
							<TextField
								key={index}
								inputProps={{
									startAdornments: (
										<InputAdornment position="start">
											{argument.icon}
										</InputAdornment>
									),
								}}
								label={argument.title}
								inputRef={refs[index]}
								focused
							/>
						);
				  })
				: officer({ name: "" }).map((argument, index) => {
						return (
							<TextField
								key={index}
								inputProps={{
									startAdornments: (
										<InputAdornment position="start">
											{argument.icon}
										</InputAdornment>
									),
								}}
								label={argument.title}
								inputRef={refs[index]}
								focused
							/>
						);
				  })}
			<Button color="success" variant="contained" onClick={handleSave}>
				Save
			</Button>
			<Button color="error" variant="outlined" onClick={handleCancel}>
				Cancel
			</Button>
		</Box>
	);
}
