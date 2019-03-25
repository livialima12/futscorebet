class DateHelper{
    
    constructor() {
        throw new Error('This class cannot be instantiated');
    }

    static textoParaData(texto){
        return new Date(texto.split('/').reverse().join('/'));
    }
    
    static dateToText(date) {
        const mes = date.toLocaleString('pt-br', { month: 'long' });
        return `${date.getDate(date)} de ${mes} de ${date.getFullYear(date)}`;
    }
}
