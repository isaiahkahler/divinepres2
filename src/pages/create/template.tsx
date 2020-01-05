import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FullButton from '../../components/fullButton';
import Box from '@material-ui/core/Box';
import { Template } from '../../components/types';
import { templateTMBC } from '../../components/constants';


interface CreateProps {
    handleChooseTemplate: (template: Template) => void,
}

export default function Create(props: CreateProps) {

    return (
        <Container maxWidth='md'>
            <Grid container justify='center' direction='column'>
                <Typography variant='h1'><Box fontWeight='fontWeightBold' fontStyle='italic' textAlign='center'>DivinePres 2</Box></Typography>
                <Typography variant='h3'>choose a template:</Typography>
                <FullButton onClick={() => {props.handleChooseTemplate(templateTMBC)}}>TMBC</FullButton>
                <FullButton isSecondary onClick={() => {props.handleChooseTemplate([])}}>blank</FullButton>

            </Grid>
        </Container>
    );
}