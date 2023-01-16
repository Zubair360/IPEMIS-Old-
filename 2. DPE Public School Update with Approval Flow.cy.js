describe('Flow two: Public School Update with Approval Flow', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Update Public School as HT', () => {

      cy.visit('https://login.ipemis.qa.innovatorslab.net/login')

      var name ='01869825375'
      var password='Maski1#109'
      var aueo = '01711246280'
      submitLoginForm (name,password)
      cy.get('.sidebar-menu > :nth-child(1) > :nth-child(3) > a').click()
      //Basic Info:
      cy.get('#schoolGrade').select('এ',{force: true})
      cy.get('#yearOfEstablishment').clear({force: true}).type('2002',{force: true}) 

      //Academic Info:
      cy.get('#schoolClassId-3023').check({force: true})
      cy.get('#schoolMediumId-5').check({force: true})
      cy.get('#academicActivities').select('আছে',{force: true})
      cy.get('#yearOfGradeDetermination').clear({force: true}).type('2010',{force: true}) 
      cy.get('#yearOfRegistration').clear({force: true}).type('2014',{force: true})
      cy.get('#bankAccountNo').clear({force: true}).type('101102222222',{force: true})     
      cy.get('select[name="academicInfo.bankName.masterDataEntryId"]').select('এবি ব্যাংক লিমিটেড',{force: true})
      cy.get('input[name="academicInfo.noOfApprovedTeacherPosts"]').clear({force: true}).type('10',{force: true})
      cy.get('#noOfShifts').clear({force: true}).type('2',{force: true})

   //Geographical Info:
   cy.get('#tidalWave').select('না',{force: true})
   cy.get('#cyclone').select('না',{force: true})
   cy.get('#flood').select('না',{force: true})
   cy.get('#waterlogging').select('না',{force: true})
   cy.get('#salinity').select('না',{force: true})
   cy.get('#riverErosion').select('না',{force: true})
   cy.get('#drought').select('না',{force: true})
   cy.get('#earthquake').select('না',{force: true})
   cy.get('#mountainCollapsible').select('না',{force: true})
   cy.get('#tides').select('না',{force: true})
   cy.get('#geographicalLocation').select('চর এলাকা',{force: true})
   cy.get('#communicationLevel').select('সহজ পথ',{force: true})
   cy.scrollTo('center')

   //Facility Information:
   cy.get('#shaheedMinar').select('নাই',{force: true})
   cy.get('#shelterCumSchool').select('না',{force: true})
   cy.get('#safeDrinkingWater').select('আছে',{force: true})
   cy.get('#srmContent').select('নাই',{force: true})
   cy.get('#liberationWarCorner').select('আছে',{force: true})
   cy.get('#honestyStore').select('নাই',{force: true})
   cy.get('#bookCorner').select('নাই',{force: true})
   cy.get('#wallsOfHumanity').select('নাই',{force: true})
   cy.get('#directionalBlade').select('নাই',{force: true})
   cy.get('#firstAidKit').select('নাই',{force: true})
   cy.get('#fireExtinguisher').select('নাই',{force: true})
   cy.get(':nth-child(13) > :nth-child(1) > .row > .col-xl-6 > #ramp').select('নাই',{force: true})
   cy.get('#daisyBook').select('নাই',{force: true})
   cy.get('#brailleBook').select('নাই',{force: true})
   cy.get('#wheelchair').select('নাই',{force: true})
   cy.get('#signLangManual').select('নাই',{force: true})
   cy.get('#signLangTutor').select('নাই',{force: true})
   cy.get('#crutches').select('নাই',{force: true})
   cy.get('#visionFencing').select('নাই',{force: true})
   cy.get('#silentEnvironment').select('নাই',{force: true})
   cy.get('#colorContrast').select('নাই',{force: true})
   cy.get('#hearingAid').select('নাই',{force: true})
   cy.get('#useOfDisinfectant').select('নাই',{force: true})
   cy.get('#powerConnection').select('নাই',{force: true})
   cy.get('#internetFacility').select('নাই',{force: true})
   cy.get('#littleDoctorActivities').select('নাই',{force: true})
   cy.get('#earlyWarningActivities').select('নাই',{force: true})
   cy.get('#studentCouncil').select('নাই',{force: true})
   cy.get('#locationType').select('গ্রামাঞ্চলে',{force: true})
   cy.get('#playground').select('নাই',{force: true})
   cy.get('#withBoundary').select('নাই',{force: true})
   
   cy.get('select[name="facilityInfo.studentWelfare"]').select('নাই',{force: true})

   cy.get('select[name="facilityInfo.buyDisinfectantForCovid"]').select('হয়েছে',{force: true})
   cy.get('select[name="facilityInfo.postCovidStepsTakenBeforeSchoolOpen"]').select('হয়েছে',{force: true})
   cy.get('#adjacentHaatBajar').select('নাই',{force: true})
   cy.get('#distanceFromBajar').clear({force: true}).type('5',{force: true})
   cy.get('#sourceOfElectricity').select('সাধারণ বিদ্যুৎ',{force: true})


// Land Information:
cy.get('#land-info > .land-info-form > :nth-child(3) > :nth-child(1) > .row > .col-xl-6 > .form-control').clear({force: true}).type('25',{force: true})

//Building Info:
cy.get('input[name="buildingInfoList[0].yearOfConstruction"]').clear({force: true}).type('2010',{force: true})
cy.get('input[name="buildingInfoList[0].numberOfRooms"]').clear({force: true}).type('1',{force: true})
cy.get('#buildingInfoList > .card').click({force: true})
cy.wait(2000)
cy.get('#confirm-btn-change-classroom-info').click()
cy.get('select[name="buildingInfoList[0].ownershipType.masterDataEntryId"]').select('নিজস্ব',{force: true})

cy.get('select[name="buildingInfoList[0].constructionType.masterDataEntryId"]').select('পাকা',{force: true})

cy.get('input[name="buildingInfoList[0].numberOfCurrentFloors"]').clear({force: true}).type('2',{force: true})

cy.get('input[name="buildingInfoList[0].numberOfFoundationFloors"]').clear({force: true}).type('3',{force: true})

cy.get('input[name="buildingInfoList[0].floorSize"]').clear({force: true}).type('10',{force: true})

//ClassRoom Info:

cy.get('select[name="classRoomInfoList[0].usagePurpose.masterDataEntryId"]').select('শ্রেনিকক্ষ',{force: true})
cy.get('select[name="classRoomInfoList[0].condition.masterDataEntryId"]').select('পুরোনো',{force: true})
cy.get('select[name="classRoomInfoList[0].chalkBoard"]').select('নাই',{force: true})

//Toilet Info:

cy.get('select[name="toiletInfoList[0].constructionType.masterDataEntryId"]').select('পাকা',{force: true})

cy.get('input[name="toiletInfoList[0].yearOfConstruction"]').clear({force: true}).type('2020',{force: true})

cy.get('select[name="toiletInfoList[0].toiletUserType.masterDataEntryId"]').select('বালক',{force: true})

cy.get('select[name="toiletInfoList[0].condition.masterDataEntryId"]').select('পুরোনো',{force: true})

cy.get('select[name="toiletInfoList[0].attachedWithBuilding"]').select('না',{force: true})

cy.get('select[name="toiletInfoList[0].withWashblock"]').select('নাই',{force: true})

cy.get('select[name="toiletInfoList[0].withElectricity"]').select('নাই',{force: true})

cy.get('select[name="toiletInfoList[0].constructionProject.masterDataEntryId"]').select('পিইডিপি-১',{force: true})

cy.get('select[name="toiletInfoList[0].withRamp"]').select('নাই',{force: true})  
    
cy.get('select[name="toiletInfoList[0].cleaningMaterial"]').select('আছে',{force: true}) 

cy.get('select[name="toiletInfoList[0].withWaterSource"]').select('আছে',{force: true}) 

cy.get('select[name="toiletInfoList[0].withSoap"]').select('আছে',{force: true}) 


//Washblock Info:

cy.get('select[name="washblockInfoList[0].withElectricity"]').select('নাই',{force: true})

cy.get('input[name="washblockInfoList[0].yearOfConstruction"]').clear({force: true}).type('2020',{force: true})

cy.get('select[name="washblockInfoList[0].washblockUserType.masterDataEntryId"]').select('বালক',{force: true})

cy.get('select[name="washblockInfoList[0].condition.masterDataEntryId"]').select('পুরোনো',{force: true})

cy.get('select[name="washblockInfoList[0].washblockInUse"]').select('হয়',{force: true})

cy.get('select[name="washblockInfoList[0].cleaningMaterial"]').select('আছে',{force: true})

cy.get('select[name="washblockInfoList[0].withWaterSource"]').select('নাই',{force: true})

cy.get('select[name="washblockInfoList[0].withSoap"]').select('নাই',{force: true})

cy.get('select[name="washblockInfoList[0].associatedWithBuilding"]').select('না',{force: true})


// Drinking Water Facility info:

cy.get('select[name="safeWaterFacilityInfoList[0].safeWaterSource.masterDataEntryId"]').select('কুয়া',{force: true})

cy.get('select[name="safeWaterFacilityInfoList[0].condition.masterDataEntryId"]').select('ব্যবহারযোগ্য',{force: true})

cy.get('select[name="safeWaterFacilityInfoList[0].ecolaiTested"]').select('হয়েছে',{force: true})

cy.get('select[name="safeWaterFacilityInfoList[0].salinityOrIron"]').select('আছে',{force: true})

cy.get('select[name="safeWaterFacilityInfoList[0].arsenicFree"]').select('না',{force: true})

cy.get('input[name="safeWaterFacilityInfoList[0].yearOfEstablishment"]').clear({force: true}).type('2020',{force: true})

//Furniture Info:

cy.get('select[name="furnitureInfoList[0].furnitureType.masterDataEntryId"]').select('টি-টেবিল',{force: true})

cy.get('input[name="furnitureInfoList[0].numberOfUsableFurnitures"]').clear({force: true}).type('10',{force: true})
cy.get('input[name="furnitureInfoList[0].numberOfRepairableFurnitures"]').clear({force: true}).type('10',{force: true})
cy.get('input[name="furnitureInfoList[0].numberOfUnsuitableFurnitures"]').clear({force: true}).type('10',{force: true})

//ICT Info:

cy.get('select[name="ictGeneralInfo.teachersCapableOfUsingTechnology"]').select('নাই',{force: true})

cy.get('select[name="ictGeneralInfo.computerUsedForTeachingAndLearning"]').select('হয়',{force: true})

cy.get('select[name="ictGeneralInfo.internetUsedForTeachingAndLearning"]').select('হয়',{force: true})

cy.get('select[name="ictGeneralInfo.multimediaUsedClassrooms"]').select('হয়',{force: true})

cy.get('select[name="ictGeneralInfo.multimediaBasedClassrooms"]').select('নাই',{force: true})

cy.get('select[name="ictGeneralInfo.multimediaInteractiveClassrooms"]').select('নাই',{force: true})

cy.get('select[name="ictGeneralInfo.soundSystem"]').select('নাই',{force: true})

//ICT Equipment Info:

cy.get('select[name="schoolIctEquipmentDetailsList[0].productName.masterDataEntryId"]').select('কম্পিউটার',{force: true})

cy.get('input[name="schoolIctEquipmentDetailsList[0].serialNo"]').clear({force: true}).type('1004',{force: true})

cy.get('input[name="schoolIctEquipmentDetailsList[0].yearOfReceiptOfGoods"]').clear({force: true}).type('2020',{force: true})

cy.get('select[name="schoolIctEquipmentDetailsList[0].sourceOfProductAcquisition.masterDataEntryId"]').select('সরকারী',{force: true})

cy.get('select[name="schoolIctEquipmentDetailsList[0].condition.masterDataEntryId"]').select('নতুন',{force: true})

cy.scrollTo('bottom')

//Cultural Info:

cy.get('select[name="culturalActivity.banggobundhuGoldcupTournament"]').select('হয়',{force: true})

cy.get('select[name="culturalActivity.banggomataGoldcupTournament"]').select('হয়',{force: true})

cy.get('select[name="culturalActivity.harmonium"]').select('আছে',{force: true})

cy.get('select[name="culturalActivity.musicalInstrument"]').select('আছে',{force: true})

// submit the School Form:

cy.get('#preview-update-school-form-btn').click({force: true})
cy.wait(2000)

cy.scrollTo('bottom')

cy.get('#modal-submit-update-school-form-btn').click({force: true})

cy.wait(2000)

cy.get('#submit-update-form-btn').click({force: true})

cy.wait(3000)

logOut()



//AUEO=01711246280




it('Approval of Public School Update Request', () => {
  var aueo = '01711246280'
  var password='Maski1#109'
  submitLoginForm (aueo,password)

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


})