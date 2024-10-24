
//let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

//let activities = [
 //  {
       // category: "Adventures", 
       // id: "A101", 
       // name: "Valley Hot Air Balloons", 
       // description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.", 
       // location: "121 S. Main Street",
       // price: 265.00 
  // },

document.addEventListener("DOMContentLoaded", () => {

    document.body.innerHTML += `
<div> Catergories </div>
<select id="cats"><select>

<div> Activities </div>
<select id="acts"><select>

<div> Details </div>
<table id="details"><table>


`;

    for (c of catergories) {
        cats.appendChild(new Option(c));
    }
    cats.addEventListener("change", () => {
        acts.innerHTML = "";
        for (a of activities) {
            if (cats.value === a.catergory){
                acts.appendChild(new Option(a.name));
            }
        }
    });

    acts.addEventListener("change", ()=>{
details.innerHTML = ""
for(a in activities){
    if(a.id === acts.value){
        for( prop in a){
            let value = a[prop];
            details.innerHTML += `
            <tr>
            <th> ${prop} </th>
            <td> ${value}</td>
            </tr>
            `;
        }
    }
}
    });

});
