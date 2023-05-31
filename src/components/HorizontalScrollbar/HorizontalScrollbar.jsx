/* eslint-disable react/prop-types */
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import SearchResultCard from '../SearchBar/SearchResultCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            {/* <img src={LeftArrowIcon} alt="right-arrow" /> */}
            <KeyboardArrowLeftIcon />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            {/* <img src={RightArrowIcon} alt="right-arrow" /> */}
            <KeyboardArrowRightIcon />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((exercise) => (
            <Box
                key={exercise.id || exercise}
                itemId={exercise.id || exercise}
                title={exercise.id || exercise}
                m="0 40px"
            >
                <SearchResultCard exercise={exercise} />
            </Box>
        ))};
    </ScrollMenu>
);

export default HorizontalScrollbar;
