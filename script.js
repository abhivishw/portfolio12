 const form = document.getElementById('studentForm');
    const tableBody = document.querySelector('#studentTable tbody');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const father = document.getElementById('father').value;
      const mother = document.getElementById('mother').value;
      const address = document.getElementById('address').value;
      const contact = document.getElementById('contact').value;
      const portfolio = document.getElementById('portfolio').value;
      const photoFile = document.getElementById('photo').files[0];

      const reader = new FileReader();
      reader.onload = function () {
        const photoURL = reader.result;

        const row = document.createElement('tr');
        row.innerHTML = `
          <td><img src="${photoURL}" alt="Student Photo"></td>
          <td>${name}</td>
          <td>${father}</td>
          <td>${mother}</td>
          <td>${address}</td>
          <td>${contact}</td>
          <td><a href="${portfolio}" target="_blank">View</a></td>
        `;
        tableBody.appendChild(row);
        form.reset();
      };
      if (photoFile) {
        reader.readAsDataURL(photoFile);
      }
    });