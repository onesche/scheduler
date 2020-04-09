function setTrigger() {
    const time = new Date();
    time.setHours(0);
    time.setMinutes(0);
    ScriptApp.newTrigger('publishWeatherScraping').timeBased().at(time).create();
}

function deleteTrigger() {
    const triggers = ScriptApp.getProjectTriggers();
    for (const trigger of triggers) {
        if (trigger.getHandlerFunction() === 'publishWeatherScraping') {
            ScriptApp.deleteTrigger(trigger);
        }
    }
}