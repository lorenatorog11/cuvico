const search = () => {
  console.log('Hola')
  document.getElementById("searchDivInput").classList.toggle("searchDivInputShowActive");
} 

document.getElementById("search").addEventListener("click", search);
