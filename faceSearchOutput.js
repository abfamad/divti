var dataTable = {

    "data1":[{
      "score" : "80%",
      "imgSource" : "../divti/img/justin.jpeg",
      "nik" : "12711419071610002",
      "name": "Justin Timberlake",
      "birthDate" : "19/08/1989",
      "birthPlace": "Minnesita",
      "religion": "Kejawen",
      "marriageSts": "Kawin",
      "address": "Jl Panjang",
      "bloodType": "O",
      "occupation": "Karyawan",
      "gender": "Pria"
    }],
    "data2":[{
      "score": "89%",
      "imgSource" : "../divti/img/foto me.jpeg",
      "nik" : "12711419071610002",
      "name": "Roronoa Zorro",
      "birthDate" : "19/08/1989",
      "birthPlace": "Minnesita",
      "religion": "Kejawen",
      "marriageSts": "Kawin",
      "address": "Jl Panjang",
      "bloodType": "O",
      "occupation": "Karyawan",
      "gender": "Pria"
    }],
    
};


  function setModalData(trId){
    var tbl = trId;
    console.log(tbl);
    tbl = dataTable[trId][0];
    console.log(tbl);

    

    modalMatchScore.value = tbl.score;
    modalNik.value = tbl.nik;
    modalName.value = tbl.name;
    modalBirthPlace.value = tbl.birthPlace;
    modalBirthDate.value = tbl.birthDate;
    modalGender.value = tbl.gender
    modalBlood.value = tbl.bloodType;
    modalReligion.value = tbl.religion;
    modalMarriage.value = tbl.marriageSts;
    modalOccupation.value = tbl.occupation;
    modalImg.src = tbl.imgSource;

    

  }