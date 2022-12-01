import * as React from 'react'
import {Tabs,TabList,Tab,TabPanel, Container, CssVarsProvider, Grid, Stack, Typography,Chip,Avatar } from '@mui/joy';

class TopServices extends React.Component {
  render() {
    const FrontEnd = [
      {
        name:'React',
        image:'./images/brands/icons/react.svg'
      },
      {
        name:'Vuejs',
        image:'./images/brands/icons/vuejs.svg'
      },
      {
        name:'CSS',
        image:'./images/brands/icons/css3.svg'
      },
      {
        name:'HTML',
        image:'./images/brands/icons/html5.svg'
      },
      {
        name:'JS',
        image:'./images/brands/icons/javascript.svg'
      },
      {
        name:'Ionic',
        image:'./images/brands/icons/ionic.svg'
      },
      {
        name:'Flutter',
        image:'./images/brands/icons/flutter.svg'
      },
      {
        name:'Angular',
        image:'./images/brands/icons/angularjs.svg'
      },     
      {
        name:'bootstrap', 
        image:'./images/brands/icons/bootstrap.svg'
      },  
  ]

  const BackEnd = [
    {
      name:'php',
      image:'./images/brands/icons/php.svg'
    },
    {
      name:'python',
      image:'./images/brands/icons/python.svg'
    },
    
    {
      name:'AWS',
      image:'./images/brands/icons/amazon-web-services.svg'
    },
    {
      name:'Cpanel',
      image:'./images/brands/icons/cpanel.svg'
    },
    {
      name:'Google Cloud',
      image:'./images/brands/icons/googlecloud.svg'
    },
    {
      name:'NodeJS',
      image:'./images/brands/icons/nodejs.svg'
    },
    {
      name:'CodeIgniter',
      image:'./images/brands/icons/codeigniter.png'
    },
    {
      name:'laravel',
      image:'./images/brands/icons/laravel.svg'
    },
    
    {
      name:'Shopify Plugins',
      image:'./images/brands/icons/shopify.svg'
    },
    {
      name:'Wordpress',
      image:'./images/brands/icons/wordpress.svg'
    },
    {
      name:'Apache Server',
      image:'./images/brands/icons/apache.png'
    },
    {
      name:'CakePHP',
      image:'./images/brands/icons/cakephp.png'
    },
    {
      name:'Kubernets',
      image:'./images/brands/icons/kubernets.svg'
    },
  ]

  const UIUX = [
    {
      name:'Adobe InDesign',
      image:'./images/brands/icons/adobe-indesign.svg'
    },
    {
      name:'Adobe XD',
      image:'./images/brands/icons/adobe-xd.svg'
    },
    {
      name:'PremierePro',
      image:'./images/brands/icons/adobe-premiere-pro.svg'
    },
    {
      name:'AfterEffects',
      image:'./images/brands/icons/after-effects.svg'
    },
    {
      name:'Figma',
      image:'./images/brands/icons/figma.svg'
    },
    {
      name:'Illustrator',
      image:'./images/brands/icons/illustrator.svg'
    },
    {
      name:'Photoshop',
      image:'./images/brands/icons/photoshop.svg'
    },

  ]
  const marketing = [
    {
      name:'SEO',
      image:'./images/brands/icons/seo-service.png'
    },
    {
      name:'LinkedIn Ads',
      image:'./images/brands/icons/linkedinads.svg'
    },
    {
      name:'Facebook Ads',
      image:'./images/brands/icons/facebook.svg'
    },
    {
      name:'Google Ads',
      image:'./images/brands/icons/google-ads.svg'
    },
    {
      name:'Google Analytics',
      image:'./images/brands/icons/googleanalytics.png'
    },
    {
      name:'Content Writing',
      image:'./images/brands/icons/contentwriting.png'
    },
    {
      name:'Meta Ads',
      image:'./images/brands/icons/meta.svg'
    },

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
                <TabList color="primary" varient="soft" sx={{alignItems:'center', justifyContent:'center', px:1}}>
                  <Tab color="primary">Frontend</Tab>
                  <Tab color="primary">Backend</Tab>
                  <Tab color="primary">UI/UX</Tab>
                  <Tab color="primary">Marketing</Tab>
                </TabList>
                <TabPanel value={0} sx={{alignSelf:'center',paddingTop:'15px', justifyContent:'center'}}>
                {FrontEnd.map((frontend,index) => (
                        <Chip key={index}
                          variant="soft"
                          color="warning"
                          size="lg"
                          sx={{m:1}}
                          startDecorator={<Avatar size="sm" src={frontend.image} />}
                        >
                          {frontend.name}
                        </Chip>
                    ))} 
                </TabPanel>
                <TabPanel value={1} sx={{alignSelf:'center',paddingTop:'15px', justifyContent:'center'}}>
                {BackEnd.map((BackEnd,index) => (
                        <Chip key={index}
                          variant="outlined"
                          color="primary"
                          size="lg"
                          sx={{m:1}}
                          startDecorator={<Avatar size="sm" src={BackEnd.image} />}
                        >
                          {BackEnd.name}
                        </Chip>
                    ))} 
                </TabPanel>
                <TabPanel value={2} sx={{alignSelf:'center',paddingTop:'15px', justifyContent:'center'}}>
                {UIUX.map((UIUX,index) => (
                        <Chip key={index}
                          variant="soft"
                          color="danger"
                          size="lg"
                          sx={{m:1}}
                          startDecorator={<Avatar size="sm" src={UIUX.image} />}
                        >
                          {UIUX.name}
                        </Chip>
                    ))} 
                </TabPanel>
                <TabPanel value={3} sx={{alignSelf:'center',paddingTop:'15px', justifyContent:'center'}}>
                {marketing.map((marketing,index) => (
                        <Chip key={index}
                          variant="outlined"
                          color="warning"
                          size="lg"
                          sx={{m:1}}
                          startDecorator={<Avatar size="sm" src={marketing.image} />}
                        >
                          {marketing.name}
                        </Chip>
                    ))} 
                </TabPanel>
              </Tabs>
           
          </Container>
          </CssVarsProvider>
      </React.Fragment>
    )
  }
}

export default TopServices
