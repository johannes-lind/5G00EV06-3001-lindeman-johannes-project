export default function AddToList(film, image) {
  var titlelist = JSON.parse(localStorage.getItem("titles")) || [];
  var imagelist = JSON.parse(localStorage.getItem("images")) || [];
  var input1 = film;
  var input2 = image;

  titlelist.push(input1);
  imagelist.push(input2);
  console.log(titlelist);
  console.log(imagelist);

  localStorage.setItem("titles", JSON.stringify(titlelist));
  localStorage.setItem("images", JSON.stringify(imagelist));
}
