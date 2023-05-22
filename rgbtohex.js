// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal 
// representation being returned. Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.

function rgb(r, g, b) {
    r = (r < 0) ? 0 : r;
    r = (r > 255) ? 255 : r;

    g = (g < 0) ? 0 : g;
    g = (g > 255) ? 255 : g;

    b = (b < 0) ? 0 : b;
    b = (b > 255) ? 255 : b;

    return (1 << 24 | r << 16 | g << 8 | b).toString(16).toUpperCase().slice(1);
}

// Tests : 
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3