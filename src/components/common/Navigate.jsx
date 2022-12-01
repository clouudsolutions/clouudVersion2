import * as React from 'react'
import {Stack,Icon,Link,Typography,Grid,AppBar, Container, Toolbar} from '@mui/material'
import { Sort } from '@mui/icons-material';
export class Navigate extends React.Component {
  render() {
    const Navigation = [
        {
            label:'Home',
            Children:[]
        },
        {
            label:'Services',
            Children:['Web Designing','Web Applications','Logo Design','UI/UX Design','Banner & Creatives Design','Mobile Applications','Progressive Web Applications']
        },
        {
            label:'Solutions',
            Children:['Tour & Travel Applications','E-learning Platforms','Real-Estate Site Applications','Health&Medicos Websites','Hotel Management Applications','Company ERP & CMS Solutions','NGO, Charitable Trusts & Societies','Stock Trading Platform']
        },
        {
            label:'Resources',
            Children:['Company Overview','Blogs','Case Studies','E-Learning','Frequently Asked Questions']
        },
        {
            label:'Contact',
            Children:[]
        },
    ];

    return (
        <React.Fragment>
        <AppBar component="nav" sx={{backgroundColor:'transparent',backgroundImage:'linear-gradient(to bottom right,rgba(255,255,255,0.3),rgba(255,255,255,0))',backdropFilter:'blur(10px)',marginBottom:'2.13rem'}} elevation={0} position="sticky">
            <Toolbar>
               <Container>
               <Grid container alignItems="center">
                    <Grid item lg={1} md={1} sm={11} xs={11}>
                        <img style={{width:'8.99rem',padding:'0.82rem'}} alt="Clouud Logo" src="https://www.clouud.solutions/assets/logo/clouud_solutions.png" />
                    </Grid>
                    <Grid item lg={11} md={11} sm={1} xs={1} alignItems="center" justifyContent="flex-end">
                            <Stack spacing={4} 
                            direction="row" 
                            alignItems="center" 
                            justifyContent="flex-end" 
                            sx={{display:{xs:'none', sm:'flex'} }}>
                                    {Navigation.map((navmenu,index)=> (
                                        <Link key={index}
                                                href="#"
                                                color="primary.dark"
                                                underline="none"
                                                variant="plain"
                                                px={2} py={1}>
                                            <Typography 
                                                fontFamily={'Genos'} 
                                                fontWeight={500} 
                                                fontSize={'1.25rem'}>{navmenu.label}
                                            </Typography>
                                        </Link>
                                    ))}
                            </Stack>
                            <Icon sx={{display:{xs:'flex', sm:'none'}}}>
                            <Sort color="primary" aria-label="Open Menu" />
                            </Icon>
                            
                    </Grid>
                </Grid>  
               </Container>
            </Toolbar>
        </AppBar>

      </React.Fragment>
    )
  }
}

export default Navigate
