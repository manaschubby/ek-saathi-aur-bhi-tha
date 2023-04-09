import { hexToRgb } from "@mui/material";

export default function rgba (hex:string, a:number) {
    let rgb = hexToRgb(hex);
    rgb = rgb.replace(')', `, ${a})`);
    rgb = rgb.replace('(', 'a(');
    return rgb;
}