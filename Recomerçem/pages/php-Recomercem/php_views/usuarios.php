<?php
    require_once('../php_libraries/bd.php');

    $usuarios = selectAllUsuaris();
    unset($usuarios[0]);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recomerçem</title>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="../tercers/darkly-bootstrap.min.css">
</head>

<body style="background-color: #FBF7F6;">
    
    <?php
        require_once("../php_partials/menu.php");
    ?>
    
    <div class="container">
    <?php require_once('../php_partials/mensajes.php') ?>
        <div class="card bg-light" style="margin-top: 10px;">
            <div class="card-header">
                <a>Usuarios</a>
            </div>
            <div class="card-body">
                <table class="table table-hover">
                    <thead>
                        <tr class="table-secondary">
                            <th scope="col">ID</th>
                            <th scope="col">Nickname</th>
                            <th scope="col">Email</th>
                            <!-- <th scope="col">Password</th> -->
                            <th scope="col">Admin</th>
                            <th scope="col">Puntos</th>
                            <th scope="col">Modificar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>

                        <?php foreach ($usuarios as $usuario) { ?>
                            <tr class="table-active">
                                <th scope="row"><?php echo $usuario['id'] ?></th>
                                <td><?php echo $usuario['nickname'] ?></td>
                                <td><?php echo $usuario['email'] ?></td>
                                <!-- <td type="password"><?php //echo $usuario['passw'] ?></td> -->
                                <td><?php echo $usuario['admin'] ?></td>
                                <td><?php echo $usuario['puntuacion'] ?></td>

                                <!-- BOTON MODIFICAR -->
                                <td>                                    
                                    <form action="../php_views/CRUD_usuario.php" method="POST">           

                                        <input type="hidden" id="id_usuario" name="id_usuario" value="<?php echo $usuario['id'] ?>">

                                        <button type="submit" class="btn" name="BtnUpdateUsuario">
                                        <img src="../media/edit.png" alt="modificar" width="30px" height="30px">
                                        </button>

                                    </form>
                                </td>

                                <!-- BOTON ELIMINAR -->
                                <td>
                                    <form action="../php_controllers/recomercemController.php" method="post">           

                                        <input type="hidden" id="id_usuario" name="id_usuario" value="<?php echo $usuario['id'] ?>">

                                        <button type="submit" class="btn " name="BtnDeleteUsuario" onclick="return confirm('Estas seguro que deseas eliminar?');">
                                            <img src="../media/delete.png" alt="borrar" width="30px" height="30px">   
                                        </button>

                                    </form>
                                </td>
                            </tr>
                        <?php } ?>

                    </tbody>
                </table>
                <form action="../php_views/CRUD_usuario.php">
                    <button type="submit" class="btn" style="background-color: #89c43f;">Crear Usuario</button>
                </form>

            </div>

        </div>
    </div>

</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

</html>