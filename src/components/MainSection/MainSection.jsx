import React from 'react';
import logo from '../../assets/logo.png';
import { Typography } from '@mui/material';
import styles from './MainSection.module.css';
import Grid from '@mui/material/Grid';

function MainSection() {
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <Typography>How Can I Help You Today?</Typography>
            </div>
            <div>
                <img src={logo} alt="logoimg" className={styles.imagelogo} />
            </div>
            <div className={styles.qa}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <div className={styles.qas}>
                <Typography sx={{fontWeight:'600',fontSize:'1.5rem'}}>How Can I Help You Today?</Typography>
                <Typography  sx={{padding:'1rem 1rem 1rem 0rem'}}>Get immediate AI generated response</Typography>

            </div>                    </Grid>
                    <Grid item xs={12} md={6}>
                    <div className={styles.qas}>
                <Typography sx={{fontWeight:'600',fontSize:'1.5rem'}}>How Can I Help You Today?</Typography>
                <Typography sx={{padding:'1rem 1rem 1rem 0rem'}}>Get immediate AI generated response</Typography>

            </div>                    </Grid>
                    <Grid item xs={12} md={6}>
                    <div className={styles.qas}>
                <Typography sx={{fontWeight:'600',fontSize:'1.5rem'}}>How Can I Help You Today?</Typography>
                <Typography  sx={{padding:'1rem 1rem 1rem 0rem'}}>Get immediate AI generated response</Typography>

            </div>                    </Grid>
                    <Grid item xs={12} md={6}>
                    <div className={styles.qas}>
                <Typography sx={{fontWeight:'600',fontSize:'1.5rem'}}>How Can I Help You Today?</Typography>
                <Typography  sx={{padding:'1rem 1rem 1rem 0rem'}}>Get immediate AI generated response</Typography>

            </div>                   
             </Grid>
                </Grid>

            </div>
            <div className={styles.field}>
                <input className={styles.inputfield} />
                <button className={styles.btnfield}>Ask</button>
                <button className={styles.btnfield}>Save</button>
            </div>
        </div>
    );
}

export default MainSection;