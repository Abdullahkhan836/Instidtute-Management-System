import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({Name , Course ,rollNumber}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
       <Box>
         
         <Box className="d-flex justify-content-center ">
            <Card sx={{ width: 1150, display: "flex", height: "70px",marginBottom:"10px",background: 'none',border:"none",outline:"none" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'black', marginRight: "35px" }} aria-label="recipe">
                            <img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src="https://imgupscaler.com/images/samples/anime-after.webp" alt="" />
                        </Avatar>} />

                   <CardContent sx={{ display: "flex", justifyContent: 'space-evenly', gap: "210px", marginTop: "4px" }}  >
                    <Box>
                        <Typography variant="h6" color="white">
                            {Name}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="white">
                            {Course}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="white">
                            {rollNumber}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="white">
                            Delete
                        </Typography>
                    </Box>

                </CardContent>
            </Card>
        </Box>
       </Box>
    );
}