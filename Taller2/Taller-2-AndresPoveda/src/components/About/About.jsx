import { React, useState } from 'react';
import "./About.css"
import Slider from '@mui/material/Slider';
import { FormControl, InputLabel, Select, MenuItem, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function About() {

  const [countryIndactive, setCountryIndactive] = useState('');

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleChange = (event) => {
    setCountryIndactive(event.target.value);
  };

  const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          root: {
            color: '#533ae5', // Add your desired color here
          },
        },
      },
    },
  });
  
  return (
    <div id="about">
      <img src={require("./assets/imh.png")} alt="" />
      <div id="text-container">
        <h3>
          Welcome to JyR Cosmetics, your one stop shop for lots, good and cheap cosmetics in Cali.</h3>
        <p>We are proud to offer you a wide selection of high quality hair and cosmetic products at exceptional prices from brands such as Vision Color, Thyms, Kuul, Nouvelle and more.
          We know how important it is for you to receive your products quickly and safely. That's why we strive to offer you an efficient and reliable home delivery service, so you can enjoy your favorite products without having to leave your business.</p>
        <h4> And... How much you like things being delivered to your business?</h4>
        <div id="slider">
          <img src="https://images.emojiterra.com/google/android-10/512px/1f6b6-2640.png" alt="" />
          <ThemeProvider theme={theme}>
            <Slider
              size="small"
              defaultValue={5}
              aria-label="Small"
              valueLabelDisplay="auto"
              min={0}
              max={10}
            />
          </ThemeProvider>
          <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/delivery-truck.png" alt="" />
        </div>
        
        <h3>Get exclusive deals</h3>
        <div id="oferts">
          <div>
            <FormControl style={{ width: '200px' }}>
              <InputLabel id="demo-simple-select-label"> Indicative</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countryIndactive}
                label="Country"
                defaultValue="Colombia"
                onChange={handleChange}
              >
                <MenuItem value={10}>Colombia</MenuItem>
                <MenuItem value={20}>Venezuela</MenuItem>
                <MenuItem value={30}>Mexico</MenuItem>
              </Select>
            </FormControl>
            <img src="data:image/png;base64,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" alt="" />
            <label htmlFor=""> +57</label>
            <input type="text" placeHolder="###-###-####" />
            <button> Send</button>
          </div>

          <div>
            <h4> I want notifications to my phone </h4>
            <Switch theme={theme} {...label} defaultChecked />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About