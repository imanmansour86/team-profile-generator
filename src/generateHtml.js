//generate the html file
function generateHtml(data) {
  let currentObject = ``;
  console.log("all data here is", data);
  data.forEach((item) => {
    console.log("item here is", item);
    if (item.getRole() === "Manager") {
      currentObject += `
        
              <div class="g-col-6 g-col-md-4">
                <div class="card single-card" style="width: 18rem">
                  <div class="card-header d">${item.getName()}
                  <br />${item.getRole()}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${item.getId()}</li>
                    <li class="list-group-item">Email: 
                    <a href="mailto:${item.getEmail()}" target="blank">${item.getEmail()}</a>
                         
                    </li>
                 <li class="list-group-item">Office#: ${item.getOffice()}</li>
                  </ul>
                </div>
              </div>
      
            `;
    } else if (item.getRole() === "Engineer") {
      currentObject += `
        
      <div class="g-col-6 g-col-md-4">
                <div class="card single-card" style="width: 18rem">
                  <div class="card-header d">${item.getName()}
                  <br />${item.getRole()}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${item.getId()}</li>
                    <li class="list-group-item">Email: 
                    <a href="mailto:${item.getEmail()}" target="blank">${item.getEmail()}</a>
                         
                    </li>
                    <li class="list-group-item">Github:<a href="https://github.com/${item.getGithub()}" target ="blank"> ${item.getGithub()}</a></li>
                  </ul>
                </div>
                </div>
        
            `;
    } else if (item.getRole() === "Intern") {
      currentObject += `
        
              <div class="g-col-6 g-col-md-4">
                <div class="card single-card" style="width: 18rem">
                  <div class="card-header d">${item.getName()}
                  <br />${item.getRole()}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${item.getId()}</li>
                    <li class="list-group-item">Email: 
                    <a href="mailto:${item.getEmail()}" target="blank">${
        item.email
      }</a>
                    </li>
                    <li class="list-group-item">School: ${item.getSchool()}</li>
                  </ul>
                </div>
              </div>
           
            `;
    }
  });

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./style.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <header>
        <div class="head">My Team</div>
      </header>
  
      <div class="grid">
   
      ${currentObject}
  
      </div>
      
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
}

module.exports = generateHtml;
