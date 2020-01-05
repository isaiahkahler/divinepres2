import React, { PropsWithChildren } from 'react';
import Icon, { IconProps } from '@material-ui/core/Icon';
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styled, useTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

interface FullButtonProps {
    icon?: React.ComponentType<IconProps>,
    isSecondary?: boolean,
}

export default function FullButton({icon, isSecondary, ...props}: PropsWithChildren<FullButtonProps> & Omit<ButtonBaseProps, keyof PropsWithChildren<FullButtonProps>>) {
    const Icon = icon;
    const theme = useTheme();

    return(
        <ButtonBase 
        {...{...props, style: {
            backgroundColor: !!isSecondary ? theme.palette.secondary.light : theme.palette.primary.light,
            width: '100%',
            borderRadius: '1000px',
            padding: theme.spacing(2),
            boxShadow: theme.shadows[5],
            color: theme.palette.text.primary,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            ...props.style,
        }}}>
            <Grid container alignItems='center'>
                {!!Icon ? <Grid item><Icon fontSize='large' style={{paddingRight: theme.spacing(2)}} /></Grid> : undefined}
                <Grid item xs>
                    <Typography variant='h4'>
                        {props.children}
                    </Typography>
                </Grid>
            </Grid>
        </ButtonBase>
    );
}
