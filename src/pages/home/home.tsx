import React from 'react';
import { Presentation } from '../../components/types';
import { Container, Fab, Typography, Grid, styled, Theme, Box, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PlayIconOutlined from '@material-ui/icons/PlayCircleFilledOutlined';
import AddIconOutlined from '@material-ui/icons/AddCircle';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FullButton from '../../components/fullbutton';

interface HomeProps {
    presentations: Presentation[],
}


const StyledFab = styled(Fab)((props: { theme: Theme }) => ({
    position: 'absolute',
    bottom: props.theme.spacing(2),
    right: props.theme.spacing(2)
}));


export default function Home(props: HomeProps) {

    const theme = useTheme();

    return (
        <Container maxWidth='md'>
            <Grid container justify='center'>
                <Typography variant='h1'><Box fontWeight='fontWeightBold' fontStyle='italic'>DivinePres 2</Box></Typography>
                <Link to='/create'>
                    <FullButton icon={AddIconOutlined}>
                        create a new presentation
                    </FullButton>
                </Link>
                {props.presentations.map((presentation, index) => <FullButton icon={PlayIconOutlined} key={index} isSecondary>
                    presentation from {moment(presentation.timestamp).format('MM/DD/YY')}
                </FullButton>)}
            </Grid>
            <Link to='/create'>
            <StyledFab color='primary'>
                <AddIcon />
            </StyledFab>
            </Link>
        </Container>
    );
}