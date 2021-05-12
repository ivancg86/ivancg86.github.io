<?php

require_once('../php_libraries/bd.php');

$isUpdate = false;

if (isset($_POST['BtnUpdateUsuario'])) {
    $isUpdate = true;
    $id_usuario = $_POST['id_usuario'];
    $usuario = selectUsuari($id_usuario);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recomerçem</title>
    <link rel="stylesheet" href="../tercers/darkly-bootstrap.min.css">
</head>

<body style="background-color: #FBF7F6;">
    <?php
    require_once("../php_partials/menu.php");
    ?>

    <div class="container">
        <?php require_once('../php_partials/mensajes.php');
        if (isset($_SESSION['usuario'])) {
            $usario = $_SESSION['usuario'];
            unset($_SESSION['usuario']);
        } else {
            $usario = [
                'nickname' => '',
                'email' => '',
                'passw' => '',
                'puntuacion' => '',
                'admin' => ''
            ];
        }
        ?>
        <div class="card bg-light" style="margin-top: 10px;">
            <div class="card-header">
                <a>Usuario</a>
            </div>
            <div class="card-body">
                <form action="../php_controllers/recomercemController.php" method="POST">

                    <!-- NICKNAME -->
                    <div class="form-group row">
                        <label for="txtNombre" class="col-sm-2 col-form-label">Nickname</label>
                        <div class="col-sm-10">

                            <?php if ($isUpdate) { ?>

                                <!-- EDITAR NICKNAME USUARIO -->
                                <input type="text" name="txtNickname" id="txtNickname" class="form-control" placeholder="Nickname" value="<?php echo $usuario[0]['nickname'] ?>" required>

                            <?php } else { ?>

                                <!-- CREAR NICKNAME USUARIO -->
                                <input type="text" name="txtNickname" id="txtNickname" class="form-control" placeholder="Nickname" autofocus required value="<?php echo $usario['nickname'] ?>">

                            <?php } ?>

                        </div>
                    </div>


                    <!-- EMAIL -->
                    <div class="form-group row">
                        <label for="txtEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">

                            <?php if ($isUpdate) { ?>

                                <!-- EDITAR EMAIL USUARIO -->
                                <input type="text" name="txtEmail" id="txtEmail" class="form-control" placeholder="Email" value="<?php echo $usuario[0]['email'] ?>" required>

                            <?php } else { ?>

                                <!-- CREAR EMAIL USUARIO -->
                                <input type="text" name="txtEmail" id="txtEmail" class="form-control" placeholder="Email" required value="<?php echo $usario['email'] ?>">

                            <?php } ?>

                        </div>
                    </div>


                    <!-- CONTRASEÑA -->
                    <div class="form-group row">
                        <label for="txtContrasenya" class="col-sm-2 col-form-label">Contraseña</label>
                        <div class="col-sm-10">

                            <?php if ($isUpdate) { ?>

                                <!-- EDITAR CONTRASEÑA USUARIO -->
                                <input type="password" name="txtContrasenya" id="txtContrasenya" class="form-control" placeholder="Contraseña" value="<?php echo $usuario[0]['passw'] ?>" required>

                            <?php } else { ?>

                                <!-- CREAR CONTRASEÑA USUARIO -->
                                <input type="password" name="txtContrasenya" id="txtContrasenya" class="form-control" placeholder="Contraseña" required value="<?php echo $usario['passw'] ?>">

                            <?php } ?>

                        </div>
                    </div>


                    <!-- PUNTUACION -->
                    <div class="form-group row">
                        <label for="txtPuntuacion" class="col-sm-2 col-form-label">Puntuación</label>
                        <div class="col-sm-10">

                            <?php if ($isUpdate) { ?>

                                <!-- EDITAR PUNTUACION USUARIO -->
                                <input type="text" name="txtPuntuacion" id="txtPuntuacion" class="form-control" placeholder="Puntuación" value="<?php echo $usuario[0]['puntuacion'] ?>" required>

                            <?php } else { ?>

                                <!-- CREAR PUNTUACION USUARIO -->
                                <input type="text" name="txtPuntuacion" id="txtPuntuacion" class="form-control" placeholder="Puntuación" required value="<?php echo $usario['puntuacion'] ?>">

                            <?php } ?>

                        </div>
                    </div>


                    <!-- ADMIN -->
                    <div class="form-group row" style="width: max-content; position:relative; left:95%">
                        <div class="form-check">
                            <label class="form-check-label" for="chbAdmin">

                                <?php if ($isUpdate) { ?>

                                    <!-- EDITAR ADMIN USUARIO -->

                                    <?php if ($usuario[0]['admin'] == 1) { ?>

                                        <input class="form-check-input" type="checkbox" value="1" checked name="chbAdmin" id="chbAdmin">

                                    <?php } else { ?>

                                        <input class="form-check-input" type="checkbox" value="1" name="chbAdmin" id="chbAdmin">

                                    <?php } ?>

                                <?php } else { ?>

                                    <!-- CREAR ADMIN USUARIO -->
                                    <input class="form-check-input" type="checkbox" value="1" name="chbAdmin" id="chbAdmin" <?php if ($usario['admin'] == 1) { ?>
                                        checked
                                    <?php }  ?>>

                                <?php } ?>

                                Admin
                            </label>

                        </div>
                    </div>


                    <!-- BOTON CANCELAR -->
                    <button type="button" class="btn btn-dark" style="float: right;" name="cancelarUsuario">
                        <a href="../php_views/usuarios.php" style="color: white;">Cancelar</a>
                    </button>


                    <!-- BOTON ACEPTAR -->
                    <?php if ($isUpdate) { ?>

                        <!-- UPDATE BUTTON -->
                        <input type="hidden" id="id_usuario" name="id_usuario" value="<?php echo $usuario[0]['id'] ?>">

                        <button type="submit" class="btn btn-success" style="margin-right: 10px; float: right;" name="updateUsuario">
                            Modificar Usuario
                        </button>

                    <?php } else { ?>

                        <!-- CREATE BUTTON -->
                        <button type="submit" class="btn" style="background-color: #89c43f; margin-right: 10px; float: right;" name="insertUsuario">
                            Aceptar
                        </button>

                    <?php } ?>

                </form>
            </div>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

</html>