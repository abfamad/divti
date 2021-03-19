var dataTable = {  
      "score" : "80%",
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
    }

function setModalData(){
        
    
        
        modalNik.value = dataTable.nik;
        modalName.value = dataTable.name;
        modalBirthPlace.value = dataTable.birthPlace;
        modalBirthDate.value = dataTable.birthDate;
        modalGender.value = dataTable.gender
        modalBlood.value = dataTable.bloodType;
        modalReligion.value = dataTable.religion;
        modalMarriage.value = dataTable.marriageSts;
        modalOccupation.value = dataTable.occupation;
        modalImg.src = dataTable.imgSource;
}