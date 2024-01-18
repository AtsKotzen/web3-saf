import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { Button } from 'semantic-ui-react';
import Dropdown from './Dropdown';
import { SpeciesProvider } from './SpeciesContext';
import PlaningView from './PlaningView';
import Image from 'next/image';
import imageSucessao from '../../public/images/Tempo.jpeg';

function SafPlaning() {
  const [selectedSpecies, setSelectedSpecies] = useState({});
  const [savedData, setSavedData] = useState({});

  const stratumNames = ["Emergente", "Alto", "Médio", "Baixo"];
  const timePeriods = ['0-6 meses', '6-18 meses', '2-10 anos', '10-30 anos']; // Corrigindo o valor de '2-10 years'

  function handleSpeciesSelection(stratumName, timePeriod, species) {
    setSelectedSpecies((prev) => ({
      ...prev,
      [stratumName]: {
        ...prev[stratumName],
        [timePeriod]: species,
      },
    }));
  }

  function handleSave() {
    setSavedData(selectedSpecies);
  }

  return (
    <Layout>
      <h3>Planejamento de SAF</h3>
    <SpeciesProvider value={{ selectedSpecies, setSelectedSpecies }}>
      <div style={styles.container}>
        <Image src={imageSucessao} alt="Descrição da imagem" style={{ width: '69%' }}/>     
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Estratos</th>
              {timePeriods.map((timePeriod) => (
                <th key={timePeriod}>{timePeriod}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stratumNames.map((stratumName) => (
              <tr key={stratumName}>
                <td>{stratumName}</td>
                {timePeriods.map((timePeriod) => (
                  <td key={timePeriod}>
                    <Dropdown
                      selected={
                        selectedSpecies[stratumName]
                          ? selectedSpecies[stratumName][timePeriod]
                          : null
                      }
                      onSelect={(species) =>
                        handleSpeciesSelection(stratumName, timePeriod, species)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={handleSave} color='green' style={{ marginTop: '10px' }}>
          Salvar
        </Button>
        {savedData && <PlaningView savedData={savedData} stratumNames={stratumNames} timePeriods={timePeriods} style={{ marginBottom: '50px' }} />} {/* Adicionando timePeriods como propriedade */}
      </div>
    </SpeciesProvider>
    </Layout>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '40px' // Ajuste a margem conforme necessário
  },
  table: {
    borderCollapse: 'collapse',
    width: '50%', // Ajuste a largura conforme necessário
  },
  button: {
    marginTop: '10px',
  },
};

export default SafPlaning;
