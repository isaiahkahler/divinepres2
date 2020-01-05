import React, { useState } from 'react';
import { Template, Presentation, Section } from '../../components/types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FullButton from '../../components/fullButton';
import Button from '@material-ui/core/Button';
import SongIcon from '@material-ui/icons/MusicNote';
import ReadingIcon from '@material-ui/icons/MenuBook';
import CoverIcon from '@material-ui/icons/Image';
import PlainIcon from '@material-ui/icons/FontDownload';
import { useTheme, styled, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';


import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(({ ...other }) => {
    return (
        <TextField {...{ ...other }} variant='outlined' />
    );
})((props: { theme: Theme }) => ({
    width: '100%',
    paddingTop: props.theme.spacing(1),
    paddingBottom: props.theme.spacing(2),
}));


interface CreateProps {
    template: Template,
    handleStorePresentation: (presentation: Presentation) => void,
    // handleSearchSong: (name: string, section: Section) => Section,
    // handleSearchPassage: () 
}

export default function Create(props: CreateProps) {

    const theme = useTheme();

    const [presentation, setPresentation] = useState<Presentation>({
        data: props.template,
        timestamp: Date.now(),
    });

    const [dialogOpen, setDialogOpen] = useState(false);
    const [section, setSection] = useState<Section | null>(null);


    return (

        <Container maxWidth='md'>
            <Typography variant='h2'><Box fontWeight='fontWeightBold' textAlign='center'>Create Presentation</Box></Typography>
            {presentation.data.map((_section, index) => {

                let icon = PlainIcon;
                let color = theme.palette.error.light;

                if (_section.type === 'song') {
                    icon = SongIcon;
                    color = theme.palette.primary.light;
                }
                if (_section.type === 'reading') {
                    icon = ReadingIcon;
                    color = theme.palette.secondary.light;
                }
                if (_section.type === 'cover') {
                    icon = CoverIcon;
                    color = theme.palette.action.active;
                }

                return (
                    <FullButton key={index} icon={icon} style={{ backgroundColor: color }} onClick={() => {
                        setDialogOpen(true);
                        setSection(_section);
                    }}>
                        <Box textAlign='left'>{_section.title}</Box>
                    </FullButton>
                )
            })}

            <Dialog
                open={dialogOpen}
                onClose={() => {
                    setDialogOpen(false);


                    //handle save section into presentation


                    setSection(null);
                }}

            >
                {!!section &&
                    <Container>
                        <DialogTitle>Modify {section.type.charAt(0).toUpperCase() + section.type.slice(1)}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {section.type === 'song' &&
                                    <>
                                        <StyledTextField label='Title' value={section.title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, title: event.target.value });
                                        }} />

                                        <Box display="flex" flexDirection='row' alignItems='center' >
                                            <StyledTextField label='Song Number' value={section.number} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                setSection({ ...section, number: event.target.value });
                                            }} helperText='Enter a song number and search to autofill lyrics.'/>

                                            <Button variant='contained' style={{ marginLeft: theme.spacing(2) }}>search</Button>
                                        </Box>


                                        <StyledTextField label='Song Name' value={section.songTitle} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, songTitle: event.target.value });
                                        }} />
                                        <StyledTextField label='Lyrics' value={section.lyrics} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, lyrics: event.target.value });
                                        }} />
                                        <StyledTextField label='Background Image URL' value={section.backgroundImage} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, backgroundImage: event.target.value });
                                        }} />
                                    </>}

                                {section.type === 'reading' &&
                                    <>
                                        <StyledTextField label='Title' value={section.title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, title: event.target.value });
                                        }} />
                                        <StyledTextField label='Passage' value={section.passage} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, passage: event.target.value });
                                        }} />
                                        <StyledTextField label='Page Number' value={section.page} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, page: event.target.value });
                                        }} />
                                        <StyledTextField label='Content Preview' value={section.content} disabled />
                                    </>}


                                {section.type === 'plain' &&
                                    <>
                                        <StyledTextField label='Title' value={section.title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, title: event.target.value });
                                        }} />
                                    </>}


                                {section.type === 'cover' &&
                                    <>
                                        <StyledTextField label='Title' value={section.title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, title: event.target.value });
                                        }} />
                                        <StyledTextField label='Heading' value={section.heading} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, heading: event.target.value });
                                        }} />
                                        <StyledTextField label='Subtitle' value={section.subtitle} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, subtitle: event.target.value });
                                        }} />
                                        <StyledTextField label='Background Image URL' value={section.backgroundImage} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSection({ ...section, subtitle: event.target.value });
                                        }} />
                                    </>}

                                <Box display='flex' justifyContent='center'>
                                    <Button variant='contained' style={{
                                        backgroundColor: red[500],
                                        color: theme.palette.getContrastText(red[500]),
                                    }}>delete section</Button>
                                </Box>
                            </DialogContentText>

                        </DialogContent>
                    </Container>
                }
            </Dialog>
        </Container>

    );
}

