import React from 'react';
import { Presentation } from '../../components/types';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styled, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import PlayIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import AddIconCircle from '@material-ui/icons/AddCircle';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FullButton from '../../components/fullButton';

interface HomeProps {
    presentations: Presentation[],
}


const StyledFab = styled(Fab)((props: { theme: Theme }) => ({
    position: 'absolute',
    bottom: props.theme.spacing(2),
    right: props.theme.spacing(2)
}));


export default function Home(props: HomeProps) {
    return (
        <Container maxWidth='md'>
            <Grid container justify='center' direction='column'>
                <Typography variant='h1'><Box fontWeight='fontWeightBold' fontStyle='italic' textAlign='center'>DivinePres 2</Box></Typography>

                <Link to='/create'>
                    <FullButton icon={AddIconCircle}>
                        create a new presentation
                    </FullButton>
                </Link>
                {props.presentations.map((presentation, index) => <FullButton icon={PlayIcon} key={index} isSecondary>
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