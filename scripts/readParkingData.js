fetch('data/parkingData.json')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); 
  })
  .then(data => {
      console.log(data);

      displayParkingData(data.parkingData);
  })
  .catch(error => {
      // Handle errors
      console.error('Fetch Error :-S', error);
  }); 


  function displayParkingData(parkingData) {
   const container = $("#log");
   container.empty();

   $.each(parkingData, (index, log) => {
    container.append(`
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><strong>${log.date}</strong></h5>
            <p class="card-text">${log.description}</p>
            <a href="#" class="btn btn-primary">Edit</a>
            <a href="#" class="btn btn-primary">Delete</a>
          </div>
        </div>
    `);
  });






//     for (const log of parkingData) {
//         console.log(`date: ${log.date}`);
//         console.log(`description: ${log.description}`);
//         document.getElementById('dataSpot').innerHTML += `<li class="list-group-item"><strong>${log.date}, ${log.description}</li>`; 

//  }
}


