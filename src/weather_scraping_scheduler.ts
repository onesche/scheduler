// tslint:disable-next-line:no-reference
///<reference path="trigger_factory.ts"/>
import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

const GCF_ACCESS_KEY = PropertiesService.getScriptProperties().getProperty('GCF_ACCESS_KEY');
const FUNCTIONS_URL = PropertiesService.getScriptProperties().getProperty('FUNCTIONS_URL');

function publishWeatherScraping() {
    Logger.log('Publish-Weather-Scraping started.');
    try {
        const options = {
            'method': 'post',
            'contentType': 'application/json',
            'headers': {
                'Authorization': 'Bearer ' + GCF_ACCESS_KEY
            }
        } as URLFetchRequestOptions;
        UrlFetchApp.fetch(FUNCTIONS_URL, options);
        Logger.log('Publish-Weather-Scraping normal end.');
    } catch (e) {
        Logger.log('Publish-Weather-Scraping abnormal end.', e);
        throw e;
    } finally {
        deleteTrigger();
    }
}
