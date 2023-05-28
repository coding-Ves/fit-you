import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const CreateActivityForm = () => {
    const [numOfSets, setNumOfSets] = useState(3);
    const [formInputs, setFormInputs] = useState(Array(numOfSets).fill({
        reps: '',
        units: 'Repetitions',
        weight: '',
        unit: 'kg',
    }));

    const handleNumOfSetsChange = (event, value) => {
        setNumOfSets(value);
        setFormInputs((prevInputs) => {
            const newInputs = [...prevInputs];
            if (value > newInputs.length) {
                const diff = value - newInputs.length;
                for (let i = 0; i < diff; i++) {
                    newInputs.push({
                        reps: '',
                        units: 'Repetitions',
                        weight: '',
                        unit: 'kg',
                    });
                }
            } else if (value < newInputs.length) {
                newInputs.splice(value);
            }
            return newInputs;
        });
    };

    const handleInputChange = (index, field, value) => {
        setFormInputs((prevInputs) => {
            const newInputs = [...prevInputs];
            newInputs[index][field] = value;
            return newInputs;
        });
    };

    return (
        <>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                {`Number of sets: ${numOfSets}`}
                <Slider
                    value={numOfSets}
                    min={0}
                    max={10}
                    defaultValue={3}
                    onChange={handleNumOfSetsChange}
                    aria-label="num-of-sets-slider"
                />
            </Stack>
            <Box mt={2}>
                {Array.from({ length: numOfSets }).map((_, index) => (
                    <div key={index}>
                        <TextField
                            label="Reps"
                            value={formInputs[index].reps}
                            onChange={(e) => handleInputChange(index, 'reps', e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id={`units-label-${index}`}>Units</InputLabel>
                            <Select
                                labelId={`units-label-${index}`}
                                id={`units-select-${index}`}
                                value={formInputs[index].units}
                                onChange={(e) => handleInputChange(index, 'units', e.target.value)}
                            >
                                <MenuItem value="Kilometers">Kilometers</MenuItem>
                                <MenuItem value="Miles">Miles</MenuItem>
                                <MenuItem value="Minutes">Minutes</MenuItem>
                                <MenuItem value="Seconds">Seconds</MenuItem>
                                <MenuItem value="Repetitions">Repetitions</MenuItem>
                                <MenuItem value="Until Failure">Until Failure</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Weight"
                            value={formInputs[index].weight}
                            onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id={`unit-label-${index}`}>Unit</InputLabel>
                            <Select
                                labelId={`unit-label-${index}`}
                                id={`unit-select-${index}`}
                                value={formInputs[index].unit}
                                onChange={(e) => handleInputChange(index, 'unit', e.target.value)}
                            >
                                <MenuItem value="kg">kg</MenuItem>
                                <MenuItem value="lb">lb</MenuItem>
                                <MenuItem value="Body Weight">Body Weight</MenuItem>
                                <MenuItem value="km/h">km/h</MenuItem>
                                <MenuItem value="m/h">m/h</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                ))}
            </Box>
        </>
    );
};

export default CreateActivityForm;
