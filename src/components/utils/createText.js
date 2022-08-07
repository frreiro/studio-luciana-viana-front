
export default function createText(procediments) {
    const baseText = 'Olá Luciana, gostaria de realizar a epilação no(s) seguintes lugares: ';
    const lugares = [];
    for (const procediment in procediments) {
        if (procediments[procediment]) lugares.push(procediment);
    }
    return `${baseText} ${lugares.join(', ').replace(/(.*), (.*)/, '$1 e $2')}`;
}