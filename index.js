const label = document.getElementById('label');
const tampil = document.getElementById('tampil');
const addButton = document.getElementById('addButton');

const addlabel = () => {
  const label1 = document.getElementById('label').value;

  var label = {
    nama: label1
  }
  if (label !== "") {
    addtampil(label);
    console.log(label);
  } else {
    alert("input can be empty");
  }
};

const check = () => {
  if (localStorage.data) {
    const tampilArray = JSON.parse(localStorage.data)
    return tampilArray;
  } else {
    localStorage.setItem("data", "[]")
    return [];
  }
};

const settampil = newtampil => {
  localStorage.data = JSON.stringify(newtampil)
};

const addtampil = newtampil => {
  const tampilArray = check();
  tampilArray.push(newtampil);
  settampil(tampilArray);
};

const showtampil = () => {
  tampil.innerHTML = "";

  const data = check()
  data.map((tampils, index) => {
    const li = document.createElement("li");

    //const tampilNode = document.createTextNode(tampils.nama);
    li.innerHTML = `${tampils.nama}
    <i onclick="destroy(${index})">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp X</i>
    <i onclick="change(${index})">&nbsp edit</i>`

    // li.appendChild(tampilNode);

    tampil.appendChild(li);
  });

};

const destroy = (index) => {
  let tampilArray = check()
  tampilArray.splice(index, 1)
  localStorage.data = JSON.stringify(tampilArray)
  showtampil()
};

const change = (index) => {
  let change = prompt('Edit Text')
  //console.log(typeof change);
  let tampilArray = check()
  tampilArray[index].nama = change;
  //console.log(tampilArray)
  localStorage.data = JSON.stringify(tampilArray)
  showtampil()
}

const clear = () => {
  tampilArray = [];
  tampil.innerHTML = "";
  localStorage.clear();
}

const call = () => {
  addlabel();
  showtampil();
};

addButton.addEventListener("click", call);
showtampil();

addButton1.addEventListener("click", clear);
