import React from 'react';
import { IconProps } from '@material-ui/core/Icon';
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

interface FullButtonProps {
    icon?: React.ComponentType<IconProps>,
    isSecondary?: boolean,
}

const FullButton = styled(({ icon, ...props }: FullButtonProps & Omit<ButtonBaseProps, keyof FullButtonProps>) => {
    let Icon = icon;
    return (
        <ButtonBase {...{ ...props }}>
            <Grid container alignItems='center'>
                {!!Icon ? <Grid item><Icon fontSize='large' /></Grid> : undefined}
                <Grid item xs>
                    <Typography variant='h4'>
                        {props.children}
                    </Typography>
                </Grid>
            </Grid>
        </ButtonBase>
    );
})((props: { theme: Theme }) => ({
    width: '100%',
    borderRadius: '1000px',
    padding: props.theme.spacing(2),
    boxShadow: props.theme.shadows[5],
    color: props.theme.palette.text.primary,
    marginTop: props.theme.spacing(1),
    marginBottom: props.theme.spacing(1),
    //@ts-ignore
    backgroundColor: !!props.isSecondary ? props.theme.palette.secondary.light : props.theme.palette.primary.light,
}));

export default FullButton;