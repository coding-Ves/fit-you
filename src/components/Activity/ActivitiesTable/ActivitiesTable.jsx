import { Pagination, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ACTIVITIES_PER_PAGE } from '../../../common/constants';
import AuthContext from '../../../contexts/AuthContext';
import { getUserActivities } from '../../../firebase/services/users.service';
import Title from '../../Dashboard/Title/Title';

const ActivitiesTable = () => {

    const { userData } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastActivityOnPage = currentPage * ACTIVITIES_PER_PAGE;
    const indexOfFirstActivityOnPage = indexOfLastActivityOnPage - ACTIVITIES_PER_PAGE;
    const currentActivitiesOnPage = activities.slice(indexOfFirstActivityOnPage, indexOfLastActivityOnPage);

    useEffect(() => {
        if (userData && userData.username) {
            getUserActivities(userData.username)
                .then((result) => {
                    setActivities(result);
                })
                .catch((error) => console.log(error));
        }
    }, [userData]);

    // console.log(activities);

    return (
        <>
            <Title>Activities</Title>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell align='right'>Measurements</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentActivitiesOnPage.map((activity) => (
                        <TableRow key={activity.id}>
                            <TableCell>{activity.createdOn}</TableCell>

                            <TableCell>
                                {activity?.fitnessExerciseName}
                                {activity?.sportName}
                                {activity?.cardioName}
                            </TableCell>


                            {activity?.fitnessExerciseName && <TableCell>Fitness</TableCell>}
                            {activity?.sportName && <TableCell>Sports</TableCell>}
                            {activity?.cardioName && <TableCell>Cardio</TableCell>}

                            {activity?.fitnessExerciseName && <TableCell align='right'>{activity.sets.length} sets</TableCell>}

                            {activity?.sportName && (
                                activity.durationInMinutes ? (
                                    <TableCell align='right'>Duration: {activity.durationInMinutes} mins</TableCell>
                                ) : (
                                    <TableCell align='right'>A session</TableCell>
                                )
                            )}

                            {activity?.cardioName && (
                                activity.durationInMinutes ? (
                                    <TableCell align='right'>{activity.durationInMinutes} mins</TableCell>
                                ) : (
                                    <TableCell align='right'>{activity.distance} km</TableCell>
                                )
                            )}


                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Stack
                sx={{ mt: { lg: '25px', xs: '5px' } }}
                alignItems='center'
            >
                {activities.length > ACTIVITIES_PER_PAGE && (
                    <Pagination
                        color='secondary'
                        shape='rounded'
                        size='small'
                        count={Math.ceil(
                            activities.length / ACTIVITIES_PER_PAGE
                        )}
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                    />
                )}
            </Stack>
        </>
    );
};

export default ActivitiesTable;

//////////////////////////////////////////////////////////

// import { Box, Checkbox, FormControlLabel, Paper, Switch, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
// import { useContext, useEffect, useMemo, useState } from 'react';
// import AuthContext from '../../../contexts/AuthContext';
// import { getUserActivities } from '../../../firebase/services/users.service';
// import EnhancedTableHead from './EnhancedTableHead';
// import EnhancedTableToolbar from './EnhancedTableToolbar';

// // const descendingComparator = (a, b, orderBy) => {
// //     if (b[orderBy] < a[orderBy]) {
// //         return -1;
// //     }
// //     if (b[orderBy] > a[orderBy]) {
// //         return 1;
// //     }
// //     return 0;
// // };

// const descendingComparator = (a, b, orderBy) => {
//     const valueA = a[orderBy] || '';
//     const valueB = b[orderBy] || '';

//     if (valueB < valueA) {
//         return -1;
//     }
//     if (valueB > valueA) {
//         return 1;
//     }
//     return 0;
// };


// const getComparator = (order, orderBy) => {
//     return order === 'desc'
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// };

// const stableSort = (array, comparator) => {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) {
//             return order;
//         }
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
// };

// const ActivitiesTable = () => {

//     const { userData } = useContext(AuthContext);

//     const [order, setOrder] = useState('asc');
//     const [orderBy, setOrderBy] = useState('createdOn');
//     const [selected, setSelected] = useState([]);
//     const [page, setPage] = useState(0);
//     const [dense, setDense] = useState(false);
//     const [rowsPerPage, setRowsPerPage] = useState(5);
//     const [rows, setRows] = useState([]);

//     // console.log(rows);

//     useEffect(() => {
//         if (userData && userData.username) {
//             getUserActivities(userData.username)
//                 .then((result) => {
//                     setRows(result);
//                 })
//                 .catch((error) => console.log(error));
//         }
//     }, [userData]);

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     const handleSelectAllClick = (event) => {
//         if (event.target.checked) {
//             // const newSelected = rows.map((n) => n.name);
//             // setSelected(newSelected);
//             // return;
//             const newSelected = rows.map((row) => {
//                 if (row?.cardioName) {
//                     return row.cardioName;
//                 } else if (row?.fitnessExerciseName) {
//                     return row.fitnessExerciseName;
//                 } else if (row?.sportName) {
//                     return row.sportName;
//                 }
//             });
//             setSelected(newSelected);
//             return;
//         }
//         setSelected([]);
//     };

//     const handleClick = (event, name) => {
//         const selectedIndex = selected.indexOf(name);
//         let newSelected = [];

//         if (selectedIndex === -1) {
//             newSelected = newSelected.concat(selected, name);
//         } else if (selectedIndex === 0) {
//             newSelected = newSelected.concat(selected.slice(1));
//         } else if (selectedIndex === selected.length - 1) {
//             newSelected = newSelected.concat(selected.slice(0, -1));
//         } else if (selectedIndex > 0) {
//             newSelected = newSelected.concat(
//                 selected.slice(0, selectedIndex),
//                 selected.slice(selectedIndex + 1),
//             );
//         }

//         setSelected(newSelected);
//     };

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     const handleChangeDense = (event) => {
//         setDense(event.target.checked);
//     };

//     const isSelected = (name) => selected.indexOf(name) !== -1;

//     // Avoid a layout jump when reaching the last page with empty rows.
//     const emptyRows =
//         page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//     const visibleRows = useMemo(
//         () =>
//             stableSort(rows, getComparator(order, orderBy)).slice(
//                 page * rowsPerPage,
//                 page * rowsPerPage + rowsPerPage,
//             ),
//         [order, orderBy, page, rowsPerPage, rows],
//     );

//     return (
//         <Box sx={{ width: '100%' }}>
//             <Paper sx={{ width: '100%', mb: 2 }}>
//                 <EnhancedTableToolbar numSelected={selected.length} />
//                 <TableContainer>
//                     <Table
//                         sx={{ minWidth: 750 }}
//                         aria-labelledby="tableTitle"
//                         size={dense ? 'small' : 'medium'}
//                     >
//                         <EnhancedTableHead
//                             numSelected={selected.length}
//                             order={order}
//                             orderBy={orderBy}
//                             onSelectAllClick={handleSelectAllClick}
//                             onRequestSort={handleRequestSort}
//                             rowCount={rows.length}
//                             rows={rows} /// added
//                         />
//                         <TableBody>
//                             {visibleRows.map((row, index) => {
//                                 const isItemSelected = isSelected(row?.cardioName || row?.fitnessExerciseName || row?.sportName);
//                                 const labelId = `enhanced-table-checkbox-${index}`;

//                                 return (
//                                     <TableRow
//                                         hover
//                                         onClick={(event) => handleClick(event, row?.cardioName || row?.fitnessExerciseName || row?.sportName)}
//                                         role="checkbox"
//                                         aria-checked={isItemSelected}
//                                         tabIndex={-1}
//                                         key={index}
//                                         selected={isItemSelected}
//                                         sx={{ cursor: 'pointer' }}
//                                     >
//                                         <TableCell padding="checkbox">
//                                             <Checkbox
//                                                 color="primary"
//                                                 checked={isItemSelected}
//                                                 inputProps={{
//                                                     'aria-labelledby': labelId,
//                                                 }}
//                                             />
//                                         </TableCell>

//                                         <TableCell
//                                             component="th"
//                                             id={labelId}
//                                             scope="row"
//                                             padding="none"
//                                         >
//                                             {row?.cardioName || row?.fitnessExerciseName || row?.sportName}
//                                         </TableCell>

//                                         <TableCell>{row.createdOn}</TableCell>

//                                         {row?.fitnessExerciseName && <TableCell align='right'>Fitness</TableCell>}
//                                         {row?.sportName && <TableCell align='right'>Sports</TableCell>}
//                                         {row?.cardioName && <TableCell align='right'>Cardio</TableCell>}

//                                         {row?.fitnessExerciseName && <TableCell align='right'>{row.sets.length} sets</TableCell>}

//                                         {row?.sportName && (
//                                             row.durationInMinutes ? (
//                                                 <TableCell align='right'>Duration: {row.durationInMinutes} mins</TableCell>
//                                             ) : (
//                                                 <TableCell align='right'>A session</TableCell>
//                                             )
//                                         )}

//                                         {row?.cardioName && (
//                                             row.durationInMinutes ? (
//                                                 <TableCell align='right'>{row.durationInMinutes} mins</TableCell>
//                                             ) : (
//                                                 <TableCell align='right'>{row.distance} km</TableCell>
//                                             )
//                                         )}
//                                     </TableRow>
//                                 );
//                             })}
//                             {emptyRows > 0 && (
//                                 <TableRow
//                                     style={{
//                                         height: (dense ? 33 : 53) * emptyRows,
//                                     }}
//                                 >
//                                     <TableCell colSpan={6} />
//                                 </TableRow>
//                             )}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <TablePagination
//                     rowsPerPageOptions={[5, 10, 25]}
//                     component="div"
//                     count={rows.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//             </Paper>
//             <FormControlLabel
//                 control={<Switch checked={dense} onChange={handleChangeDense} />}
//                 label="Dense padding"
//             />
//         </Box>
//     );
// };

// export default ActivitiesTable;
