import { GeneralConfig } from "./config";
class ApiEndpoints {
    // We are taking api key from constructor
    constructor(apiKey = "test"){
        this.apiKey = apiKey;
    }

    // add a single endpoin to the object
    add(key, url) {
        this[key] = `${url}&api-key=${this.apiKey}`
    }
    
    // adding all endpoint to the object
    addAll(list) {
        if(!list) { return false; }
        for (const [key, url] of Object.entries(list)) {
            this.add(key, url);
        }
    }
}
let apiEndpoints = new ApiEndpoints(GeneralConfig.apiKey);

/**
 * All Api endpoint will be added here
 * Object Key for identify the endpoint
 */
let endPointsList = {
    topNews: "https://content.guardianapis.com/search?section=news&page-size=8&show-fields=body%2Cthumbnail,trailText",
    sports:  "https://content.guardianapis.com/search?section=sport&page-size=3&show-fields=body%2Cthumbnail",
    search:  "https://content.guardianapis.com/search?page-size=15&show-fields=body%2Cthumbnail",
    single:  "https://content.guardianapis.com/search?page-size=1&show-fields=body%2Cthumbnail%2CtrailText,headline&order-by=oldest",
    category:  "https://content.guardianapis.com/search?page-size=15&show-fields=body%2Cthumbnail%2CtrailText,headline",
    bookmark:  "https://content.guardianapis.com/search?page-size=15&show-fields=body%2Cthumbnail&order-by=oldest",
}


apiEndpoints.addAll(endPointsList);
export default apiEndpoints; 