/**
 * This file handles multi party computation core functions
 * 
 * Authors:
 *  Jules Maire
 *  Tancrede Guillou
 * 
 * Last modified 20/09/2024
 */

import secrets from 'secrets.js-grempe';

// Custom function to convert a string to hexadecimal
function str2hex(str: string): string {
    return Buffer.from(str, 'utf8').toString('hex');
}

// Custom function to convert hexadecimal back to string
function hex2str(hex: string): string {
    return Buffer.from(hex, 'hex').toString('utf8');
}

export function mpcSplitData(body: string): secrets.Shares {
    const secretHex = str2hex(body)
    const shares = secrets.share(secretHex, 3, 2)
    return shares
}

export function mpcRecoverData(shares: secrets.Shares): string {
    const secretHex = secrets.combine(shares)
    const data = hex2str(secretHex)
    return data
}