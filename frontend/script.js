document.getElementById('userForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nombre = e.target.nombre.value;
  const email = e.target.email.value;

  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, email })
  });

  const data = await response.json();
  alert(data.message);
});
