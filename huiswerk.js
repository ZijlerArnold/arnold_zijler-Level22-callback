let log = console.log;

log('===== Opdracht: Callbacks =====');
log('');


// Huiswerk maken
const huisWerkMaken = (vak, callback) => {
    setTimeout(() => {
        log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
        callback();
    },1000);
}


// Klaar met huiswerk 
const klaarMetHuiswerk = () => {log(`Paps/Mams, ik ben klaar met mijn huiswerk`)};
huisWerkMaken('WISKUNDE', klaarMetHuiswerk);




// const doHomeWork = (subject, callback) => {
//     alert(`Starting my ${subject} homework`);
//     callback();
// };

// const alertFinished = () => alert(`finishes with homework`);

// //doHomeWork('rekenen', () => alert(`finishes with homework`));
// doHomeWork('voetballen', alertFinished);


// T.get('search/tweets', params, function(err, data, response) {
//     if(!err){
//       // This is where the magic will happen
//     } else {
//       console.log(err);
//     }
//   })

