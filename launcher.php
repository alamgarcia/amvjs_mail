<?php
     $cuenta = $_GET["cuenta"];
?>

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Launcher</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body onload="lanzador()">
<p>Lanzando aplicación</p>
<script type="text/javascript">
    var cuentajs = "<?php echo $cuenta; ?>";
    console.log(cuentajs);
    localStorage.setItem("cuenta", cuentajs);

</script>
  <script>
  function lanzador() {
    window.open ("https://devavaya.ddns.net/amvmail/",
"mywindow","menubar=0,resizable=0,width=400,height=350");

  }
  setInterval(FetchData, 2000);
window.close();
  </script>
</body>
</html>
