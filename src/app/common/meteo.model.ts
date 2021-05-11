export class MeteoData {
    public solDate: string
    public earthDate: string
    public degreesMin: string
    public degreesMax: string
    constructor(solDate: string, earthDate: string, degreesMin: string, degreesMax: string) {
        this.solDate = solDate
        this.earthDate = earthDate
        this.degreesMin = degreesMin
        this.degreesMax = degreesMax
    }
}
