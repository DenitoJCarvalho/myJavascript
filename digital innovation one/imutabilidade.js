//Imutabilidade
console.log(`===================== \nExemplo 01`)
const user = {
    name: 'Adrian',
    lastname: 'Deni de Carvalho'
}

function getUserWithFullName(user) {
    return {
        ...user, //usando spread operators que irá integrar os conteudos em user dentro dessa função
        fullName: `${user.name} ${user.lastname}`
    }
}

const userWithFullName = getUserWithFullName(user)

console.log(`${userWithFullName}\n`)
console.log(`===================== \nExemplo 02\n`)
const students = [{
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
]

//Nessa função retornará todas os alunos aprovados entre 7 e 10
function getApprovedStudents(studentsLists) {
    return studentsLists.filter(students => students.grade >= 7)
}

console.log('Alunos aporvados')
console.log(getApprovedStudents(students))

console.log('\nLista de alunos')
console.log(students)