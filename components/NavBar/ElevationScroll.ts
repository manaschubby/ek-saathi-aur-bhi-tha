import React, { ReactNode, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useScrollTrigger } from "@mui/material";
import colors from "../../utils/colors";
import rgba from "../../utils/hexTool";
interface ElevationScrollProps {
  children : React.ReactSVGElement,
  window: any,
  setLogo: React.Dispatch<string>
}

export default function ElevationScroll(props: ElevationScrollProps) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 10 : 0,
      sx: trigger ? {backdropFilter:"blur(10px)",backgroundColor: rgba(colors.battleshipGray, 0.6)} : {background:"none"},
    });
}
