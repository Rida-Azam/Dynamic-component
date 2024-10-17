import CountryInfo from '@/app/component/CountryInfo';

const countryData = {
  pakistan: {
    name: "Pakistan",
    population: 12343322,
    capital: "Islamabad",
  },
  canada: { 
    name: "Canada",
    population: 37742154,
    capital: "Ottawa"
  },
  germany: { 
    name: "Germany",
    population: 83783942,
    capital: "Berlin" 
  },
  japan: { 
    name: "Japan", 
    population: 126476461, 
    capital: "Tokyo" 
  },
  brazil: { 
    name: "Brazil", 
    population: 211000000, 
    capital: "Brasília" 
  },
  australia: { 
    name: "Australia", 
    population: 25499884, 
    capital: "Canberra" 
  },
};

interface CountryPageProps {
  params: { country: string };
}

export default function CountryPage({ params }: CountryPageProps) {
  const countryName = params.country.toLowerCase();
  const country = countryData[countryName as keyof typeof countryData];

  // console.log("Country Name from URL:", countryName); // Debugging log
  if (!country) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 max-w-md mx-auto bg-white border border-red-300 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">
            Country not found. Please check your URL.
          </p>
        </div>
      </div>
    );
  }
  // if (!country) {
  //   return <div className="text-center text-red-500">Country not found. Please check your URL.</div>;
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">{country.name}</h1>
        <CountryInfo
          name={country.name}
          capital={country.capital}
          population={country.population}       
        />
      </div>
    </div>
  );
}
















