
const myprofile = document.getElementsByClassName('div-myPro')[0];
const nurseinfo = document.getElementsByClassName('nurse-info')[0];
nurseinfo.style.display = "none";

myprofile.addEventListener('click', function () {
    if (nurseinfo.style.display === "none") {
        nurseinfo.style.display = "flex";
        nurseinfo.innerHTML = ``;

        myprofile.style.color = "white"
        myprofile.style.background = "#89969e"
        myprofile.style.textShadow = "0px 0px 8px #0000008e"

        nurseinfo.innerHTML = `
        <div id="nprofile">
            <label for="n-name">Name:</label>
            <div name="n-name" id="n-name" class="n-data">Nurse. Ketty</div>
        </div>

        <div id="nprofile">
            <label for="n-quali">Qualification:</label>
            <div name="n-quali" id="n-quali" class="n-data">Master in Medical</div>
        </div>

        <div id="nprofile">
            <label for="n-contact">Contact:</label>
            <div name="n-contact" id="n-contact" class="n-data">012-345-6789</div>
        </div>

        <div id="nprofile">
            <label for="n-hospname">Hospital:</label>
            <div name="n-hospname" id="n-hospname" class="n-data">001,ABC Building,PQR city,on LMN road,XYZ-123001.
            </div>
        </div>

        <div id="nprofile">
            <label for="Hos-contact">Hospital Phone:</label>
            <div name="Hos-contact" id="Hos-contact" class="n-data">012-345-6789</div>
        </div>`

    } else {
        nurseinfo.style.display = "none";
        nurseinfo.innerHTML = ``

        myprofile.style.color = "black"
        myprofile.style.background = "white"
        myprofile.style.textShadow = "none"
    }
});

const addnewp = document.getElementById('addnewp');
const existingp = document.getElementById('existingp');
const addedlist = document.getElementById('addedlist');

const pDetailList = document.getElementsByClassName('p-detail-list')[0];

function showtble(){

    addedlist.style.color = '#fff';
    addedlist.style.background = '#89969e';
    addedlist.style.textShadow = '0px 0px 8px #0000008e';

    pDetailList.innerHTML = `<table>
                <tr>
                    <th>Patient Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Birth Date</th>
                    <th>Contact Number</th>
                    <th>Address</th>
                    <th>Admit Date-Time</th>
                    <th>Disease</th>
                    <th>Doctor Checkup</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>Male</td>
                    <td>1985-02-15</td>
                    <td>123-456-7890</td>
                    <td>123 Main St, Anytown, USA</td>
                    <td>2023-10-01 10:00 AM</td>
                    <td>Flu</td>
                    <td>---</td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>jane.smith@example.com</td>
                    <td>Female</td>
                    <td>1990-07-25</td>
                    <td>234-567-8901</td>
                    <td>456 Oak St, Sometown, USA</td>
                    <td>2023-10-05 02:30 PM</td>
                    <td>Asthma</td>
                    <td>Checked</td>

                </tr>
                <tr>
                    <td>Michael Johnson</td>
                    <td>michael.johnson@example.com</td>
                    <td>Male</td>
                    <td>1978-11-30</td>
                    <td>345-678-9012</td>
                    <td>789 Pine St, Yourtown, USA</td>
                    <td>2023-10-10 11:15 AM</td>
                    <td>Diabetes</td>
                    <td>Checked</td>

                </tr>
                <tr>
                    <td>Emily Davis</td>
                    <td>emily.davis@example.com</td>
                    <td>Female</td>
                    <td>1982-04-10</td>
                    <td>456-789-0123</td>
                    <td>101 Maple St, Hometown, USA</td>
                    <td>2023-10-12 09:45 AM</td>
                    <td>Hypertension</td>
                    <td>Checked</td>
                </tr>
                <tr>
                    <td>David Wilson</td>
                    <td>david.wilson@example.com</td>
                    <td>Male</td>
                    <td>1995-05-20</td>
                    <td>567-890-1234</td>
                    <td>202 Birch St, Anycity, USA</td>
                    <td>2023-10-15 03:20 PM</td>
                    <td>Allergy</td>
                    <td>Checked</td>
                </tr>
                <tr>
                    <td>Olivia Brown</td>
                    <td>olivia.brown@example.com</td>
                    <td>Female</td>
                    <td>1988-08-08</td>
                    <td>678-901-2345</td>
                    <td>303 Elm St, Anyville, USA</td>
                    <td>2023-10-18 01:10 PM</td>
                    <td>Arthritis</td>
                    <td>Checked</td>
                </tr>
                <tr>
                    <td>James Taylor</td>
                    <td>james.taylor@example.com</td>
                    <td>Male</td>
                    <td>1975-09-15</td>
                    <td>789-012-3456</td>
                    <td>404 Cedar St, Smalltown, USA</td>
                    <td>2023-10-20 08:30 AM</td>
                    <td>Heart Disease</td>
                    <td>Checked</td>
                </tr>
                <tr>
                    <td>Sophia Martinez</td>
                    <td>sophia.martinez@example.com</td>
                    <td>Female</td>
                    <td>1992-12-25</td>
                    <td>890-123-4567</td>
                    <td>505 Spruce St, Villagetown, USA</td>
                    <td>2023-10-22 10:50 AM</td>
                    <td>Infection</td>
                    <td>Checked</td>
                </tr>
                <tr>
                    <td>Daniel Anderson</td>
                    <td>daniel.anderson@example.com</td>
                    <td>Male</td>
                    <td>1980-03-05</td>
                    <td>901-234-5678</td>
                    <td>606 Ash St, Townville, USA</td>
                    <td>2023-10-25 12:00 PM</td>
                    <td>Kidney Disease</td>
                    <td>Checked</td>
                </tr>
                <tr>
                    <td>Isabella Thomas</td>
                    <td>isabella.thomas@example.com</td>
                    <td>Female</td>
                    <td>1983-06-18</td>
                    <td>012-345-6789</td>
                    <td>707 Willow St, Hamlet, USA</td>
                    <td>2023-10-27 04:00 PM</td>
                    <td>Pneumonia</td>
                    <td>Checked</td>
                </tr>
            </table>`
}

showtble()

function reset() {
    addnewp.style.color = '';
    addnewp.style.background = '';
    addnewp.style.textShadow = '';

    existingp.style.color = '';
    existingp.style.background = '';
    existingp.style.textShadow = ''

    addedlist.style.color = '';
    addedlist.style.background = '';
    addedlist.style.textShadow = ''

    pDetailList.innerHTML = ``;
}

addnewp.addEventListener('click', function () {
    reset()
    addnewp.style.color = '#fff';
    addnewp.style.background = '#89969e';
    addnewp.style.textShadow = '0px 0px 8px #0000008e';

    pDetailList.innerHTML = `<form action="addNewPatient.php" method="post">
                <label id="detail-tit">Patient Details:</label>

                <label for="addnew-pname">Patient Fullname:</label>
                <input type="text" class="f-input" name="addnew-pname" id="addnew-pname" placeholder="John doe">

                <label for="addnew-pemail">Enter Patient's Email:</label>
                <input type="email" class="f-input" name="addnew-pemail" id="addnew-pemail" placeholder="john.doe@example.com">

                <label for="addnew-pgen">Enter Patient's Gender:</label>
                <input type="email" class="f-input" name="addnew-pgen" id="addnew-pgen" placeholder="Male">

                <label for="addnew-pbirth">Enter Birthdate:</label>
                <input type="password" class="f-input" name="addnew-pbirth" id="addnew-pbirth" placeholder="1985-02-15">

                <label for="addnew-pphone">Patient Contact Number:</label>
                <input type="tel" class="f-input" name="addnew-pphone" id="addnew-pphone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                <small>Format: 123-456-7890</small>

                <label for="addnew-pAdd">Enter Patient's Address:</label>
                <input type="text" class="f-input" name="addnew-pAdd" id="addnew-pAdd" placeholder="123 Main St, Anytown, USA">

                <label for="admitDateTime">Admit Date-Time:</label>
                <input type="text" id="admitDateTime" class="f-input" name="admitDateTime" required placeholder="2023-10-01 10:00 AM">

                <label for="addnew-pdisease">Disease:</label>
                <input type="text" id="addnew-pdisease" class="f-input" name="addnew-pdisease" required placeholder="Flu">

                <input type="button" class="f-input" id="addtolist-post" value="Add to List">
                </form>`;
});

existingp.addEventListener('click', function () {
    reset()
    existingp.style.color = '#fff';
    existingp.style.background = '#89969e';
    existingp.style.textShadow = '0px 0px 8px #0000008e';

    pDetailList.innerHTML = `<form action="existentPatient.php" method="post">
                <label id="detail-tit">Search Patient :</label>

                <label for="exist-pemail">Enter Patient's Email:</label>
                <input type="email" class="f-input" name="addnew-pemail" id="addnew-pemail" placeholder="john.doe@example.com">

                <input type="button" class="f-input" id="searchExist" value="Search Email">

                <br><div id="note">*Note:<br>• If Patient Email does not Exist, this page automatically redirect to Add New Patient.</div>
                
                <label for="admitDateTime">Admit Date-Time:</label>
                <input type="text" id="admitDateTime" class="f-input" name="admitDateTime" required placeholder="2023-10-01 10:00 AM">
                
                <label for="addnew-pdisease">Disease:</label>
                <input type="text" id="addnew-pdisease" class="f-input" name="addnew-pdisease" required placeholder="Flu">
                
                <input type="button" class="f-input" id="addtolist-post" value="Add to List">
                </form>
                `;
});


addedlist.addEventListener('click', function () {
    reset()
    showtble()
});