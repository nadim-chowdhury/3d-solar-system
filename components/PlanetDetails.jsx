const PlanetDetails = ({ planet }) => {
  if (!planet) return <div>Select a planet to see details.</div>;

  return (
    <div className="bg-gray-800 text-white p-4 rounded">
      <h2 className="text-2xl font-bold">{planet.name}</h2>
      <p>{planet.description}</p>
      <ul className="mt-2">
        {planet.facts.map((fact, index) => (
          <li key={index} className="list-disc list-inside">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetDetails;
