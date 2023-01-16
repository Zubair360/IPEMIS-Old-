describe('Flow One: Private School', () => {

    it('Create Private School', () => {
      
      cy.visit('https://login.ipemis.qa.innovatorslab.net/login')
    
      var name ='01725562807'
      var password='Maski1#109'
    submitLoginForm (name,password)
    cy.wait(5000)
    cy.get(':nth-child(4) > [href="javascript:void(0)"]').click()
    cy.wait(2000)
    cy.get('.active > .sidebar-submenu > .list-unstyled > :nth-child(2) > a').click()
    cy.wait(2000)

    cy.get('.navbar').click().get('#schoolType').select('কিন্ডারগার্টেন',{force: true})
    
    cy.get('.navbar').click().get('#yearOfEstablishment').type('2010',{force: true})

    cy.get('.navbar').click().get('#schoolGrade').select('এ',{force: true})

    cy.get('.navbar').click().get('#name').type('New ABO School',{force: true})
    cy.get('.navbar').click().get('#nameLocal').type('নিউ এ বি ও স্কুল',{force: true})
    cy.get('.navbar').click().get('#cluster').select('পূর্ব মহেশপুর',{force: true})
    cy.get('.navbar').click().get('#union').select('৭নং কবাই',{force: true})

    //Create HT:
    cy.scrollTo('bottom')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .row > .col-6').type('Hasan')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .row > .col-6').type('হাসান')
    var teacher_Mobile = '01816873008'
    cy.get('#mobile-number').type(teacher_Mobile)
    cy.get('#nationality').select('বাংলাদেশী')
    cy.get('#religion').select('ইসলাম ধর্ম')
    cy.get('#marital-status').select('বিবাহিত')
    cy.get('#firstJoiningDate').type('23/08/1990')
    cy.get('#headteacher-information').click()
    cy.get('#school-submit').click()
    cy.wait(3000)
    cy.get('#confirm').click()
    cy.wait(3000)
    logOut()

    //Private HT On-Boarding:
    cy.get('#username').type(teacher_Mobile)
    cy.get('#password').type('000000')
    cy.get('#login-submit').click()

 cy.scrollTo('center')
 cy.get('form.px-4 > .btn').click()
 cy.get('#new-password-input').type('Maski1#109')
 cy.get('#confirm-password-input').type('Maski1#109')
 cy.get('#continue-button').click()

 cy.get('#select-question-one').select('আপনার প্রথম স্কুলের নাম কি?')

cy.wait(2000)

cy.get('#input-answer-one').type('Dhaka primary School')

cy.wait(2000)

cy.get('#select-question-two').select('আপনার প্রথম শিক্ষকের নাম কী?')

cy.wait(2000)

cy.get('#input-answer-two').type('Hasan Talukder')

cy.wait(2000)

cy.get('#select-question-three').select('স্কুলে আপনার প্রথম বন্ধুর নাম কী?')

cy.wait(2000)

cy.get('#input-answer-three').type('Shaon Khan')

cy.wait(2000)

cy.get('#submit-button').click()

cy.wait(2000)

cy.get('.mb-1 > .btn').click()
cy.wait(2000)

submitLoginForm(teacher_Mobile,password)

// Private AT Creation

cy.get(':nth-child(4) > [href="javascript:void(0)"]').click()
cy.get('.active > .sidebar-submenu > .list-unstyled > :nth-child(2) > a').click()

cy.get('#private-teacher-info > .private-teacher-info-form > .mt-3 > .col-7 > .form-control').type('সাজিদ',{ force: true })
cy.get('#private-teacher-info > .private-teacher-info-form > :nth-child(3) > .col-7 > .form-control').type('Sajid',{ force: true })
cy.get('#teacherInfoList_0_ieimsUser_mobileNumber').type('01812222002',{ force: true })
cy.get('#private-teacher-info > .private-teacher-info-form > :nth-child(5) > .col-7 > .date-fragment > .input-group > .form-control').type('02/03/1995',{ force: true })
cy.get('#private-teacher-info > .private-teacher-info-form > :nth-child(6) > .col-7 > #gender').select('পুরুষ',{ force: true })
cy.get('#private-teacher-info > .private-teacher-info-form > :nth-child(7) > .col-7 > .form-control').select('বাংলাদেশী',{ force: true })
cy.get('#private-teacher-info > .private-teacher-info-form > :nth-child(8) > .col-7 > .form-control').select('ইসলাম ধর্ম',{ force: true })
cy.get('#private-teacher-info > .private-teacher-info-form > :nth-child(9) > .col-7 > .form-control').select('অবিবাহিত',{ force: true })
cy.get('#private-teacher-info > .private-teacher-info-form > :nth-child(14) > .col-7 > .form-control').select('সহকারী শিক্ষক',{ force: true })
cy.get('#private-teacher-info > .private-teacher-info-form > :nth-child(15) > .col-7 > .date-fragment > .input-group > .form-control').type('15/05/2020',{ force: true })

cy.get('#private-teacher-info').click()

cy.get('#private-teacher-submit').click()

cy.wait(3000)

cy.get('#confirm').click()


    })


//SignIn Function:
function submitLoginForm (name,password){
    cy.get('#username').type(name)
    cy.get('#password').type(password)
    cy.get('#login-submit').click({ force: true })
  }

//LogOut Function:
function logOut(){
    cy.get('#dropDownMenuButton').click({ force: true })
    cy.get('#signOutLink').click()
  }


})