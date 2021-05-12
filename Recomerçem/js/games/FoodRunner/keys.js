var keysPressed = {};

document.addEventListener( 'keydown', (event) =>
{
    keysPressed[event.key] = true;
});

document.addEventListener( 'keyup', (event) => 
{
    resetPG(event.key);
    delete keysPressed[event.key];
});

function getKeys()
{
    return keysPressed;
}