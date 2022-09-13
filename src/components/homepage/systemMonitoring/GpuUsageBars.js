import React, {useEffect, useState} from 'react';
import axios from "axios";


import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import MemoryIcon from "@mui/icons-material/Memory";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const GpuUsageBars = () => {
    const [loading, setLoading] = useState(false)
    const [expanded, setExpanded] = useState(true)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded} onChange={handleChange('panel1')} elevation={3}>
                <AccordionSummary className={'accordion'} sx={{backgroundColor: '#AABD5B'}}
                                  expandIcon={<ExpandMoreIcon/>}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                >
                    <Grid container direction="row" alignItems="center" justifyItems={'center'}>
                        <Typography variant={'h4'} display={'flex'} alignItems={'center'} color={'white'}>
                            <MemoryIcon fontSize={'large'} sx={{mr: 2}}/>
                            CPU Usage (%)
                        </Typography>

                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default GpuUsageBars;