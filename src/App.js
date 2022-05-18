import React, { useEffect, useState } from 'react';
import './App.css';
import { Grid, Paper, TextField, FormControl, Snackbar, RadioGroup, FormControlLabel, Radio, Checkbox } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import Card from './components/Card/Card';
import Spinner from './components/Spinner/Spinner';
function App() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    website: '',
    imageLink: '',
    gender: 'Male',
    skills: []
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    type: '',
    text: ''
  });
  const [showCredentials, setShowCredentials] = useState(false)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, gender: e.target.value })
  };

  const handleCheckBoxChange = (e) => {
    const item = e.target.value;
    const { skills } = userInfo
    if (!skills.includes(item)) {
      skills.push(item)
    } else if (skills.indexOf(item) !== -1) {
      skills.splice(skills.indexOf(item), 1)
    }
    setUserInfo({ ...userInfo, skills })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, website, imageLink, skills } = userInfo
    if (name === '' || email === '' || website === '' || imageLink === '' || skills.length === 0) {
      setMessage({
        type: 'error',
        text: 'Please fill all the fields'
      })
      handleClick();
    } else {
      console.log(userInfo)
      setShowCredentials(true)
      setMessage({
        type: 'success',
        text: 'Successfully submitted'
      })
      handleClick();
    }

  }

  // useEffect(() => {
  //   console.log(userInfo)
  // }, [userInfo]);

  return (
    <>
      <h1
        style={{ textAlign: 'center' }}
      >Registration Form</h1>
      <Grid
        className="app"
        container
        spacing={3}
        wrap="wrap"
      >
        <Grid
          item
          xs={12}
          md={6}
          className="app__left"
        >
          <form
            className='box'
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <TextField
              required
              type='text'
              variant="outlined"
              label="Enter Name"
              value={userInfo.name}
              onChange={(e) => {
                setUserInfo({ ...userInfo, name: e.target.value })
              }}
              style={{ width: '90%', margin: '10px auto' }}
            />

            <TextField
              required
              type='email'
              variant="outlined"
              label="Enter Email"
              value={userInfo.email}
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value })
              }}
              style={{ width: '90%', margin: '10px auto' }}
            />

            <TextField
              required
              type='text'
              variant="outlined"
              label="Enter Website"
              value={userInfo.website}
              onChange={(e) => {
                setUserInfo({ ...userInfo, website: e.target.value })
              }}
              style={{ width: '90%', margin: '10px auto' }}
            />

            <TextField
              required
              type='text'
              variant="outlined"
              label="Enter Image Link"
              value={userInfo.imageLink}
              onChange={(e) => {
                setUserInfo({ ...userInfo, imageLink: e.target.value })
              }}
              style={{ width: '90%', margin: '10px auto' }}
            />

            <FormControl component="fieldset">
              <h4>Enter Gender</h4>
              <RadioGroup aria-label="gender" name="gender" value={userInfo.gender} onChange={handleChange}>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>

            <div>
              <h4>Select your skills</h4>
              <label htmlFor="skills">React Js</label>
              <Checkbox
                value='Reactjs'
                onChange={handleCheckBoxChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              {/* ---------------------------- */}
              <label htmlFor="skills">Node Js</label>
              <Checkbox
                value='Nodejs'
                onChange={handleCheckBoxChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              {/* -------------------------- */}
              <label htmlFor="skills">Mongo DB</label>
              <Checkbox
                value='MongoDB'
                onChange={handleCheckBoxChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              {/* ----------------------------- */}
              <label htmlFor="skills">PostgreSQL</label>
              <Checkbox
                value='PostgreSQL'
                onChange={handleCheckBoxChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <label htmlFor="skills">Docker</label>
              <Checkbox
                value='Docker'
                onChange={handleCheckBoxChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </div>
            <button
              type='submit'
              className='button'
            >
              <span className="text">Submit</span>
            </button>
          </form>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={message.type}>
              {message.text}
            </Alert>
          </Snackbar>
        </Grid>
        {/* --------------------------------------------------------------------------- */}
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: '2rem 0 2rem 1rem',
            margin: '1rem auto 0'
          }}
        >
          {showCredentials ? <Card userInfo={userInfo} /> : <Spinner />}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
