export class WeatherImage {
    private constructor (private name: string, private image: string) {}

    public static readonly RAINY = new WeatherImage("rainy", "rainy.img")
}