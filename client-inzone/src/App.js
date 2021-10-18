import { useTranslation } from 'react-i18next';
function App() {
    const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <h1>InZone project</h1>
        <h2>{t('Welcome to React')}</h2>
        <h3>{t('test')}</h3>
    </div>
  );
}

export default App;
