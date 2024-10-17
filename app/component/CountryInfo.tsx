// app/component/CountryInfo.tsx

interface CountryInfoProps {
  name: string;
  population: number;
  capital: string;
}

const CountryInfo = ({ name, population, capital }: CountryInfoProps) => {
  return (
    <div className="p-6 border border-blue-300 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <p className="text-2xl font-bold text-blue-700 mb-2">Country: {name}</p>
      <p className="text-lg text-gray-700 mb-2">Population: {population.toLocaleString()}</p>
      <p className="text-lg text-gray-700">Capital: {capital}</p>
    </div>
  );
};

export default CountryInfo;















