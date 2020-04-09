// tslint:disable-next-line:no-reference
///<reference path="trigger_factory.ts"/>
const properties = PropertiesService.getScriptProperties();
const gcfURL = properties.getProperty("GCF_URL");

function publishWeatherScraping() {
    Logger.log('Publish-Weather-Scraping started.');
    try {
        UrlFetchApp.fetch(gcfURL);
        Logger.log('Publish-Weather-Scraping normal end.');
    } catch (e) {
        Logger.log('Publish-Weather-Scraping abnormal end.', e);
        throw e;
    } finally {
        deleteTrigger();
    }
}
