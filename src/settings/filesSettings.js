import settingsPage from '../components/settingPage';

export default function filesSettings(onSaveSettings) {
  const title = strings.settings.capitalize();
  const values = appSettings.value.fileBrowser;

  const items = [
    {
      key: 'sortByName',
      text: strings['sort by name'],
      checkbox: values.sortByName,
    },
    {
      key: 'showHiddenFiles',
      text: strings['show hidden files'],
      checkbox: values.showHiddenFiles,
    },
  ];


  function callback(key, value) {
    appSettings.value.fileBrowser[key] = value;
    appSettings.update();
    if (onSaveSettings) onSaveSettings();
  }

  settingsPage(title, items, callback);
}
