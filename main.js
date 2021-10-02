// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory (number, arrBases) {
  return {
    specimenNum: number,
    dna: arrBases,
    mutate() {
      let num = Math.floor(Math.random() * 15)
  console.log('index num: ', num)
// grabbing that indexnum from the array
  let orgi = newObj.dna[num]
  console.log('original: ', orgi)
// calling the function to generate a new one
  let replacement = returnRandBase()
  console.log('replacement: ', replacement)
// adding validation 
  orgi === replacement ? replacement =      returnRandBase() : console.log('1st nothing to do: ',  replacement) ;
  orgi === replacement ? replacement =      returnRandBase() : console.log('2nd nothing to do: ',  replacement) ;
  console.log('new replace: ', replacement)
  // // changing the old obj to the new obj. 
newObj.dna[num] = replacement
// console.log(newObj.dna[num])
// console.log(replacement)
return newObj.dna
    }
  }
};

const newObj = pAequorFactory(1, mockUpStrand())
console.log(newObj)






