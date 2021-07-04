export type weatherObjectModel = {
    locationObject: locationModel,
    currentWeatherObject: currentWeatherModel,
    forecastWeatherObject: forecastWeatherModel[],
}

class locationModel {
    name: string;
    lat: string;
    long: string;
    degreetype: 'C' | 'F';
}

class currentWeatherModel {
    temperature: string;
    date: string;
    observationtime: string;
    feelslike: string;
    winddisplay: string;
    imageUrl: string;
}

class forecastWeatherModel {
    low: string;
    high: string;
    skytextday: string;
    date: string;
    day: string;
    precip: string;
}
