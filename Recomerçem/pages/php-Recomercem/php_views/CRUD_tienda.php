<?php

require_once('../php_libraries/bd.php');

$isUpdate = false;

if (isset($_POST['BtnUpdateTienda'])) {
    $isUpdate = true;
    $id_tienda = $_POST['id_tienda'];
    $tienda = selectTienda($id_tienda);
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
    if (!isset($_POST['BtnUpdateTienda'])) {
        if (isset($_SESSION['tienda'])) {
            $tienda = $_SESSION['tienda'];
            unset($_SESSION['tienda']);
        } else {
            $tienda = [
                'nombre' => '',
                'localizacion' => '',
                'categoria' => ''
            ];
        }
    }
    ?>


    <div class="container">
        <?php require_once('../php_partials/mensajes.php') ?>
        <div class="card bg-light" style="margin-top: 10px;">
            <div class="card-header">
                <a>Tienda</a>
            </div>
            <div class="card-body">
                <form action="../php_controllers/recomercemController.php" method="POST">

                    <!-- NOMBRE -->
                    <div class="form-group row">
                        <label for="txtNombre" class="col-sm-2 col-form-label">Nombre</label>
                        <div class="col-sm-10">

                            <?php if ($isUpdate) { ?>

                                <!-- CREAR NOMBRE TIENDA -->
                                <input type="text" name="txtNombre" id="txtombre" autofocus class="form-control" placeholder="Nombre" value="<?php echo $tienda[0]['nombre'] ?>" required>

                            <?php } else { ?>

                                <!-- CREAR NOMBRE TIENDA -->
                                <input type="text" name="txtNombre" id="txtNombre" class="form-control" placeholder="Nombre" autofocus required value="<?php echo $tienda['nombre'] ?>">

                            <?php } ?>

                        </div>
                    </div>

                    <!-- LOCALIZACIÓN -->
                    <div class="form-group row">
                        <label for="txtLocalizacion" class="col-sm-2 col-form-label">Localización</label>
                        <div class="col-sm-10">

                            <?php if ($isUpdate) { ?>

                                <!-- CREAR LOCALIZACION TIENDA -->
                                <input type="text" name="txtLocalizacion" id="txtLocalizacion" autofocus class="form-control" placeholder="Localización" value="<?php echo $tienda[0]['Localizacion'] ?>" required>

                            <?php } else { ?>

                                <!-- CREAR LOCALIZACION TIENDA -->
                                <input type="text" name="txtLocalizacion" id="txtLocalizacion" autofocus class="form-control" placeholder="Localización" required value="<?php echo $tienda['localizacion'] ?>">

                            <?php } ?>

                        </div>
                    </div>

                    <!-- CATEGORIA -->
                    <div class="form-group row">
                        <label for="cbxCategoria" class="col-sm-2 col-form-label">Categoría</label>
                        <div class="col-sm-10">

                            <select class="custom-select" name="cbxCategoria" id="cbxCategoria">

                                <?php if ($isUpdate) { ?>

                                    <!-- CREAR CATEGORIA TIENDA -->
                                    <?php foreach ($categorias as $categoria) { ?>

                                        <?php if ($categoria['nombre'] == $tienda[0]['categoria_nombre']) { ?>

                                            <option value="<?php echo $categoria['nombre'] ?>" selected="selected"><?php echo $categoria['nombre'] ?></option>

                                        <?php } else { ?>

                                            <option value="<?php echo $categoria['nombre'] ?>"><?php echo $categoria['nombre'] ?></option>

                                        <?php } ?>

                                    <?php } ?>

                                <?php } else { ?>

                                    <!-- CREAR CATEGORIA TIENDA -->
                                    <?php foreach ($categorias as $categoria) { ?>

                                        <option value="<?php echo $categoria['nombre'] ?>" <?php if ($categoria['nombre'] == $tienda['categoria']) { ?> selected="selected" <?php }  ?>><?php echo $categoria['nombre'] ?></option>>

                                    <?php } ?>

                                <?php } ?>

                            </select>

                        </div>
                    </div>

                    <!-- BOTON CANCELAR -->
                    <button type="button" class="btn btn-dark" style="float: right;" name="cancelarTienda">
                        <a href="../php_views/tiendas.php" style="color: white;">Cancelar</a>
                    </button>

                    <!-- BOTON ACEPTAR -->
                    <?php if ($isUpdate) { ?>

                        <!-- UPDATE BUTTON -->
                        <input type="hidden" id="id_tienda" name="id_tienda" value="<?php echo $tienda[0]['id'] ?>">

                        <button type="submit" class="btn btn-success" style="margin-right: 10px; float: right;" name="updateTienda">
                            Modificar Tienda
                        </button>

                    <?php } else { ?>

                        <!-- CREATE BUTTON -->
                        <button type="submit" class="btn" style="background-color: #89c43f; margin-right: 10px; float: right;" name="insertTienda">
                            Crear Tienda
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