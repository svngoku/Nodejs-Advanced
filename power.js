/*
 * en : A command line application for generating powers of two
 * from 2^0 through 2^32.
 * 
 * fr : Une application en ligne de commande permettant de générer des puissances de deux 
 * de 2 ^ 0 à 2 ^ 32.
 */
for (let x = 1, i = 0; i <= 32; i += 1) {
    console.log('2^%d = %d', i, x);
    x += x;
}
