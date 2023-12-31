const ListEmployees = () => {
  const urlEmployee = "http://localhost:5000/api/hr/list-employee";
  const data = async function getEmployees() {
    const response = await fetch(urlEmployee);
    const jsonData = await response.json();
    return jsonData.data;
  };

  function start() {
    data()
      .then((data) => {
        renderEmployees(data);
      })
      .catch((error) => {
        console.log(error);
      });
    handleCreateEmployee();
    setTimeout(() => {
      handelDeleteEmployee();
  
    }, 1000);
  }
  start();

  // render list Employees
  function renderEmployees(data) {
    const listEmployees = document.querySelector("#list-products");
    const html = data.map((employee, index) => {
      return `
          <li
              class="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
              <div class="col-span-1 flex items-center">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p class="font-medium text-sm text-black dark:text-white ml-6">${
                    employee.Employee_ID
                  }</p>
                </div>
              </div>
              <div class="col-span-2 hidden items-center sm:flex">
                <p class="font-medium text-sm text-black dark:text-white">${
                  employee.First_Name +" "+employee.Middle_Initial+" "+ employee.Last_Name
                }</p>
              </div>
              <div class="col-span-1 flex items-center">
                <p class="font-medium text-sm text-meta-3">${employee.City}</p>
              </div>
              <div class="col-span-1 hidden items-center sm:flex">
                <p class="font-medium text-sm text-black dark:text-white lg:ml-4">${
                  employee.Ethnicity
                }</p>
              </div>
              <div class="col-span-1 flex items-center">
                <p class="font-medium text-sm text-black dark:text-white">${
                  employee.State
                }</p>
              </div>
              <div class="col-span-1 flex items-center">
                <p class="font-medium text-sm text-black">${
                  employee.Phone_Number
                }</p>
              </div>
              <div class="col-span-1 flex items-center ">
                <p class="font-medium text-sm text-meta-3 pr-10 w-[130px]">${
                  benefitPlans(employee.Benefit_Plans)
                }</p>
                <button id="btn-edit" data-employee-id="${employee.Employee_ID}" class="hover:text-primary" >
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 512 512">
                  <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                </button>
                <button id="btn-delete" data-employee-id="${ employee.Employee_ID}" class="hover:text-primary ml-3">
                <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                    fill="" />
                  <path
                    d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                    fill="" />
                  <path
                    d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                    fill="" />
                  <path
                    d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                    fill="" />
                </svg>
              </div>
          </li>
          `;
    });
    listEmployees.innerHTML = html.join("");
  }

  // handle create Employee
  function handleCreateEmployee() {
    var createBtn = document.querySelector("#addBtn");
    createBtn.onclick = function (e) {
      e.preventDefault();
      const id = document.querySelector("#employeeId").value;
      const firstName = document.querySelector("#firstName").value;
      const lastName = document.querySelector("#lastName").value;
      const middleInitial = document.querySelector("#middleInitial").value;
      const address1 = document.querySelector("#address1").value;
      const address2 = document.querySelector("#address2").value;
      const city = document.querySelector("#city").value;
      const state = document.querySelector("#state").value;
      const zip = document.querySelector("#zip").value;
      const email = document.querySelector("#email").value;
      const phoneNumber = document.querySelector("#phoneNumber").value;
      const socialSecurityNumber = document.querySelector("#socialSecurityNumber").value;
      const driversLicense = document.querySelector("#driversLicense").value;
      const maritalStatus = document.querySelector("#maritalStatus").value;
      const gender = document.querySelector("#gender").value;
      const shareholderStatus = document.querySelector("#shareholderStatus").value;
      const benefitPlans = document.querySelector("#benefitPlans").value;
      const ethnicity = document.querySelector("#ethnicity").value;
      const employmentStatus = document.querySelector("#employmentStatus").value;
      const hireDate = new Date(document.querySelector("#hireDate").value).toLocaleDateString("en-GB");
      const workersCompCode = document.querySelector("#workersCompCode").value;
      const terminationDate = new Date(document.querySelector("#terminationDate").value).toLocaleDateString("en-GB"); 
      const rehireDate = new Date(document.querySelector("#rehireDate").value).toLocaleDateString("en-GB"); 
      const lastReviewDate = new Date(document.querySelector("#lastReviewDate").value).toLocaleDateString("en-GB");

      const employeeData = {
        Employee_ID: id,
        First_Name: firstName,
        Last_Name: lastName,
        Middle_Initial: middleInitial,
        Address1: address1,
        Address2: address2,
        City: city,
        State: state,
        Zip: zip,
        Email: email,
        Phone_Number: phoneNumber,
        Social_Security_Number: socialSecurityNumber,
        Drivers_License: driversLicense,
        Marital_Status: maritalStatus,
        Gender: gender,
        Shareholder_Status: shareholderStatus,
        Benefit_Plans: benefitPlans,
        Ethnicity: ethnicity,
        Employment_Status: employmentStatus,
        Hire_Date: hireDate,
        Workers_Comp_Code: workersCompCode,
        Termination_Date: terminationDate,
        Rehire_Date: rehireDate,
        Last_Review_Date: lastReviewDate,
      };
      console.log(employeeData);
      createEmployee(employeeData);
      
    };
  }
  
  function createEmployee(data) {
    const addEmployeeUrl = "http://localhost:5000/api/hr/add-employee";
    fetch(addEmployeeUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add employee. Please try again.");
        }
      })
      .then((data) => {
        alert("Success Add Employee!", data);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to add employee. Please try again.");
      });
  }
  
  
  
  function handelDeleteEmployee() {
    var btnDeletes = document.querySelectorAll("#btn-delete");

    btnDeletes.forEach((btnDelete) => {
      btnDelete.addEventListener("click", function (event) {
        const employeeId = parseInt(this.getAttribute("data-employee-id"));
        removeEmployee(employeeId);
      });
    });
  }
  function removeEmployee(idEmployee) {
    const urlProduct = "http://localhost:5000/api/hr/delete-employee";
    fetch(`${urlProduct}/${idEmployee}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
function benefitPlans(num) {
   if(num === 1) return "Shareholder"
   else if(num === 2) return "Manager"
   else if(num === 3) return "Staff"
   else return "null";
}

  const addEmployeeBtn = document.getElementById("addEmployeeBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const employeeModal = document.getElementById("employeeModal");

  addEmployeeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    employeeModal.classList.remove("hidden");
  });

  cancelBtn.addEventListener("click", (even) => {
    event.preventDefault();
    employeeModal.classList.add("hidden");
  });
};
export default ListEmployees;
