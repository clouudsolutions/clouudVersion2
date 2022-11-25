import * as React from 'react'
import Navigate from '../common/Navigate'
import { Button, CssVarsProvider } from '@mui/joy';
import { Stack,Grid, Typography, Container } from '@mui/material'
import Spline from '@splinetool/react-spline';
import { PersonOutlineRounded } from '@mui/icons-material';

class TopHead extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigate></Navigate>
        <Container maxWidth="lg" >
          <Stack direction="row">
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{alignSelf:'center'}} elevation={1}>
                <Typography 
                    color="grey.600"
                    variant="body1"
                    fontFamily={'Genos'} 
                    fontWeight={500} 
                    fontSize={'1.15rem'}
                    lineHeight={1}
                    mb={0}>BRING YOUR IDEAS TO LIFE
                </Typography>
                
                <Typography
                    variant="h1"
                    fontFamily={'Genos'} 
                    fontWeight={700} 
                    fontSize={'4.35rem'}
                    lineHeight={1}
                    sx={{
                      backgroundcolor: "primary",
                      backgroundImage: `linear-gradient(270deg, #012345, #52A2ff)`,
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      Futuristic
                </Typography>
                <Typography 
                    color="grey.800"
                    variant="h1"
                    fontFamily={'Genos'} 
                    fontWeight={700} 
                    fontSize={'4.35rem'}
                    lineHeight={1}>
                Software & Tech. Development
                </Typography>
                    <Grid item xs={10} mt={2}>
                        <Typography variant="body1" color="grey.600">
                        Our experienced crew is prepared to support your company by offering to deliver a solid, scalable, and effective solution using the most cutting-edge technology stacks and processes.
                        </Typography>
                    </Grid>
                      <CssVarsProvider>
                        <Grid item xs={12} my={4}>
                        <Button variant="soft" size="lg" startDecorator={<PersonOutlineRounded />}>Enquire Now!</Button>
                        </Grid>
                    </CssVarsProvider>
                  
              </Grid>
              <Grid item lg={5} sx={{zIndex:'0'}}>
                <Spline scene="https://prod.spline.design/ri2oQrYKH2Ve9UQU/scene.splinecode" />
              </Grid>
              
            </Grid>
          </Stack>
        </Container>
      </React.Fragment>
    )
  }
}

export default TopHead
