const about = document.getElementsByClassName('div-abt')[0];

const login = document.getElementsByClassName('div-log')[0];
const signup = document.getElementsByClassName('div-sign')[0];
const patdetail = document.getElementsByClassName('pat-detl')[0];

const context = document.getElementsByClassName('context')[0];
const content = document.getElementsByClassName('content')[0];
content.style.display = "none";

function reset() {
    content.style.display = "none"
    content.innerHTML = ""

    login.style.background = ""
    login.style.color = ""

    signup.style.background = ""
    signup.style.color = ""

    about.style.background = ""
    about.style.color = ""

    patdetail.style.background = ""
    patdetail.style.color = ""
}

context.innerHTML = `<div class="div-main">
<img src="https://images.pexels.com/photos/6129043/pexels-photo-6129043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="" srcset="" id="image-1">
<div class="div-image-txt">
    <div class="txt-wc">
        <div id="wc">Welcome,</div>
        <div id="pims"> to Patient Information Management system.</div>
        <div id="slog">We take care of your Patients' Data.</div>
    </div>
</div>
</div>

<div class="div-1-2">
<div id="para-texts">
    <h6>What we do</h6>
    <p>Our website is a cutting-edge solution designed to revolutionize how healthcare providers store,
        handle,
        and
        manage patient information. By centralizing all patient records in a secure and user-friendly
        database,
        we
        ensure that medical professionals can access critical information quickly and efficiently. Our
        platform
        features state-of-the-art encryption, robust user authentication, and comprehensive audit logs,
        guaranteeing
        the highest level of security for sensitive patient data. This allows healthcare providers to focus
        on
        delivering exceptional care without worrying about data breaches or compliance issues.</p>

    <p>Beyond security, our system offers unparalleled convenience and functionality. With intuitive
        interfaces
        and
        powerful tools, managing patient details has never been easier. Whether you're updating medical
        histories,
        tracking ongoing treatments, or scheduling future appointments, our platform streamlines every
        aspect of
        patient care. This seamless integration not only enhances productivity but also improves patient
        outcomes by
        ensuring that all information is accurate and up-to-date. Experience the future of healthcare
        management
        with our innovative and reliable solution.</p>
</div>
</div>`

about.addEventListener('click', () => {
    reset();

    context.style.display = "";
    about.style.background = "#89969e"
    about.style.color = "white"

});

login.addEventListener('click', () => {

    reset();

    content.style.display = ""

    context.style.display = "none";
    login.style.background = "#89969e"
    login.style.color = "white"


    const loginform = document.createElement('div');
    loginform.innerHTML = `<h6>Welcome Back...</h6>
            <form action="login.php" method="post">
               <label id="detail-tit">Doctor/Nurse Details:</label>
                
               <label for="log-role">Select Role:</label>
                <select name="log-role" id="log-role">
                <option value=""  disabled selected>Select---</option>
                <option value="log-doctor">Doctor</option>
                    <option value="log-nurse">Nurse</option>
                </select>
                
                <label for="log-email">Enter Email:</label>
                <input type="email" class="f-input" name="log-email" id="log-email" placeholder="doc-nurse123@gmail.com">
                
                <label for="log-password" >Enter Password:</label>
                <input type="password" class="f-input" name="log-password" id="log-password" placeholder="Doc-Nurse@1234">
               
                <label id="detail-tit" >Hospital Details:</label>
                
                <label for="log-hemail" >Enter Hospital name/Email:</label>
                <input type="text" class="f-input" name="log-hemail" id="log-hemail" placeholder="ABCHospital@mail.com">
                
                <label for="log-hpassword">Enter Email Password:</label>
                <input type="password" class="f-input" name="log-hpassword" id="log-hpassword" placeholder="hospital@1234">
                
                <label><a id="fgpswd" href="#" onclick="alert('Thats your problem.😕')">Forgot Password</a></label>

                <input type="button" class="f-input" id="go-login" value="Login">

                <a href="./login/nurse.html" target="_self">
                <input type="button" class="f-input" id="nurse-login" value="Guest Nurse">
                </a>

                <a href="./login/doctor.html" target="_self">
                <input type="button" class="f-input" id="doc-login" value="Guest Doctor">
                </a>

                <br><div id="note">*Note:<br>• For Patient's information, you have to choose <b>Patient details</b> option.</div>
            </form>`;

    content.appendChild(loginform);

    const roleSelect = document.getElementById('log-role');

    roleSelect.addEventListener('change', function() {
        const selectedRole = roleSelect.value;

        if (selectedRole === 'log-doctor') {
            console.log('Doctor selected');
            // Perform actions for Doctor role
        } 
        
        else if (selectedRole === 'log-nurse') {
            console.log('Nurse selected');
            // Perform actions for Nurse role
        } 
        
    
    });

});

signup.addEventListener('click', () => {
    reset();

    content.style.display = ""

    context.style.display = "none";
    signup.style.background = "#89969e"
    signup.style.color = "white"

    const signupform = document.createElement('div');
    signupform.innerHTML = `<h6>Register Here...</h6>
            <form action="signup.php" method="post">
               <label id="detail-tit">Doctor/Nurse Details:</label>
                
               <label for="sign-role">Select Role:</label>
                <select name="sign-role" id="sign-role">
                    <option value=""  disabled selected>Select---</option>
                    <option value="sign-doctor">Doctor</option>
                    <option value="sign-nurse">Nurse</option>
                </select>
                
                <label for="sign-uname">Enter Your Fullname:</label>
                <input type="text" class="f-input" name="sign-uname" id="sign-uname" placeholder="Dr.Joe / Nurse.Ketty">

                <label for="sign-u-quali">Enter Your Qualification:</label>
                <input type="text" class="f-input" name="sign-u-quali" id="sign-u-quali" placeholder="Phd in Specific Field">
                
                <label for="sign-phone">Contact Number:</label>
                <input type="tel" class="f-input" name="sign-phone" id="sign-phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                <small>Format: 123-456-7890</small>
                
                <label for="sign-uemail">Enter Email:</label>
                <input type="email" class="f-input" name="sign-uemail" id="sign-uemail" placeholder="doc-nurse123@gmail.com">

                <label for="sign-password">Enter Password:</label>
                <input type="password" class="f-input" name="sign-password" id="sign-password" placeholder="Doc-Nurse@1234">

                <label for="sign-re-password-password">Re-enter Password:</label>
                <input type="password" class="f-input" name="sign-re-password" id="sign-re-password" placeholder="Doc-Nurse@1234">
               
                <label id="detail-tit">Continue with:</label>

                <div id="sign-hprofile">
                <input type="button" class="f-input" id="exhosp" value="Existing Hospital Profile">
                <input type="button" class="f-input" id="newhosp" value="New Hospital Profile">
                </div>

                <div id="hform"></div>
                
                <input type="button" class="f-input" id="go-login" value="Register">

                <br><div id="note">*Note:<br>• For Patient's information, you have to choose <b>Patient details</b> option.</div>
            </form>`;


    content.appendChild(signupform);

    const hform = document.getElementById('hform');
    const exhosp = document.getElementById("exhosp");
    const newhosp = document.getElementById("newhosp");

    exhosp.addEventListener('click', function(){
        hform.innerHTML = ``;
        hform.innerHTML = `<label for="exist-hname">Enter Hospital name/Email:</label>
                <input type="text" class="f-input" name="exist" id="exist" placeholder="ABCHospital@mail.com">
                
                <label for="exist-hpassword">Enter Email Password:</label>
                <input type="password" class="f-input" name="exist-hpassword" id="exist-hpassword" placeholder="hospital@1234"> `;
    });

    newhosp.addEventListener('click', function(){
        hform.innerHTML = ``;
        hform.innerHTML = `<label for="new-hname">Enter New Hospital name/Email:</label>
                <input type="text" class="f-input" name="new-hname" id="new-hname" placeholder="ABCHospital@mail.com">
                
                <label for="new-hpassword">Create Password:</label>
                <input type="password" class="f-input" name="new-hpassword" id="new-hpassword" placeholder="hospital@1234">
                
                <label for="new-re-hpassword">Re-Enter Password:</label>
                <input type="password" class="f-input" name="new-re-hpassword" id="new-re-hpassword" placeholder="hospital@1234">

                <label for="new-hPhone">Enquiry Phone Number:</label>
                <input type="tel" class="f-input" name="new-hPhone" id="new-hPhone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                <small>Format: 123-456-7890</small>

                <label for="new-hAdd">Enter Hospital Address:</label>
                <input type="text" class="f-input" name="new-hAdd" id="new-hAdd" placeholder="001,ABC Building,PQR city,on LMN road,XYZ-123001.">
                `;
    });

});

patdetail.addEventListener('click', () => {
    reset();

    content.style.display = ""

    context.style.display = "none";
    patdetail.style.background = "#89969e"
    patdetail.style.color = "white"

    const patdetailform = document.createElement('div');
    patdetailform.innerHTML = `<h6>Get Patient's details Here...</h6>
            <form action="patientdetail.php" method="post">
                <label for="email">Enter Email:</label>
                <input type="email" class="f-input" name="email" id="userid" placeholder="john.doe@example.com">
                <input type="button" class="f-input" id="get-det" value="Get Details">
                <br><div id="note">*Note:<br>• Enter patients email id which you mention in report to Nurse.</div>
            </form>
            
            <div id="pdetsec"></div>

            `

    content.appendChild(patdetailform);

    const getdet = document.getElementById('get-det')
    const pdetsec = document.getElementById('pdetsec')
    pdetsec.innerHTML = ``

    getdet.addEventListener('click', function(){
        pdetsec.innerHTML = `

        <br>
        <div id="nprofile">
        <label for="">Patient Details</label>
        <br>
        <br>

        <label for="n-name">Name:</label>
        <div name="n-name" id="n-name" class="n-data">John doe</div>
    </div>

    <div id="nprofile">
        <label for="n-quali">Gender:</label>
        <div name="n-quali" id="n-quali" class="n-data">Male</div>
    </div>

    <div id="nprofile">
        <label for="n-contact">Contact:</label>
        <div name="n-contact" id="n-contact" class="n-data">012-345-6789</div>
    </div>

    <div id="nprofile">
        <label for="n-hospname">Address:</label>
        <div name="n-hospname" id="n-hospname" class="n-data">001,ABC Building,PQR city,on LMN road,XYZ-123001.
        </div>
    </div>

    <div id="nprofile">
        <label for="Hos-contact">Email:</label>
        <div name="Hos-contact" id="Hos-contact" class="n-data">john.doe@example.com</div>
    </div>
    
    <table>
                <tr>
                    <th>Hospitals</th>
                    <th>Admit Date-Time</th>
                    <th>Disease</th>
                </tr>
                <tr>
                    <td>ABC Hospital, Anytown, USA</td>
                    <td>2023-10-01 10:00 AM</td>
                    <td>Flu</td>
                </tr>
                <tr>
                    <td>Dr.Strange Heart, Sometown, USA</td>
                    <td>2023-10-05 02:30 PM</td>
                    <td>Asthma</td>
                </tr>
                <tr>
                    <td>Civil Hospital, Yourtown, USA</td>
                    <td>2023-10-10 11:15 AM</td>
                    <td>Diabetes</td>
                </tr>
                <tr>
                    <td>Nuerona Brain Hospital, Hometown, USA</td>
                    <td>2023-10-12 09:45 AM</td>
                    <td>Hypertension</td>
                </tr>
                <tr>
                    <td>SkinCarer, Anycity, USA</td>
                    <td>2023-10-15 03:20 PM</td>
                    <td>Allergy</td>
                </tr>
                <tr>
                    <td>Appolo Elm St, Anyville, USA</td>
                    <td>2023-10-18 01:10 PM</td>
                    <td>Arthritis</td>
                </tr>
                <tr>
                    <td>NewLife Hopt, Smalltown, USA</td>
                    <td>2023-10-20 08:30 AM</td>
                    <td>Heart Disease</td>
                </tr>
                <tr>
                    <td>YourCure Clinic, Villagetown, USA</td>
                    <td>2023-10-22 10:50 AM</td>
                    <td>Infection</td>
                </tr>
            </table>
            
<input type="button" class="f-input" id="cleardet" onclick="var pdetsec = document.getElementById('pdetsec'); if (pdetsec) { pdetsec.innerHTML = ''; };" value="Clear">
            `
    })

});

content.style.display = "none";
