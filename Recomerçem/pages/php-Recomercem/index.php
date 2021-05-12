<?php
    require_once('./php_libraries/bd.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recomerçem</title>
    <link rel="stylesheet" href="./tercers/darkly-bootstrap.min.css">
</head>

<body style="background-color: #FBF7F6;">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="d-flex w-50 order-0">
            <a class="navbar-brand mr-1 color-nav" href="">
                <!-- <h2>LANDING PAGE</h2> -->
                <img src="media/logo.png" alt="" style="width: 200px; height: 60px;">
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex ml-auto" style="margin-right: 30px;"> 
        <a class="navbar-brand mr-1 color-nav" href="../../index.html">
                <!-- <h2>LANDING PAGE</h2> -->
                <img src="media/house.png" alt="" style="width: 40px; height: 40px;">
            </a>
        </div>
    </nav>
    
    <div class="container">
    <?php require_once('./php_partials/mensajes.php') ?>
        <div class="card bg-light" style="margin-top: 10px;">
            <div class="card-header">
                <a>Login</a>
            </div>
            <div class="card-body">

                <form action="./php_controllers/recomercemController.php" method="POST">
                    <div class="form-group row">
                        <label for="txtEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" name="txtEmail" id="txtEmail" autofocus class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="txtContraseña" class="col-sm-2 col-form-label">Contraseña</label>
                        <div class="col-sm-10">
                            <input type="password" name="txtContraseña" id="txtContraseña" autofocus class="form-control" placeholder="Contraseña">
                        </div>
                    </div>

                    <div class="form-group row float-right" style="margin-right: 20px;">

                        <button type="submit" class="btn" style="background-color: #89c43f; margin-right: 10px; float: right;" name="Login">Entrar</button>
                        <input type="hidden" id="admin" name="admin" value="1">

                    </div>
                </form>

            </div>
        </div>
    </div>
</body>

</html>