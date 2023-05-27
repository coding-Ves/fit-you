import { Card, CardMedia, CardContent, Typography, Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ActivityCategoryCard = ({ categoryName }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='h6'>
                    {categoryName.toUpperCase()}
                </Typography>
            </CardContent>

            <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
            // sx={{ maxWidth: '100%', height: 'auto' }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Fab
                    variant="contained"
                    size="sm"
                    backgroundColor="secondary"
                    sx={{ ml: 'auto', fontWeight: 600 }}
                    color="primary" aria-label="add"
                >
                    <AddIcon />
                </Fab>
            </Box>

        </Card >
    );
};

export default ActivityCategoryCard;

// level="h1" fontSize="md" sx={{ mb: 0.5 }}


{/* <Container sx={{ py: 8 }} maxWidth="md">
    {/* End hero unit */}
//     <Grid container spacing={4}>
//         {cards.map((card) => (
//             <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                     <CardMedia
//                         component="div"
//                         sx={{
//                             // 16:9
//                             pt: '56.25%',
//                         }}
//                         image="https://source.unsplash.com/random?wallpapers"
//                     />
//                     <CardContent sx={{ flexGrow: 1 }}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             Heading
//                         </Typography>
//                         <Typography>
//                             This is a media card. You can use this section to describe the
//                             content.
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small">View</Button>
//                         <Button size="small">Edit</Button>
//                     </CardActions>
//                 </Card>
//             </Grid>
//         ))}
//     </Grid>
// </Container> */}