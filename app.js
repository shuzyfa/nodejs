function getUsers() {

            
    axios.get(`https://mongodb-nodejscheck.herokuapp.com/users`)
        .then(function (response) {
            // console.log(response.data);

            let data = response.data;
            var hello = document.getElementById("table-body");
            document.getElementById("table-body").innerHTML = "";
            for (var i in data) {

                let rowData = data[i];
                console.log(rowData);
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var btnEdit = document.createElement('button');
                var btnClose = document.createElement('button');
                btnEdit.appendChild(document.createTextNode("Edit"));
                btnEdit.style.cssText = 'text-align: center !important ;padding: 7px; border:2px solid black; background-color: rgb(184, 236, 135); margin-right: 7px;';
                btnEdit.addEventListener('click', function () {
                    // delete the column here
                    updateUser(rowData._id);
                });
                // btnEdit.onclick= updateUser(rowData._id);
                btnClose.appendChild(document.createTextNode("Delete"));
                btnClose.style.cssText = 'text-align: center !important ;padding: 7px; border:2px solid black; background-color: rgb(236, 132, 90);';
                btnClose.addEventListener('click', function () {
                    // delete the column here
                    deleteUser(rowData._id)
                });
                // btnClose.onclick= deleteUser(rowData._id);
                td1.appendChild(document.createTextNode(rowData.name));
                td2.appendChild(document.createTextNode(rowData.email));
                td3.appendChild(document.createTextNode(rowData.address));
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(btnEdit);
                tr.appendChild(btnClose);
                hello.appendChild(tr);

            }


        })

}

function getUser() {

    const id = document.getElementById("USERID").value;
    document.getElementById("taBody").innerHTML = "";
    axios.get(`https://mongodb-nodejscheck.herokuapp.com/user/` + id)
        .then(function (response) {
            // console.log(response.data);

            let data = response.data;
            var hello = document.getElementById("taBody");
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            // var btnEdit = document.createElement('button');
            // var btnClose = document.createElement('button');
            // btnEdit.appendChild(document.createTextNode("Edit"));
            // btnEdit.onclick= updateUser(rowData._id);
            // btnClose.appendChild(document.createTextNode("Close"));
            // btnClose.onclick = deleteUser(rowData._id);
            td1.appendChild(document.createTextNode(data.name));
            td2.appendChild(document.createTextNode(data.email));
            td3.appendChild(document.createTextNode(data.address));
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            // tr.appendChild(btnEdit);
            // tr.appendChild(btnClose);
            hello.appendChild(tr);
        })

}

function pushUser() {

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const addr = document.getElementById("userAddr").value;
    axios.post(`https://mongodb-nodejscheck.herokuapp.com/user/`, {
        name: name,
        email: email,
        address: addr
    })
        .then(function (response) {
            alert(response.status + " User Sucessfully Added");
        })
        .catch(function (error) {
            console.log(error);
        });


}


function updateUser(id){

    // axios.put(`https://nodecurd4.herokuapp.com/user/`+id)
    // const id = document.getElementById("userID").value;
    const name = document.getElementById("username").value;
    const email = document.getElementById("useremail").value;
    const addr = document.getElementById("useraddr").value;
    axios.put(`https://mongodb-nodejscheck.herokuapp.com/user/`+id, {
    name: name,
    email: email,
    address: addr
  })
  .then(function (response) {
    alert(response.status+" User Sucessfully Updated");
  })
  .catch(function (error) {
    console.log(error);
  });



}

function deleteUser(id) {
    // const id = document.getElementById("userid").value;

    axios.delete(`https://mongodb-nodejscheck.herokuapp.com/user/` + id)
        .then(function (response) {
            alert(response.status + " User Sucessfully Deleted");
        })

}
