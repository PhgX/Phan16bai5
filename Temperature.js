class Temperature {
    Celsius;
    constructor (Celsius) {
        this.Celsius = Celsius;
    }

    getdoCtodoF() {
        let doF;
        return doF = this.Celsius*9/5 + 32;
    }

    getdoCtodoK () {
        let doK;
        return doK = this.Celsius*273.15;
    }

}