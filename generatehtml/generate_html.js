const fs = require('fs');

async function generate_html(manager_info, engineers_array, interns_array) {
  // console.log(manager_info, engineers_array, interns_array);
  
  const { name: ManagerName, id: ManagerId, email: ManagerEmail, officeNumber: ManagerOfficeNumber } = manager_info;

  const engineers_array_length = engineers_array.length;
  var EngineerNameArray = [];
  var EngineerIdArray = [];
  var EngineerEmailArray = [];
  var EngineerGithubArray = [];
  for (var i = 0; i < engineers_array_length; i++) {
    const { name: EngineerName, id: EngineerId, email: EngineerEmail, gh_username: EngineerGithub } = engineers_array[i];
    EngineerNameArray.push(EngineerName);
    EngineerIdArray.push(EngineerId);
    EngineerEmailArray.push(EngineerEmail);
    EngineerGithubArray.push(EngineerGithub);
  }
  var EngineerArray = [EngineerNameArray, EngineerIdArray, EngineerEmailArray, EngineerGithubArray];
  
  const interns_array_length = interns_array.length;
  var InternNameArray = [];
  var InternIdArray = [];
  var InternEmailArray = [];
  var InternSchoolArray = [];
  for (var j = 0; j < interns_array_length; j++) {
    const {name: InternName, id: InternId, email: InternEmail, school: InternSchool } = interns_array[j];
    InternNameArray[j] = InternName;
    InternIdArray[j] = InternId;
    InternEmailArray[j] = InternEmail;
    InternSchoolArray[j] = InternSchool;
  }
  var InternArray = [InternNameArray, InternIdArray, InternEmailArray, InternSchoolArray];
  
  var MembersArray = [EngineerArray, InternArray];
  EngineerNameArray = JSON.stringify(EngineerNameArray);
  EngineerIdArray = JSON.stringify(EngineerIdArray);
  EngineerEmailArray= JSON.stringify(EngineerEmailArray);
  EngineerGithubArray= JSON.stringify(EngineerGithubArray);
  InternNameArray= JSON.stringify(InternNameArray);
  InternIdArray= JSON.stringify(InternIdArray);
  InternEmailArray= JSON.stringify(InternEmailArray);
  InternSchoolArray= JSON.stringify(InternSchoolArray);
  
  console.log(MembersArray);
  var data = `<!DOCTYPE html>
    <html>
      <head>
        <title>My Team</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="./css/style.css" />
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <main>
          <div class="members" id="members">
            <section class="member_card">
              <header>${ManagerName}<br>Manager</header>
              <p>ID : ${ManagerId}</p>
              <p>E-Mail : ${ManagerEmail}</p>
              <p>Office Num : ${ManagerOfficeNumber}</p>
            </section>
          </div>
        </main>
        <script type="text/javascript">
          var EngineerNameArray = ${EngineerNameArray};
          var EngineerIdArray = ${EngineerIdArray};
          var EngineerEmailArray = ${EngineerEmailArray};
          var EngineerGithubArray = ${EngineerGithubArray};
          var InternNameArray = ${InternNameArray};
          var InternIdArray = ${InternIdArray};
          var InternEmailArray = ${InternEmailArray};
          var InternGithubArray = ${InternSchoolArray};

          for (var i = 0; i < ${engineers_array_length}; i++){
            var members = document.getElementById("members");
            console.log(members);
            var newSection = document.createElement("section");
            newSection.setAttribute('class', 'member_card');
            var header = document.createElement("header");
            header.textContent = EngineerNameArray[i];
            var p = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            p.textContent = EngineerIdArray[i];
            p2.textContent = EngineerEmailArray[i];
            p3.textContent = EngineerGithubArray[i];
            newSection.appendChild(header);
            newSection.appendChild(p);
            newSection.appendChild(p2);
            newSection.appendChild(p3);
            members.appendChild(newSection);
          }
          for (var j = 0; j < ${interns_array_length}; j++){
            var members = document.getElementById("members");
            console.log(members);
            var newSection = document.createElement("section");
            newSection.setAttribute('class', 'member_card');
            var header = document.createElement("header");
            header.textContent = InternNameArray[j];
            var p = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            p.textContent = InternIdArray[j];
            p2.textContent = InternEmailArray[j];
            p3.textContent = InternSchoolArray[j];
            newSection.appendChild(header);
            newSection.appendChild(p);
            newSection.appendChild(p2);
            newSection.appendChild(p3);
            members.appendChild(newSection);
          }
        </script>
      </body>
    </html>`
  
    fs.writeFile('./index.html', data, function (err, result) {
      if (err) console.log(err)
    });
}
module.exports = generate_html;