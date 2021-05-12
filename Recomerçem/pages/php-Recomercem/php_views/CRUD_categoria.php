<?php

    require_once('../php_libraries/bd.php');

    $isUpdate = false;

    if ( isset($_POST['id']) )
    {   
        $isUpdate = true;
        $id_categoria = $_POST['id'];
        $categoria = selectCategoria( $id_categoria );
    }

    $categorias = selectAllCategorias();
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
    if (!$isUpdate) {
        if (isset($_SESSION['categoria'])) {
            $categoria = $_SESSION['categoria'];
            unset($_SESSION['categoria']);
        } else {
            $categoria = [
                'nombre' => ''
            ];
        }
    }
        
    ?>
        <div class="card bg-light" style="margin-top: 10px;">
            <div class="card-header">
                <a>Categoria</a>
            </div>
            <div class="card-body">
                <form action="../php_controllers/recomercemController.php" method="POST">

                    <!-- NOMBRE -->
                    <div class="form-group row">
                        <label for="txtNombre" class="col-sm-2 col-form-label">Nombre</label>
                        <div class="col-sm-10">

                            <?php if ( $isUpdate ) { ?>

                                <!-- CREAR NOMBRE CATEGORIA -->
                                <input type="text" name="txtNombre" id="txtombre" autofocus class="form-control" placeholder="Nombre" value="<?php echo $categoria[0]['nombre'] ?>" required>

                            <?php } else { ?>

                                <!-- CREAR NOMBRE CATEGORIA -->
                                <input type="text" name="txtNombre" id="txtNombre" class="form-control" placeholder="Nombre" autofocus value="<?php echo $categoria['nombre'] ?>" required>

                            <?php } ?>

                        </div>
                    </div>

                    <!-- BOTON CANCELAR -->
                    <button type="button" class="btn btn-dark" style="float: right;" name="cancelarCategoria">
                        <a href="../php_views/categorias.php" style="color: white;">Cancelar</a>
                    </button>

                    <!-- BOTON ACEPTAR -->
                    <?php if ( $isUpdate ) { ?>

                        <!-- UPDATE BUTTON -->
                        <input type="hidden" id="id_categoria" name="id_categoria" value="<?php echo $id_categoria ?>">

                        <button type="submit" class="btn btn-success" style="margin-right: 10px; float: right;" name="updateCategoria">
                            Modificar Categoria
                        </button>

                    <?php } else { ?>

                        <!-- CREATE BUTTON -->
                        <button type="submit" class="btn" style="background-color: #89c43f; margin-right: 10px; float: right;" name="insertCategoria">
                            Crear Categoria
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