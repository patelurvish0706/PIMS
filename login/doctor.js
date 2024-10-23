
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
            <div name="n-name" id="n-name" class="n-data">Dr. Joe</div>
        </div>

        <div id="nprofile">
            <label for="n-quali">Qualification:</label>
            <div name="n-quali" id="n-quali" class="n-data">Phd in Homeopathy</div>
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

const checkPatient = document.getElementById('checkPatient');

checkPatient.addEventListener('click', function () {
    const pDetailList = document.getElementById('p-detail-list');
    pDetailList.innerHTML = ``;
    pDetailList.innerHTML = `<form action="addNewPatient.php" method="post">

                <input type="button" class="f-input" id="check-cancel" value="Back">

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

    const checkCancel = document.getElementById('check-cancel');

    checkCancel.addEventListener('click', function () {

    });

});

