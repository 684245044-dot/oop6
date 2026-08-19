class   WeatherStation {
    private _celsius: number;


    constructor (c:number) {
        this._celsius = c;
    }
    get fahrenheit(): number {
        return this._celsius * 9 / 5 + 32;
    }
    set fahrenheit(f: number) {
        if (f < -459.67) {
            console.error("อุณหภูมิไม่สามารถต่ำกว่าศูนย์สัมบูรณ์ได้");
            return;
        }else {
            this._celsius = (f - 32) * 5 / 9;
        }
    }
}
const station1 = new WeatherStation(32);
console.log(`celsius: ${station1.celsius}, fahrenheit: ${station1.fahrenheit}`);
station1.fahrenheit = 212;
console.log(`celsius: ${station1.celsius}, fahrenheit: ${station1.fahrenheit}`);
station1.fahrenheit = -500;
console.log(`celsius: ${station1.celsius}, fahrenheit: ${station1.fahrenheit}`);