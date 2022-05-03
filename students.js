

const studente1 = {
    nome : 'Artiom',
    cognome : 'Sangiorgio',
    annoDiNascita : 1998,
    sesso : 'M',
    cittaDiNascita : 'San Pietroburgo',
}

const studente2 = {
    nome : 'Paolo',
    cognome : 'Foppiano',
    annoDiNascita : 1997,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}

const studente3 = {
    nome : 'Cinzia',
    cognome : 'Ariotti',
    annoDiNascita : 1996,
    sesso : 'F',
    cittaDiNascita : 'Genova',
}


const studente4 = {
    nome : 'Polina',
    cognome : 'Borect',
    annoDiNascita : 1994,
    sesso : 'F',
    cittaDiNascita : 'Chelyabinsk',
}


const studente5 = {
    nome : 'Giovanni',
    cognome : 'Cambiaso',
    annoDiNascita : 1997,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}


const studente6 = {
    nome : 'Mattia',
    cognome : 'Dalla Mutta',
    annoDiNascita : 1993,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}


const studente7 = {
    nome : 'Leslie',
    cognome : 'Fritas',
    annoDiNascita : 1995,
    sesso : 'F',
    cittaDiNascita : 'Lima',
}

const studente8 = {
    nome : 'Cristopher',
    cognome : 'Limone',
    annoDiNascita : 1994,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}

const studente9 = {
    nome : 'Jessica',
    cognome : 'Vitanza',
    annoDiNascita : 1995,
    sesso : 'F',
    cittaDiNascita : 'Palermo',
}

const studente10 = {
    nome : 'Mirco',
    cognome : 'Faro',
    annoDiNascita : 1993,
    sesso : 'M',
    cittaDiNascita : 'Santa Margherita',
}

const studenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10];


function createStudentsListHtml(studentsArray) {
    const container = document.getElementById('students-container');

    container.innerHTML = '';

    for (const student of studentsArray) {     ///Qua differisce dalla funzione precedente
      
      const li = document.createElement('li');
      
      const nameDiv = document.createElement('div');
      const nameNode = document.createTextNode(student.nome + ' ' + student.cognome);
      nameDiv.appendChild(nameNode);
    
      const ageDiv = document.createElement('div');
      const ageNode = document.createTextNode('Anno di nascita: ' + student.annoDiNascita);
      ageDiv.appendChild(ageNode);
    
      const bornDiv = document.createElement('div');
      const bornNode = document.createTextNode('Nato a: ' + student.cittaDiNascita)
      bornDiv.appendChild(bornNode);
    
      li.appendChild(nameDiv);
      li.appendChild(ageDiv);
      li.appendChild(bornDiv);
    
      container.appendChild(li);
    }
}


function showStudents() {
    createStudentsListHtml(studenti);
    
        // const container = document.getElementById('students-container');
    
        // container.innerHTML = '';
    
        // for (const student of studenti) {
          
        //   const li = document.createElement('li');
          
        //   const nameDiv = document.createElement('div');
        //   const nameNode = document.createTextNode(student.nome + ' ' + student.cognome);
        //   nameDiv.appendChild(nameNode);
        
        //   const ageDiv = document.createElement('div');
        //   const ageNode = document.createTextNode('Anno di nascita: ' + student.annoDiNascita);
        //   ageDiv.appendChild(ageNode);
        
        //   const bornDiv = document.createElement('div');
        //   const bornNode = document.createTextNode('Nato a: ' + student.cittaDiNascita)
        //   bornDiv.appendChild(bornNode);
        
        //   li.appendChild(nameDiv);
        //   li.appendChild(ageDiv);
        //   li.appendChild(bornDiv);
        
        //   container.appendChild(li);
        // }
    }


function showStudentsByAge() {

    const studentsCopy = [...studenti];
    
    studentsCopy.sort(compareStudentsByAge)

    createStudentsListHtml(studentsCopy );
}

    function compareStudentsByAge(stud1, stud2) {
        return stud2.annoDiNascita - stud1.annoDiNascita;
    }
    

function showFemaleStudents() {

    // const femaleStudents = studenti.filter((s) => s.sesso === 'F');  ////funzione con la lambda, preferibile utilizzare questa
    const femaleStudents = studenti.filter(keepfemale);
    createStudentsListHtml(femaleStudents);  
}

function keepfemale(studente) {
return studente.sesso === 'F';
}
 