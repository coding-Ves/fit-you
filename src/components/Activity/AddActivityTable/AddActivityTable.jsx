import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
    Paper,
} from '@mui/material';
import { ACTIVITY_CATEGORIES } from '../../../common/constants';
import ActivityCategoryCard from './ActivityCategoryCard';

const AddActivityTable = () => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
            >
                <Typography
                    fontWeight={700}
                    sx={{
                        fontSize: '20px',
                        '@media (max-width: 600px)': { fontSize: '30px' },
                    }}
                >
                    Add a new activity!
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={4} justifyContent='center'>
                    {ACTIVITY_CATEGORIES.map((category, index) => (
                        <Grid item key={index}>
                            <ActivityCategoryCard
                                key={index}
                                categoryName={category}
                            />
                        </Grid>
                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

export default AddActivityTable;
