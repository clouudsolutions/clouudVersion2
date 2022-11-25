import * as React from 'react'
import {Tabs,TabList,Tab,TabPanel, Container, CssVarsProvider, Grid, Stack, Typography } from '@mui/joy';
import { ImageList, ImageListItem } from '@mui/material';

class TopServices extends React.Component {
  render() {
    const brands = [
      {
        name:'React',
        category:'0',
        image:'./brands/react.png'
      },
      {
        name:'Angular',
        category:'0',
        image:'./brands/angularjs.png'
      },
      {
        name:'Apache',
        category:'1',
        image:'./brands/apache.png'
      },
      {
        name:'bootstrap',
        category:'0',
        image:'./brands/bootstrap.png'
      },
      {
        name:'CakePHP',
        category:'1',
        image:'./brands/cakephp.png'
      },
      {
        name:'CodeIgniter',
        category:'1',
        image:'./brands/codeigniter.svg'
      },
      {
        name:'CSS',
        category:'0',
        image:'./brands/css.svg'
      },
      {
        name:'Google Flutter',
        category:'0',
        image:'./brands/Google-flutter-logo.svg.png'
      },
      {
        name:'HTML',
        category:'0',
        image:'./brands/html.svg'
      },
      {
        name:'Ionic',
        category:'0',
        image:'./brands/ionic.png'
      },
      {
        name:'JS',
        category:'0',
        image:'./brands/js.png'
      },
      {
        name:'Kubernets',
        category:'1',
        image:'./brands/kubernets.png'
      },
      {
        name:'laravel',
        category:'1',
        image:'./brands/laravel.png'
      },
      {
        name:'nodejs',
        category:'1',
        image:'./brands/nodejs.png'
      },
      {
        name:'php',
        category:'1',
        image:'./brands/php.png'
      },
      {
        name:'python',
        category:'1',
        image:'./brands/python.png'
      },
      {
        name:'Shopify',
        category:'1',
        image:'./brands/shopify.png'
      },
      {
        name:'Vuejs',
        category:'0',
        image:'./brands/vuejs.png'
      },
      {
        name:'Wordpress',
        category:'1',
        image:'./brands/wordpress.png'
      }
      
  ]
    return (
      <React.Fragment>
        
        <CssVarsProvider>
          <Container maxWidth="lg">
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" my={8}>
                <Grid container>
                    <Grid item xs={12}>
                      <Typography
                      variant='h4'
                      fontFamily={'Genos'}
                      fontWeight={600}
                      fontSize={'2.32rem'} 
                      lineHeight={1}>
                        Professional Experts in Technologies
                      </Typography>
                    </Grid>
                </Grid>
            </Stack>
            <Tabs aria-label="Technologies" defaultValue={0}>
                <TabList color="primary" varient="soft">
                  <Tab color="primary">Frontend</Tab>
                  <Tab color="primary">Backend</Tab>
                  <Tab color="primary">UI/UX</Tab>
                  <Tab color="primary">Marketing</Tab>
                </TabList>
                <TabPanel value={0}>
                <ImageList cols={4} gap={4} variant="quilted">
                  {brands.map((brand,index) => (
                    <ImageListItem key={index}>
                      <img src={brand.image} alt={brand.name} />
                    </ImageListItem>
                  ))}  
                    
                  </ImageList>
                </TabPanel>
                <TabPanel value={1}>
                  <b>Second</b> tab panel
                </TabPanel>
                <TabPanel value={2}>
                  <b>Third</b> tab panel
                </TabPanel>
                <TabPanel value={3}>
                  <b>4th</b> tab panel
                </TabPanel>
              </Tabs>
           
          </Container>
          </CssVarsProvider>
      </React.Fragment>
    )
  }
}

export default TopServices
