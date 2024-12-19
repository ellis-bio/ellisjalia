---
layout: page
---
<html>
<head>
<style>
* {
  box-sizing: border-box;
}
.column {
  float: left;
  width: 33.33%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: CornSilk;
  border: 15px solid white;
}
/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 500px) {
  .column {
    width: 100%;
    float: left;
  }
}
img {
  box-shadow: -7px 7px 7px rgba(27, 1, 1, 0.58);
}
</style>
</head>
<body>
<div class="row">
  <div class="column">
    <img src="/assets/images/monet-3.png" style="width:100%">
  </div>
  <div class="column">
    <img src="/assets/images/musashi-3.png" style="width:100%">
  </div>
  <div class="column">
    <img src="/assets/images/laertius-1.png" style="width:100%">
  </div>
</div>
</body>
</html>