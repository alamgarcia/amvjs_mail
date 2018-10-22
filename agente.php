<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <title>Hello, world!</title>
 </head>
 <body>
   <table class="table">
  <thead class="thead-dark">
    <tr>

      <th scope="col">Cuenta</th>
      <th scope="col">Nombre</th>
      <th scope="col">Teléfono</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <?php
      $servername = "localhost";
      $username = "amv_db";
      $password = "6xO-[iG&%{x6";
      $dbname = "amv_test";

      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);
      // Check connection
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }
      $cuenta = $_GET["cuenta"];

      $sql = "SELECT * FROM clientes WHERE cuenta = $cuenta";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
          // output data of each row
          while($row = $result->fetch_assoc()) {
              echo  "<td>". $row["id"]."</td>";
              echo  "<td>". $row["nombre"]."</td>";
              echo  "<td>". $row["telefono"]."</td>";
          }
      } else {
          echo "0 results";
      }
      $conn->close();
      ?>
    </tr>

  </tbody>
</table>


   <!-- Optional JavaScript -->
   <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
 </body>
</html>
