/*describe('Smoke test of Android', ()=>{

  it('Onboarding - verification of the first page:links and the Accept button', async()=>{
    const searchBtn = await $('//*[@text="Accept"]');
    await searchBtn.waitForDisplayed();
    expect(searchBtn).toHaveValueContaining('Accept');
    expect(searchBtn).toBeClickable();
    await searchBtn.click();
  })

  it('Onboarding - verification of the 2 page (text verification,click on its button)', async()=>{
    const searchBtn = await $('//*[@text="Allow location"]');
    await searchBtn.waitForDisplayed();
    expect(searchBtn).toHaveValueContaining('Allow location');
    //expect(searchBtn).toBeClickable();
    await searchBtn.click();
  })

  it('Onboarding - click on "Allow once" of module, verification of module"s text', async ()=>{
    const usingAppConfirm = await $('//*[@text = "While using the app"]');
    expect(usingAppConfirm).toBeDisplayed();
    expect(usingAppConfirm).toHaveValueContaining('While using the app');
    await usingAppConfirm.click();
  })

  it('Onboarding - Dont forget to pay for parking page (text verification,click on Continue)', async ()=>{
    const btnContinue = await $('//*[@text = "Allow activity"]');
    expect(btnContinue).toHaveValueContaining('Allow activity');
    await btnContinue.click();
  });

  it('Onboarding - click on Allow your motion, verification of module"s text', async ()=>{ //iOS
    const accesLink = await $('//*[@text = "Allow"]');
    await accesLink.click();
  });

  it('Registration page - text verification,click on Skip and Allow track to go to the anonimous mode', async () =>{
    const creatAccount= await $('//*[@text = "Creat account"]');
    expect(creatAccount).toBeDisplayed();
  })

    it('Registration page - login is clickable', async ()=>{
    const loginLink = await $('//*[@text = "Log in"]');
    expect(loginLink).toHaveText('Log in');
    await loginLink.click();
    })

    it('Login page - element visabiity', async()=>{
      const remaindLink = await $('//*[@text = "Forgotten password"]');
      expect(remaindLink).toHaveText('Forgotten password');
    });
    
    it('Login page - input of the correct email', async ()=>{
      const emailInput= await $('//*[@text = "Email"]');
      expect(emailInput).toHaveValue('Email');
     // await emailField.click();
      await emailInput.addValue('app.forhorse@gmail.com');
    })

    it('Login page - input of the correct password', async ()=>{
      const passwordInput= await $('//*[@text = "Password"]');
      expect(passwordInput).toHaveValue('Password');
     // await emailField.click();
      await passwordInput.addValue('Create1234+');

    })
    it('Login page - login button click to go further', async ()=>{
      const loginBtn = await $('//*[@text = "Log in"]');
      //expect(loginBtn).toHaveValue('Log in');
      await loginBtn.click();
      await driver.pause(25000);
      })

      it('Main page - the main page assertion', async()=>{
        
        const profileTitle = '~Profile, New notification';
        expect(profileTitle).toBeDisplayed();
        await $(profileTitle).click();
        await driver.pause(3000)        
      })

      it('Main page  - click on the  field home address and input an address', async()=>{ 
      const homeAddresField = await $('//*[@text = "Home address"]');
      await $(homeAddresField).click();
      await driver.pause(5000);

      const imputFieldHomeAddress =  await $('//*[@text = "Type address or a place name"]');
      await $(imputFieldHomeAddress).click();
      await driver.pause(5000);
      
      await $(imputFieldHomeAddress).addValue('Delnicka 5')
      })   
      
    })*/